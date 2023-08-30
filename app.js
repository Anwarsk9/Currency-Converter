const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"; //inr(as base)/usd(converted val)
let h1 = document.getElementById("h1")
let h1_1 = document.getElementById("h1-2")

let img = document.querySelector("#img-1");
let selects = document.querySelectorAll("#select-1");
selects[0].addEventListener("change", () => {
    for (let index of selects) {
        switch (index.value) {
            case "usd": img.src = "./assets/united-states-of-america.png"; h1.innerText = (`${index.value} = `).toUpperCase(); first_call(index.value);
                break;
            case "inr": img.src = "./assets/india (1).png"; h1.innerText = (`${index.value} = `).toUpperCase(); first_call(index.value);
                break;
            case "eur": img.src = "./assets/european-union.png"; h1.innerText = (`${index.value} = `).toUpperCase(); first_call(index.value);
                break;
            case "cad": img.src = "./assets/canada.png"; h1.innerText = (`${index.value} = `).toUpperCase(); first_call(index.value);
                break;
            case "aud": img.src = "./assets/australia (1).png"; h1.innerText = (`${index.value} =`).toUpperCase(); first_call(index.value);
                break;
            case "aed": img.src = "./assets/united-arab-emirates.png"; h1.innerText = (`${index.value} =`).toUpperCase(); first_call(index.value);
                break;
            case "nzd": img.src = "./assets/new-zealand.png"; h1.innerText = (`${index.value} =`).toUpperCase(); first_call(index.value);
                break;
            default: console.log("nothing changed");
        }
    }
})
let img_2 = document.getElementById("img-2");
let selects_2 = document.querySelectorAll("#select-2");
selects_2[0].addEventListener("change", () => {
    for (let index of selects_2) {
        switch (index.value) {
            case "usd": img_2.src = "./assets/united-states-of-america.png"; h1_1.innerText = (index.value).toUpperCase(); second_call(index.value);
                break;
            case "inr": img_2.src = "./assets/india (1).png"; h1_1.innerText = (index.value).toUpperCase(); second_call(index.value);
                break;
            case "eur": img_2.src = "./assets/european-union.png"; h1_1.innerText = (index.value).toUpperCase(); second_call(index.value);
                break;
            case "cad": img_2.src = "./assets/canada.png"; h1_1.innerText = (index.value).toUpperCase(); second_call(index.value);
                break;
            case "aud": img_2.src = "./assets/australia (1).png"; h1_1.innerText = (index.value).toUpperCase(); second_call(index.value);
                break;
            case "aed": img_2.src = "./assets/united-arab-emirates.png"; h1_1.innerText = (index.value).toUpperCase(); second_call(index.value);
                break;
            case "nzd": img_2.src = "./assets/new-zealand.png"; h1_1.innerText = (index.value).toUpperCase(); second_call(index.value);
                break;
            default: console.log("nothing changed");
        }
    }
});
let first_country;
let second_country;
let first_call = (el) => { first_country = el; second_call(); }
let second_call = (el) => { if (el != undefined) { second_country = el;}if(second_country!=undefined){ convert()} };
async function convert() {
    try{
    let async_url = await fetch(url + "/" + first_country + "/" + second_country + ".json");
    let data = await async_url.json();
    let obj = Object.values(data)[1];
    let div1 = document.querySelector("#row-item-1");
    div1.innerText = 1 +" "+ first_country.toUpperCase() + " =";
    let div2 = document.querySelector("#row-item-2");
    div2.innerText = ` ${obj.toFixed(2)} ` + second_country.toUpperCase();
    }catch(err){
        console.log(err);
    }
}
let inp = document.querySelector("#amount");
    inp.addEventListener("input", (e) => {
        let inputs = document.querySelector("#h1-val-1");
        inputs.innerText = e.target.value

    });

let btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    let input = document.querySelector("#h1-val-1");
    let insertEl =document.querySelector("#h1-val-2");
    let mulEl =document.querySelector("#row-item-2");
    
    let con = input.innerText;
    let con_2 = mulEl.innerText;
    let convert = parseInt(con);
    let convert_2 = parseFloat(con_2);
    let result = convert_2 * convert;
    console.log(result);
    insertEl.innerText = result.toFixed(2) ;
    // if (inputs.innerText != "") { h1.innerText = result; }
});
let icons_select = document.querySelector(".cards");
icons_select.addEventListener("click",()=>{
    
    let radios = document.querySelectorAll('input[type=radio][name="cash"]');
    console.log(radios.value);
    radios.forEach(radio => radio.addEventListener('change', () =>console.log(radio.value)));    
})