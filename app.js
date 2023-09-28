

const iceCream = [
    {
        name: 'Cookie Dough',
        price: 1.25,
        quantity: 0
    },
    {
        name: 'Vanilla',
        price: 1,
        quantity: 0
    },
    {
        name: 'Strawberry',
        price: 1.25,
        quantity: 0
    }]

const toppings = [
    {
        name: 'Sprinkles',
        price: .25,
        quantity: 0
    },
    {
        name: 'Chocolate Chips',
        price: .25,
        quantity: 0
    },
    {
        name: 'Cookie Chunks',
        price: .5,
        quantity: 0
    }]



function addItem(itemName) {
    const findItem = iceCream.find(iceCream => iceCream.name == itemName)
    findItem.quantity++
    console.log('yay', findItem);

    drawCart()
    drawToppings()
    totalPrice()
}

function addTopping(itemName) {
    const findTopping = toppings.find(topping => topping.name == itemName)
    findTopping.quantity++
    console.log('yay topping', findTopping)

    drawCart()
    drawToppings()
    totalPrice()
}

function drawCart() {
    // console.log('drawing cart', iceCream);
    let content = ''
    iceCream.forEach(item => {
        // console.log(item);
        if (item.quantity > 0) {
            const totalPrice = (item.price * item.quantity).toFixed(2)
            // console.log('total price', totalPrice);
            content += `
            <p>${item.name}, <span>$ ${item.price}</span> <span>${item.quantity}</span> </p>
            `
        }
        const iceCreamCart = document.getElementById('drawCart')
        iceCreamCart.innerHTML = content


    }
    )

}
function drawToppings() {
    let content = ''
    toppings.forEach(item => {
        if (item.quantity > 0) {
            const totalPrice = (item.price * item.quantity).toFixed(2)
            // console.log('total price', totalPrice);
            content +=
                `
            <p>${item.name}, <span>$ ${item.price}</span> <span>${item.quantity}</span> </p>
            `
        }
        const iceCreamCart = document.getElementById('drawToppings')
        iceCreamCart.innerHTML = content


    }
    )

}



function totalPrice() {
    let cartTotal = 0
    iceCream.forEach(iceyBoy => {
        cartTotal += iceyBoy.price * iceyBoy.quantity

    })
    const final = document.getElementById('totalPrice')
    final.innerHTML = `$${cartTotal}`
}
function checkout() {
    console.log('checking out');
    Swal.fire({
        title: 'Are you sure?',
        text: "Don't forget your toppings!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, order it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Ordered!',
                'success'
            )
        }
        console.log('after confirm', iceCream);
        iceCream.forEach(item => item.quantity = 0)
        toppings.forEach(item => item.quantity = 0)
        drawCart()
        drawToppings()
        totalPrice()
    })
}