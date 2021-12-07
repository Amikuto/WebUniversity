function parse_data() {
    let data_len = EGE.length
    let str = "" +
        // "<thead>" +
        "<tr>" +
        "<th>Название учебного заведения</th>" +
        "<th>Административный округ</th>" +
        "<th>Район</th>" +
        "<th>Количество учащихся с баллом выше 220</th>" +
        "<th>Количество учащихся с балом ниже 160</th>" +
        "</tr>"
        // "</thead>"
    for (let i = 0; i < data_len; i++) {
        let name = EGE[i].EDU_NAME
        let adm_area = EGE[i].AdmArea
        let district = EGE[i].District
        let passed_over_220 = EGE[i].PASSES_OVER_220
        let passed_under_160 = EGE[i].PASSER_UNDER_160
        str += `<tr><td>${name}</td><td>${adm_area}</td><td>${district}</td><td>${passed_over_220}</td><td>${passed_under_160}</td></tr>`
    }
    document.getElementById("table").innerHTML = str;
}