const root = document.querySelector("#app");
root.innerHTML = "<h1>It builds!</h1>";

var request = new XMLHttpRequest();
request.open("GET", "/api/habit/list", true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    console.log(data);
  } else {
    // We reached our target server, but it returned an error
    console.error("Failed!");
  }
};

request.onerror = function(error) {
  // There was a connection error of some sort
  console.warn(error);
};

request.send();
