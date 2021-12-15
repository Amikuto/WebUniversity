const fs = require("fs")
console.log("Чтение файла")
let data = fs.readFileSync("./Lessons12-13/Task1/data/raw_data.js", "utf8");

let data_len = data.length;
let filtered_data = []

let json_data = JSON.parse(data);

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

try {
    fs.writeFileSync("./Lessons12-13/Task1/data/data_out.js", JSON.stringify(filtered_data))
    console.log("Запись в файл отфильтрованных данных")
} catch (err) {
    console.error(err)
}



const axios = require('axios');

async function search(str) {
  const geocoderUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(str) +
    '.json?access_token=' +
    'pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g';

  const res = await axios.get(geocoderUrl).then(res => res.data);
  const point = res.features[0].geometry;

  return 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/' +
    'pin-l-1+333(' + point.coordinates[0] + ',' + point.coordinates[1] + ')/' +
    point.coordinates[0] + ',' + point.coordinates[1] +
    ',14.25,0,0/600x600/' +
    '?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g';
}

search('429 Lenox Ave, Miami Beach').then(res => console.log(res));