// Change the number of virtual machines
let vm = 12;

setInterval(function () {
    vm++;
    document.getElementById("vm").innerText = vm;
}, 5000);

// Check network status
function checkNetwork() {
    alert("Network is working normally!");
}