const openNav = document.getElementById('openNav');
const mobileNav = document.getElementById('mobile-nav');
const closeNav = document.getElementById('closeNav');

openNav.onclick = function () {
    mobileNav.style.left = "0px";
}
closeNav.onclick = function () {
    mobileNav.style.left = "-60%";
}




const cart = document.getElementById('cart');
const cartContenu = document.getElementById('cart-contenu');


cart.addEventListener('click', show);
function show() {
    cartContenu.style.opacity == "0" ? cartContenu.style.opacity = "1" : cartContenu.style.opacity = "0";
    cartContenu.style.zIndex == "5" ? cartContenu.style.zIndex = "1500" : cartContenu.style.zIndex = "5";
}


/*  IMAGES SLIDER  */
const image = document.getElementById('image');
let images = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
let i = 0 ;
const preBtn = document.getElementById('pre');
const nxtBtn = document.getElementById('nxt');

preBtn.onclick = function () {
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}
nxtBtn.onclick = function () {
    if(i >= images.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return image.setAttribute('src', 'images/'+images[i]);
}
/*  IMAGES SLIDER  */




/*  THUMBNAILS  */
const firstImg = document.getElementById('firstImg');
const secondImg = document.getElementById('secondImg');
const thirdImg = document.getElementById('thirdImg');
const fourthImg = document.getElementById('fourthImg');

firstImg.onclick = function () {
    firstImg.classList.add('active-thumbnail');
    secondImg.classList.remove('active-thumbnail');
    thirdImg.classList.remove('active-thumbnail');
    fourthImg.classList.remove('active-thumbnail');
    image.src="images/image-product-1.jpg";
}
secondImg.onclick = function () {
    firstImg.classList.remove('active-thumbnail');
    secondImg.classList.add('active-thumbnail');
    thirdImg.classList.remove('active-thumbnail');
    fourthImg.classList.remove('active-thumbnail');
    image.src="images/image-product-2.jpg";
}
thirdImg.onclick = function () {
    firstImg.classList.remove('active-thumbnail');
    secondImg.classList.remove('active-thumbnail');
    thirdImg.classList.add('active-thumbnail');
    fourthImg.classList.remove('active-thumbnail');
    image.src="images/image-product-3.jpg";
}
fourthImg.onclick = function () {
    firstImg.classList.remove('active-thumbnail');
    secondImg.classList.remove('active-thumbnail');
    thirdImg.classList.remove('active-thumbnail');
    fourthImg.classList.add('active-thumbnail');
    image.src="images/image-product-4.jpg";
}
/*  THUMBNAILS  */




/*  COUNTER  */
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const itemNumber = document.getElementById('itemNumber');

let minusClick = 0;
let plusClick = 0;
let countNum = 1;
itemNumber.innerHTML = countNum;

minus.addEventListener("click", () => {
	if(countNum>1){
        countNum -= 1;
	    itemNumber.innerHTML = countNum;
    }
});

plus.addEventListener("click", () => {
	countNum += 1;
	itemNumber.innerHTML = countNum;
});
/*  COUNTER  */




/*  LIGHTBOX  */
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

image.addEventListener('click', e => {
    
    while (lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.classList.add('active');

    const closeBtnLB = document.createElement('i');
    closeBtnLB.classList.add('fas', 'fa-times', 'closeBtnLB');
    lightbox.appendChild(closeBtnLB);
    closeBtnLB.addEventListener('click', e => {
        lightbox.classList.remove('active');
    })
    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    })

    const lightBoxImageContainer = document.createElement('div');
    lightBoxImageContainer.id = 'lightBoxImageContainer';
    lightbox.appendChild(lightBoxImageContainer);

        const lightBoxImage = document.createElement('img');
        lightBoxImage.id = 'lightBoxImage';
        lightBoxImage.src = image.src;
        lightBoxImageContainer.appendChild(lightBoxImage);

    /*  LIGHTBOX THUMBNAILS START  */

    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.id = 'thumbnailContainer';
    lightbox.appendChild(thumbnailContainer);

    const thumbnail1 = document.createElement('img'); thumbnail1.id = 'thumbnail1'; thumbnail1.src = 'images/image-product-1-thumbnail.jpg'; thumbnail1.classList.add('active-lightbox-thumbnail');
    const thumbnail2 = document.createElement('img'); thumbnail2.id = 'thumbnail2'; thumbnail2.src = 'images/image-product-2-thumbnail.jpg';
    const thumbnail3 = document.createElement('img'); thumbnail3.id = 'thumbnail3'; thumbnail3.src = 'images/image-product-3-thumbnail.jpg';
    const thumbnail4 = document.createElement('img'); thumbnail4.id = 'thumbnail4'; thumbnail4.src = 'images/image-product-4-thumbnail.jpg';

    thumbnailContainer.appendChild(thumbnail1);
    thumbnailContainer.appendChild(thumbnail2);
    thumbnailContainer.appendChild(thumbnail3);
    thumbnailContainer.appendChild(thumbnail4);

    thumbnail1.onclick = function () {
        lightBoxImage.src = 'images/image-product-1.jpg';
        thumbnail1.classList.add('active-lightbox-thumbnail');
        thumbnail2.classList.remove('active-lightbox-thumbnail');
        thumbnail3.classList.remove('active-lightbox-thumbnail');
        thumbnail4.classList.remove('active-lightbox-thumbnail');

        firstImg.classList.add('active-thumbnail');
        secondImg.classList.remove('active-thumbnail');
        thirdImg.classList.remove('active-thumbnail');
        fourthImg.classList.remove('active-thumbnail');
        image.src="images/image-product-1.jpg";
    }
    thumbnail2.onclick = function () {
        lightBoxImage.src = 'images/image-product-2.jpg';
        thumbnail1.classList.remove('active-lightbox-thumbnail');
        thumbnail2.classList.add('active-lightbox-thumbnail');
        thumbnail3.classList.remove('active-lightbox-thumbnail');
        thumbnail4.classList.remove('active-lightbox-thumbnail');

        firstImg.classList.remove('active-thumbnail');
        secondImg.classList.add('active-thumbnail');
        thirdImg.classList.remove('active-thumbnail');
        fourthImg.classList.remove('active-thumbnail');
        image.src="images/image-product-2.jpg";
    }
    thumbnail3.onclick = function () {
        lightBoxImage.src = 'images/image-product-3.jpg';
        thumbnail1.classList.remove('active-lightbox-thumbnail');
        thumbnail2.classList.remove('active-lightbox-thumbnail');
        thumbnail3.classList.add('active-lightbox-thumbnail');
        thumbnail4.classList.remove('active-lightbox-thumbnail');

        firstImg.classList.remove('active-thumbnail');
        secondImg.classList.remove('active-thumbnail');
        thirdImg.classList.add('active-thumbnail');
        fourthImg.classList.remove('active-thumbnail');
        image.src="images/image-product-3.jpg";
    }
    thumbnail4.onclick = function () {
        lightBoxImage.src = 'images/image-product-4.jpg';
        thumbnail1.classList.remove('active-lightbox-thumbnail');
        thumbnail2.classList.remove('active-lightbox-thumbnail');
        thumbnail3.classList.remove('active-lightbox-thumbnail');
        thumbnail4.classList.add('active-lightbox-thumbnail');

        firstImg.classList.remove('active-thumbnail');
        secondImg.classList.remove('active-thumbnail');
        thirdImg.classList.remove('active-thumbnail');
        fourthImg.classList.add('active-thumbnail');
        image.src="images/image-product-4.jpg";
    }

    /*  LIGHTBOX THUMBNAILS END  */




    /*  LIGHTBOX ARROWS START */

    // let i = 0 ;

    // const preBtnLightbox = document.createElement('i');
    // preBtnLightbox.classList.add('fas', 'fa-angle-left');
    // preBtnLightbox.id = 'preBtnLightbox';
    // lightBoxImageContainer.appendChild(preBtnLightbox);
    
    // const nxtBtnLightbox = document.createElement('i');
    // nxtBtnLightbox.id = 'nxtBtnLightbox';
    // nxtBtnLightbox.classList.add('fas', 'fa-angle-right');
    // lightBoxImageContainer.appendChild(nxtBtnLightbox);

    
    // preBtnLightbox.onclick = function () {
    //     if(i <= 0) i = images.length;
    //     i--;
    //     return setImg();
    // }
    // preBtnLightbox.onclick = function () {
    //     if(i >= images.length-1) i = -1;
    //     i++;
    //     return setImg();
    // }

    // function setImg(){
    //     return lightBoxImage.setAttribute('src', 'images/'+images[i]);
    // }
    /*  LIGHTBOX ARROWS END */
    
    
})
/*  LIGHTBOX  */

/*  ADDTOCART START  */
const addToCartBtn = document.getElementById('addToCartBtn');

addToCartBtn.onclick = function() {
    const itemsSelected = document.getElementById('itemsSelected');
    const emptyCart = document.getElementById('emptyCart');
    const item1 = document.getElementById('item1');
    const addedItemPrice = parseFloat(document.getElementById('addedItemPrice').innerText);
    let quantity = document.getElementById('quantity');
    const finalPrice = document.getElementById('finalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    let total = 0;
    total =  total + (addedItemPrice * countNum);
    finalPrice.innerText = `$` + total + `.00`;
    quantity.innerText = countNum;
    
    emptyCart.style.display = 'none';
    item1.style.display = 'flex';
    checkoutBtn.style.display = 'block';
    itemsSelected.style.display = 'flex';
    itemsSelected.innerText = countNum;
}

/*  ADDTOCART END  */





/*  TRASH START  */


const trash = document.getElementById('trash');
trash.onclick = function (){
    emptyCart.style.display = 'block';
    item1.style.display = 'none';
    checkoutBtn.style.display = 'none';
    itemsSelected.style.display = 'none';
}


/*  TRASH END  */