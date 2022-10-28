function copy(elm) {
  // Get the text field
  var copyText = document.getElementById("mayolink");

  // Select the text field
  //copyText.select();
  //copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field

  text = document.getElementById(elm).href
  navigator.clipboard.writeText(text);

  console.log("copied " + text)

  // Alert the copied text
  alert("Copied the text: " + text);
}

function getData() {
  fetch("config.json")
    .then((response) => response.json())
    .then((data) => ret = data);
  return ret;
}
