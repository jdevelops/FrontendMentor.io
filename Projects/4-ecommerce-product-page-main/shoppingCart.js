var itemCounter = parseFloat(
    document.getElementsByClassName('article__quantity-counter')[0].innerHTML
);
var cacheCounter = 0;

console.log(itemCounter);

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let closeCartBtn = document.getElementsByClassName('modal__close-btn');
    let openCartBtn = document.getElementById('show-cart-btn');
    var modal = document.getElementById('modal');

    closeCartBtn[0].addEventListener('click', function (e) {
        modal.style.display = 'none';
    });
    openCartBtn.addEventListener('click', function (e) {
        modal.style.display = 'block';
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}
//------Ilość do dodania ------///
document.getElementsByClassName('article__minus')[0].onclick = function (e) {
    if (itemCounter <= 0) {
        alert("Quantity can't be a negative number");
    } else {
        itemCounter -= 1;
    }
    document.getElementsByClassName('article__quantity-counter')[0].innerHTML =
        itemCounter;
};
document.getElementsByClassName('article__plus')[0].onclick = function (e) {
    itemCounter += 1;
    document.getElementsByClassName('article__quantity-counter')[0].innerHTML =
        itemCounter;
};
//---------Dodawanie do koszyka---------//
document.getElementById('add-to-cart-btn').onclick = addToCartClicked;

function addToCartClicked() {
    var imageSrc = './images/image-product-1-thumbnail.jpg';
    var title =
        document.getElementsByClassName('article__heading')[0].innerHTML;
    var price =
        document.getElementsByClassName('article__newprice')[0].innerHTML;
    price = price.replace('$', '');

    if (itemCounter == 0) {
        alert('Can not add 0 items to cart');
        return;
    }

    if (cacheCounter == 0) {
        var itemInCartCounter = 0;
        cacheCounter = cacheCounter + itemCounter;
        itemInCartCounter = cacheCounter;
    } else {
        cacheCounter = cacheCounter + itemCounter;
        itemInCartCounter = cacheCounter;
    }
    addItemToCart(imageSrc, title, price, itemInCartCounter);
}

function addItemToCart(imageSrc, title, price, itemInCartCounter) {
    var elementCheck = document.getElementById('item-in-cart');
    console.log(elementCheck);

    let cartSum = price * itemInCartCounter;

    let cartContent = `
    <div class="modal__item" id="item-in-cart">
        <div class="product__image">
            <img src="${imageSrc}" alt="item image">
        </div>
        <div class="product__dsc">
            <h3 class="product__title">${title}</h3>
            <p>$${price} x ${itemInCartCounter} <span class="product__sum">$${cartSum}</span> </p>
        </div> 
    </div>`;

    let itemPlace = document.getElementsByClassName('product')[0];
    itemPlace.innerHTML = cartContent;
    console.log('dodaj');
}
