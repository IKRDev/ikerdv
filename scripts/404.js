let webdata;

fetch("config.json")
    .then((response) => response.json())
    .then((data) => webdata = data);

function travelhome() {
    window.location.href = 'https://ikrdev.github.io/IkerDV/'
}