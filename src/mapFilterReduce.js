let cart = [
    {id : 1, productName : "Telefon", quantity : 1, unitPrice : 4000},
    {id : 2, productName : "Ev Telefonu", quantity : 13, unitPrice : 850},
    {id : 3, productName : "Laptop", quantity : 30, unitPrice : 16000},
]

console.log("<ul>")
cart.map(product => 
    {   
        console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
    })
    console.log("</ul>")

function addToCart(sepet) {
    sepet.push({id : 4, productName : "MSI Laptop", quantity : 30, unitPrice : 17000})
}

let total = cart.reduce((acc,product) => acc+ product.unitPrice * product.quantity,0)
console.log(total)

let quantityOwer2 = cart.filter(product =>product.quantity>2)
console.log(quantityOwer2)

addToCart(cart)


//console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
//console.log(sayi)