// Popup CheckOut
const card = document.getElementsByClassName('card');
const popUpCheckout = document.getElementById('popUpCheckout');
const closeCheckout = document.getElementById('closeCheckout');

Array.from(card).forEach(function (e) {
    e.addEventListener('click', function () {
        popUpCheckout.style.display = "block";
    })
});

closeCheckout.addEventListener('click', () => {
    popUpCheckout.style.display = "none";
});


// Plus and minus in Checkout
const input = document.getElementById('input');

function btnInput(params) {
    if (params == 'minus') {
        if (input.value == 1) {
            input.value = 1;
        } else {
            input.value = parseInt(input.value) - 1;
        }
    } else {
        input.value = parseInt(input.value) + 1;
    }
}


// Event Saved 
const saved = document.querySelectorAll('.card .fa-heart-o');
saved.forEach(function (el) {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (el.classList.contains('fa-heart-o')) {
            el.classList.replace('fa-heart-o', 'fa-heart');
            el.style.color = "red";
        } else {
            el.classList.replace('fa-heart', 'fa-heart-o');
            el.style.color = "#27374D";
        }
    })
})

// event Basket Shoping
const popUpBasket = document.getElementById('popUpBasket');
const basket = document.querySelectorAll('.card .fa-shopping-cart');

basket.forEach((element) => {
    element.addEventListener('click', (ec) => {
        ec.stopPropagation();
        popUpBasket.style.display = "block";
    })
})

// Event Close basket
const closeBasket = document.querySelectorAll('#closeBasket');

closeBasket.forEach((property) => {
    property.addEventListener('click', (event) => {
        event.stopPropagation();
        property.parentElement.style.display = "none";
    })
})

// Evnet Plus and Minus in Popup basket
const inputBasket = document.getElementById('inputBasket');
function btnInputBasket(params) {
    if (params == 'minus') {
        if (inputBasket.value == 1) {
            inputBasket.value = 1;
        } else {
            inputBasket.value = parseInt(inputBasket.value) - 1;
        }
    } else {
        inputBasket.value = parseInt(inputBasket.value) + 1;
    }
}

// Event btn Navleft
const navLeft = document.getElementById('navLeft');
const iconNavLeft = document.querySelector('#navLeft div i');
const btnNavLeft = document.getElementById('btnNavLeft');

btnNavLeft.addEventListener('click', function () {
    if (iconNavLeft.classList.contains('fa-chevron-right')) {
        navLeft.style.left = '0px';
        iconNavLeft.classList.replace('fa-chevron-right', 'fa-chevron-left');
    } else {
        navLeft.style.left = '-50%';
        iconNavLeft.classList.replace('fa-chevron-left', 'fa-chevron-right');
    }
});


// Event Filter
const btnFilter = document.getElementById('btnFilter');
const filter = document.getElementById('filter');
const fiturFilter = document.getElementById('fiturFilter');

btnFilter.addEventListener('click', () => {
    if (filter.classList.contains('active')){
        filter.style.height = '288px';
        fiturFilter.style.display = 'block';
        filter.classList.remove('active');
    } else {
        filter.style.height = '44px';
        fiturFilter.style.display = 'none';
        filter.classList.add('active');
    }
})

const btnSearch = document.getElementById('btnSearch');
const inputSearch = btnSearch.nextElementSibling;

btnSearch.addEventListener('click', (e) => {
    e.stopPropagation();
    inputSearch.style.display = 'block';
    inputSearch.style.position = 'absolute';
    inputSearch.focus();
});

inputSearch.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.body.addEventListener('click', () => {
    inputSearch.style.display = 'none';
})