const jsonData = async() => {
    const file = await fetch("./data.json");
    const respone = await file.json();
    webInfo(respone)
}
jsonData();
const divs = document.querySelectorAll(".main-div div");
const day = document.getElementById("daily")
const weeks = document.getElementById("weekly")
const months = document.getElementById("monthly")
const webInfo = datas => {
    for (let i = 0; i < datas.length; i++) {
        const {title , timeframes} = datas[i];
        const {daily , weekly , monthly} = timeframes;
        divs[i].innerHTML = `
                <span>${title}</span>
                <h3>${daily.current}hrs</h3>
                <span class="right">Last Week - ${daily.previous} hrs</span>
            `
        day.addEventListener("click" , () => {
            divs[i].innerHTML = `
                <span>${title}</span>
                <h3>${daily.current}hrs</h3>
                <span class="right">Last Week - ${daily.previous} hrs</span>
            `
        })
        weeks.addEventListener("click" , () => {
            divs[i].innerHTML = `
                <span>${title}</span>
                <h3>${weekly.current}hrs</h3>
                <span class="right">Last Week - ${weekly.previous} hrs</span>
            `
        })
        months.addEventListener("click" , () => {
            divs[i].innerHTML = `
                <span>${title}</span>
                <h3>${monthly.current}hrs</h3>
                <span class="right">Last Week - ${monthly.previous} hrs</span>
            `
        })
    }        
}