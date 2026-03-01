function getLocation() {
    const status = document.getElementById("status");
    const lat = document.getElementById("lat");
    const lon = document.getElementById("lon");

    if (navigator.geolocation) {
        status.textContent = "Fetching location...";

        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat.textContent = position.coords.latitude;
                lon.textContent = position.coords.longitude;
                status.textContent = "Location found!";
            },
            (error) => {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        status.textContent = "User denied the request.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        status.textContent = "Location information unavailable.";
                        break;
                    case error.TIMEOUT:
                        status.textContent = "Request timed out.";
                        break;
                    default:
                        status.textContent = "An unknown error occurred.";
                }
            }
        );
    } else {
        status.textContent = "Geolocation is not supported by this browser.";
    }
}
