let label = document.getElementById('label');
let shoppingCart = document.getElementById('shoping-cart');

let basket = JSON.parse(localStorage.getItem('data')) || []

let calculate = () => {
    let cartIcon = document.getElementById('cart-amount');
    cartIcon.innerHTML = basket.length
}

let generateCartItem = () => {
    if(basket.length !== 0){
        return (shoppingCart.innerHTML = basket.map((x) => {
            let {id, name, price, item, desc, img} = x;

            return `
            <div class='cart_item'>
                <p>${name}</P>
                <div class="cart_item_img">
                    <img width='100px' src="${img}" alt=""/>                
                </div>

                <p>${price}</p>

                <button class="rmv-btn"  onclick ="remove_from_cart('${id}')"> Remove </button>

            </div>

     `
        }))
    }
}
generateCartItem()
calculate()


let remove_from_cart = (id) =>{
    basket = basket.filter((x)=> x.id != id)
    localStorage.setItem('data',JSON.stringify(basket))

    calculate()
    generateCartItem()
}


let Total_amount = ()=> {
    let total_amount = 0
    basket.map((item)=>{
        total_amount += item.item * item.price
    })

    label.innerHTML =`
        <div class="checkout_area">
           <h2> Total Price:${total_amount} </h2>
           <button class="update" onclick=window.location.reload()>Update</button>
           <button class="checkout">Checkout</button>
        </div>
    `
}

Total_amount()