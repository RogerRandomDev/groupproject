const sizemult = {
    "The little Prince/Princess":1.0,
    "Young Royalty":1.25,
    "Coming of Age":1.5,
    "The Rulers Crown":2.0
}
const MatPrice = {
    "Cardboard":2.50,
    "Steel":15.95,
    "Aluminum":20.95,
    "Silver":69.69,
    "Gold":595.95

}
const gemprice = {
    "D": 1799.95,
    "E": 35.95,
    "S": 27.95,
    "R": 895.95
}

function updateprice(){
    let price = 0.0
    document.getElementById("size").blur()
    const material = document.querySelector('input[name="Material"]:checked').value;
    price += MatPrice[material]*sizemult[document.getElementById("size").value]
    var gemsValue = 0.0
    gemsValue += document.getElementById("D").value*gemprice["D"]
    gemsValue += document.getElementById("E").value*gemprice["E"]
    gemsValue += document.getElementById("S").value*gemprice["S"]
    gemsValue += document.getElementById("R").value*gemprice["R"]
    price += gemsValue
    document.getElementById("pricing").innerHTML = "Price: $"+String(Math.round(price*100)/100)
}