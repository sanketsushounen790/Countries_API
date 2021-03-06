const fs = require("fs")

function loadJSON(filename) {
    return JSON.parse(
        fs.existsSync(filename)
            ? fs.readFileSync(filename).toString()
            : 'null'
    )
}

function saveJSON(filename, json) {
    return fs.writeFileSync(filename, JSON.stringify(json))
}

/* var countriesList = loadJSON("countriesList.json")
var data = loadJSON("db.json") */

/* for ( var i=0;i<data["countriesAPI"].length;i++){
    for(var j=0;j<countriesList["countriesList"].length;j++){
        if(data["countriesAPI"][i]["name"]===countriesList["countriesList"][j]["name"]){
            data["countriesAPI"][i]["translation"] = countriesList["countriesList"][j]["nationalAnthem"]
        }
    }
}  */

/* countriesList["countriesList"].map(d => {
    d["name"]["en"]= d["translations"]["en"]
})  */

/* data["countriesAPI"].map(d => {
    d["name"]["fr"] = d["translations"]["fr"]
}) */

/* saveJSON("db.json", data) */

