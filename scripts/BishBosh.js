function BishBosh() {
    let max = 100;
    let bish = "bish";
    let bosh = "bosh";
    let seperator = ", ";
    for (let min = 1; min <= max; min++) {
        if (min % 3 === 0 && min % 4 === 0) {
            console.log(bish + "-" + bosh + seperator);
        } else if (min % 3 === 0) {
            console.log(bish + seperator);
        } else if (min % 4 === 0) {
            console.log(bosh + seperator);
        } else {
            console.log(min + seperator);
        }
    }
}

let output = document.querySelector("#output");
let runButton = document.querySelector("#runButton");
button.addEventListener("click", BishBosh2);

function BishBosh2() {
    output.innerHTML = '';

    let max = document.querySelector("#max").value;
    let bishValue = document.querySelector("#bish").value;
    let boshValue = document.querySelector("#bosh").value;

    let bish = "bish";
    let bosh = "bosh";
    let seperator = ", ";
    for (let min = 1; min <= max; min++) {
        if (min % bishValue === 0 && min % boshValue === 0) {
            let p = document.createElement("p");
            p.innerHTML = bish + "-" + bosh + seperator;
            output.appendChild(p);
            console.log(bish + "-" + bosh + seperator);
        } else if (min % bishValue === 0) {
            let p = document.createElement("p");
            p.innerHTML = bish + seperator;
            output.appendChild(p);
            console.log(bish + seperator);
        } else if (min % boshValue === 0) {
            let p = document.createElement("p");
            p.innerHTML += bosh + seperator;
            output.appendChild(p);
            console.log(bosh + seperator);
        } else {
            let p = document.createElement("p");
            p.innerHTML += min + seperator;
            output.appendChild(p);
            console.log(min + seperator);
        }
    }
}