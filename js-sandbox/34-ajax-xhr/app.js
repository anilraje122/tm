document.getElementById("button").addEventListener("click", loadData);

function loadData(e) {
  // Create XHR object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET", "data.txt", true);

  // Method 1
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById("output").innerText = xhr.responseText;
      console.log(xhr.status);
    }
  };

  // Method 2
  // xhr.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState === 4) {
  //     document.getElementById("output").innerText = xhr.responseText;
  //     console.log(xhr.status);
  //   }
  // };

  // Optional
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  // Optional
  xhr.onerror = function () {
    console.log("Error occured!");
  };

  xhr.send();
}
