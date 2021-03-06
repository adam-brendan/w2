var https = require("https");

function getAndPrintHTML () {

  var printOut = "";
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  // Get = HTTP method used to retrieve data
  https.get(requestOptions, function(response) {

    response.setEncoding("utf8");

    // Callback invoked when a data chunk is received
    response.on("data", function(data) {
      printOut += data;
    });

    //Callback invoked when all of the data has been received
    response.on("end", function() {
      console.log(printOut);
    });
  });
};

//Call to the function
getAndPrintHTML();