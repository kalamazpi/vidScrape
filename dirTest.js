let fs = require("fs"),
    path = require("path");

let p = "C:\\Users\\bpd\\AppData\\Local\\Packages\\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\\AC\\#!001\\MicrosoftEdge\\Cache\\95L881RK\\";

fs.readdir(p, function(err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
    //}).filter(function (file) {
    //    return fs.statSync(file).isDirectory();
    }).filter(function (file) {
        return path.extname(file).includes(".mp4");
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
});

