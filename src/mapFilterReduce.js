let cart = [
<<<<<<< HEAD
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
=======
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)


console.log(total)


let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}



addToCart(cart)

console.log(cart)
>>>>>>> b71176f00ad0a3c667c148f07366bc67a1f5bb55

let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
<<<<<<< HEAD
//console.log(sayi)
=======
console.log(sayi)

//23.00 Dersteyiz
>>>>>>> b71176f00ad0a3c667c148f07366bc67a1f5bb55
