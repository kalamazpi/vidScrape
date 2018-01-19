let fs = require("fs"),
    path = require("path");

let p = "C:\\Users\\bpd\\AppData\\Local\\Packages\\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\\AC\\#!001\\MicrosoftEdge\\Cache\\";

fs.readdir(p, function(err, files) {
    if (err) {
        throw err;
    }

    for (let i = 0; i < files.length; i += 1) {
        if (fs.statSync(files[i]).isDirectory()) {
            fs.readdir(files[i], function(err, files2) {
                if (err) {
                    throw err;
                }
                for (let j = 0; j < files2.length; j += 1) {
                    console.log(files[i]);
                }
            });
        }
        console.log(files[i]);
    }
    //files.map(function (file) {
    //    return path.join(p, file);
    //}).filter(function (file) {
    //    return fs.statSync(file).isDirectory();
    //}).filter(function (file) {
    //    return path.extname(file).includes(".mp4");
    //}).forEach(function (file) {
    //    console.log("%s (%s)", file, path.extname(file));
    //});
});

