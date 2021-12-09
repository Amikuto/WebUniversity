function parse_data() {
    // let str = "";
    let data_len = data.length;
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

    console.log(JSON.stringify(filtered_data))

    // new File("BufferSource", "data.json")
    //
    // read_file();
    //
    //
    // let file = input.files[0];
    //
    // let reader = new FileReader();
    // reader.readAsText(file);

    // const fs = require("fs");

    // читаешь содержимое из файла
    // const content = fs.readFileSync(__dirname + "/data.json", {
    //     encoding: "utf8"
    // });

    // // преобразовываешь в объект
    // const json = JSON.parse(String(content));
    //
    // // производишь манипуляции
    // const dist = {
    //     id: json.id,
    //     name: json.name,
    //     admin: json.admin
    // };
    //
    // // преобразоываешь в строку
    // const string =  JSON.stringify(dist)
    //
    // // записываешь в результирующий файл
    // fs.writeFileSync(__dirname + "/dist.json", string);

    // console.log(json);
}

function read_file() {
    const fs = require("fs");

}