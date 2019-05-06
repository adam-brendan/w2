var https = require("https");

//This is the host that the function is reading from
function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

// Get = HTTP method used to retrieve data
  https.get(requestOptions, function(response) {

    response.setEncoding("utf8");

    // Callback invoked when a data chunk is received
    response.on("data", function(data) {
      console.log(data + "\n");
    });

    //Callback invoked when all of the data has been received
    response.on("end", function() {
      console.log("Response stream complete.");
    });

  });

};

//Call to the function
getAndPrintHTMLChunks();