export function convertDuration(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60));
    let formattedTime;
    if (milliseconds < 60000) {
        formattedTime = [minutes.toString(), seconds.toString()].join(":");
    }
    else {
        if (hours === 0) {
            formattedTime = [minutes.toString(), seconds.toString()].join(":");
        }
        else {
            formattedTime = [hours.toString(), minutes.toString(), seconds.toString()].join(":");
        }
    }
    return formattedTime;
}
