var https = require("https");

module.exports = function getHTML (options, callback) {

  var printOut = "";
  https.get(options, function(response) {

    response.setEncoding("utf8");

    // Callback invoked when a data chunk is received
    response.on("data", function(data) {
      printOut += data;
    });

    //Callback invoked when all of the data has been received
    response.on("end", function() {
      callback(printOut);
    });
  });
};