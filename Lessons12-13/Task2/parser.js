function parse_data() {
    let filtered_data = []

    let json_data = JSON.parse(JSON.stringify(data));

    for (const i in json_data) {
        var territorialDivisionOfProperty = {
            id: json_data[i].id,
            full_name: json_data[i].FullName,
            short_name: json_data[i].ShortName,
            adm_area: json_data[i].AdmArea,
            district: json_data[i].District,
            phone: json_data[i].Phone,
            address: json_data[i].Address,
            chief_name: json_data[i].ChiefName,
            geo_data: json_data[i].geoData,
            geodata_center: json_data[i].geodata_center
        };

        filtered_data.push(territorialDivisionOfProperty)
    }
    let data_out = JSON.stringify(filtered_data)
    return filtered_data
}

function printCanvas(coords) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // coords.forEach(xy => ctx.fillRect(xy[0], xy[1], 2, 2))
    ctx.fillRect(coords[0], coords[1], 2, 2)
}

function getStatistic(data) {
    let neigh = []
    data.forEach(element => neigh.push([element.adm_area, element.district, element.address]))
    return neigh
}

function generateRandomNumbers(max, len) {
    let listOfNums = []
    for (let i = 0; i < len; i++) {
        listOfNums.push([Math.floor(Math.random() * max), Math.floor(Math.random() * max)]);
    }
    return listOfNums
}

function clearCanvas() {
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function printParsedData() {
    clearCanvas();
    parse_data().forEach(el => printCanvas(el.geo_data.coordinates))
}

function printGeneratedNumbers(event) {
    clearCanvas();
    event.currentTarget.numbers.forEach(element => printCanvas(element));
    taskFunc(event.currentTarget.numbers);
}

function taskFunc(x) {
    let list1 = []
    for (let j = 0; j < x.length; j++) {
        let list2 = [];
        for (let i = 0; i < x.length; i++) {
            if (i === j) {
                continue;
            }
            list2.push(findLenBtwDots(x[j], x[i]));
        }
        list1.push(arrayMin(list2));
    }

    const indexMinor = list1.indexOf(Math.min(...list1));
    console.log(x[indexMinor]);
    colorDot(x[indexMinor]);
}

function arrayMin(arr) {
    return arr.reduce(function (p, v) {
        return (p < v ? p : v);
    });
}

function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}

function findLenBtwDots(dot1, dot2) {
    return Math.sqrt(Math.pow(dot1[0] - dot2[0], 2) + Math.pow(dot1[1] - dot2[1], 2))
}

function colorDot(coords) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "Red";
    ctx.fillRect(coords[0], coords[1], 4, 4)
    ctx.fillStyle = "Black";
}

function main() {
    document.getElementById("json_button").addEventListener("click", printParsedData, false);

    const generatedNumbers = generateRandomNumbers(500, 100);

    const genButton = document.getElementById("generated_button")
    genButton.addEventListener("click", printGeneratedNumbers, false);
    genButton.numbers = generatedNumbers
    genButton.max = 500;
    genButton.len = 100;

}