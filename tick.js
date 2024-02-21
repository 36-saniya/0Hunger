document.addEventListener("DOMContentLoaded", function() {
    // Get address and timing parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const address = urlParams.get('address');
    const timing = urlParams.get('timing'); // Corrected parameter name

    // Populate address and timing information into the page
    document.getElementById("address").innerText = "Address: " + address;
    document.getElementById("timing").innerText = "Timing: " + timing;
});