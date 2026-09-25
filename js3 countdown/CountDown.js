const endDate = "28 September 2026 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = end - now;
    console.log(diff);

    // convert into days 
    inputs[0].value = (Math.floor(diff / 3600 / 1000 / 24));
    // convert into hours
    inputs[1].value = (Math.floor(diff / 3600 / 1000) % 24);
    // convert into minutes
    inputs[2].value = (Math.floor(diff / 1000 / 60) % 60)
    // convert into seconds
    inputs[3].value = (Math.floor(diff / 1000) % 60);
    



}
clock();

// 1 day = 24 hours
// 24 hr = 60 mins
// 60 mins = 3600 sec