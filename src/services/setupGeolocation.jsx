const options = {
    enableHighAccuracy: true,
    timeout: 8000,
    maximumAge: 0,
}

const error = (err) => {
    // Check for known errors
    switch (err.code) {
        case err.PERMISSION_DENIED:
            window.alert("Permiso para ubicacion desactivado, cambie su configuracion o permisos.");
            break;
        case err.POSITION_UNAVAILABLE:
            window.alert("Los datos del servicio de localizacion no estan disponibles");
            break;
        case err.TIMEOUT:
            window.alert("No se determino la ubicacion en el tiempo permitido.");
            break;
        default:
            window.alert("Error con la ubicacion, intentarlo de nuevo");
            break;
    }

    console.error(err);
}

const get = (setInformation) => {
    navigator.geolocation.getCurrentPosition(position => {
        const param = {
            brands: navigator.userAgentData.brands,
            mobile: navigator.userAgentData.mobile,
            platform: navigator.userAgentData.platform,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }

        setInformation(param);
    }, error, options)
}

const geo = {
    get
}

export default geo;