//var csv is the CSV file without headers
function CSV2ObjArray(csv, headers) {
    //var lines = csv.split("\n");
    var lines = csv.split(/\r\n/);
    var objArray = [];

    //for(var i=0; i<lines.length - 1; i++){ // Ni idea, pero proceso un regitro de mas....
    for (var i = 0; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split("|");

        for (var j = 0; j < currentline.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        objArray.push(obj);
    }

    return objArray; //JavaScript object
}

//var csv is the CSV file with headers
function CSVH2ObjArray(csv) {
    var lines = csv.split("\n");
    var objArray = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        objArray.push(obj);
    }

    return objArray; //JavaScript object
}
