export function copy(elm) {
  // Get the text field
  var copyText = document.getElementById(elm);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(elm.href);

  console.log("copied " + elm.href)

  // Alert the copied text
  alert("Copied the text: " + elm.href);
}

export function getData() {
  fetch("config.json")
    .then((response) => response.json())
    .then((data) => ret = data);
    return ret;
}