function displayTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    setTimeout(displayTime,1000);
}
displayTime();