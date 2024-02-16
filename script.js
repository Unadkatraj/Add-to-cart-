const shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem('data')) || [];

let generateShop = ()=>{
    shop.innerHTML = shopItemsData.map((x) => {
        let {id,name,price,desc,img} = x;

        return ` 
                <div class="shop-item" id="product-id-${id}">
                    <img src="${img}" alt=""/>
                    <div class="product-info">
                        <h5>${name}</h5>
                        <p class="price"> <span>$:</span> ${price}</p>
                        <p>${desc}</p>

                        <button onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to cart</button>
                    </div>
                </div>
            `
        })
    }


let add_to_cart = (id,name,price,img) =>{
    basket.push({
        id:id,
        item:1,
        name:name,
        price:price,
        img:img

    })

    localStorage.setItem('data',JSON.stringify(basket))

    calculate()
}


let calculate = ()=>{
    let cartIcon = document.getElementById('cart-amount')
    let cartAmount = basket.length
    cartIcon.innerHTML = cartAmount
}

calculate();
generateShop();