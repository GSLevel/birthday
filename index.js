var main = document.getElementById('main');
var desc = document.getElementById('desc');
var btns = document.getElementById('buttons');

setTimeout(() => {
   main.classList.add("fade2");
}, 1000)

setTimeout(() => {
    desc.classList.add("fade3");
 }, 2500)

 setTimeout(() => {
    btns.classList.add("fade4");
    setTimeout(() => {
        btns.style.opacity = "1"
    }, 8,700)
 }, 3500)

function sendWish() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/756119606447308881/3yuC4jbI1kR4w7aXLVAo0ehmlYyIoZF32gw_soxnAKs59-vEHIO6rbQLqyW_rm6hmhOu");
    request.setRequestHeader('Content-type', 'application/json');

    var embed = {
        author: {
            name: "New Birthday Wish!"
        },
        title: "Wish POGGERS",
        description: `\n Wish: ${wish.value} \n Discord Tag: ${tag.value} `,
        color: hexToDecimal("#ff6600")
    }

    var params = {
        username: "Birthday Wish Deliverer",
        avatar_url: "",
        embeds: [ embed ]
    }

    request.send(JSON.stringify(params));

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }
}


