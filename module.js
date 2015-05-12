var fs = require("fs");

var filename = process.argv[2];

fs.readFile(filename, function(err, data) {
  if (err) throw err;

  fs.writeFile(filename + ".copy", data.toString(), function (err) {
    if (err) throw err;
    console.log('It saved!');
  });
});
