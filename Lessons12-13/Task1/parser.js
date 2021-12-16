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
    console.log(filtered_data)

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    filtered_data.forEach(
        element => [element.geo_data.coordinates].forEach(
            xy => ctx.fillRect(xy[0], xy[1], 2, 2)))


    let neigh = []
    filtered_data.forEach(element => neigh.push([element.adm_area, element.district, element.address]))
    console.log(neigh)
}