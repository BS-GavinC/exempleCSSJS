
let getHour = () => {
    let date = new Date()
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

let getDate = () => {
    let date = new Date()
    return date.toLocaleDateString(document.documentElement.lang, { weekday: "long", day: "numeric", month : "long" });
}

setInterval(() => {
    refresh()
}, 1000);

let refresh = () => {
    document.title = getHour()
    document.getElementById("hour").innerHTML = getHour()
    document.getElementById("date").innerHTML = getDate()
}

refresh()