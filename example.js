// ===============================image slider======================== (1)
const sevenBtns = document.querySelectorAll('.bg_btn');
const sevenImages = document.querySelectorAll('.sevenImg');


const sevenSlider = (index) => {
    sevenBtns.forEach((btn) => {
        btn.classList.remove('active-seven')
    });
    sevenImages.forEach((image) => {
        image.classList.remove('active-seven')
    });
   
    
    sevenBtns[index].classList.add('active-seven');
    sevenImages[index].classList.add('active-seven');
   
};

sevenBtns.forEach( (act, change) => {
    act.addEventListener('click', () => {
        sevenSlider(change);
    });
});



// ===========================image-slide-btn=============== (2)

const images = document.querySelectorAll('.img');
images.forEach( img => {
    img.addEventListener('mouseover', () => {
        removeClass (images);
        img.classList.add('show-img')
    })
});

function removeClass (images){
    images.forEach( img => {
        img.classList.remove('show-img')
    })
};


// ============================FAQ=================== (3)

const faqContent = document.querySelectorAll('.faq-content');

faqContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});

// ========================goods and shop cart button active and Search btn============================(4)
const btnOne = document.querySelectorAll(".btn_one");
const contentOne = document.querySelectorAll(".sliderOneContent");
// console.log(btnOne, contentOne);
function filterSelectionOne(category) {
    // Show all if category is 'all', otherwise filter by category
    contentOne.forEach((a) => {
      if (category === "all" || a.classList.contains(category)) {
        a.classList.add('active-one');
        
      } else {
        a.classList.remove('active-one');
        
      }
    });
  }  
  filterSelectionOne("all");

//   -----activate button ---
  btnOne.forEach((btn) => {
    btn.addEventListener("click", function () {
      
      btnOne.forEach((btn) => {
        btn.classList.remove('active-one')
      });
     
      btn.classList.add('active-one');
      
    });
  });
//   ----- search activate---------
function searchOn() {
    const inputSearch = document.getElementById('searchOne-input').value.toUpperCase();  // Correct method name and use more descriptive variable name
    const contentsOne = document.querySelectorAll('.sliderOneContent');  // Simplified variable name

    contentsOne.forEach((content) => {
        const headline = content.querySelector('.headTitle-shop');
        const headlineText = headline.textContent || headline.innerText;  // Extract text from the headline

        // If the search term is found in the headline text
        if (headlineText.toUpperCase().includes(inputSearch)) {
            content.style.display = "";  // Show the content
        } else {
            content.style.display = "none";  // Hide the content
        }
    });
}


// ========================menuBar============================ (5)
window.addEventListener("scroll", () => {
    const sectionsClass = document.querySelectorAll(".locationbtnCard");
    const scrollY = window.pageYOffset; // Current scroll position

    sectionsClass.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 60; // Offset for positioning
        const sectionId = section.getAttribute("id"); // Get the section's ID

        const menuItem = document.querySelector(`#location-left .location-btns a[href*="${sectionId}"]`);

        // Check if the scroll position is within the section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            menuItem.classList.add("active");
        } else {
            menuItem.classList.remove("active");
        }
    });
});



// ========================LOcalmenuBar============================ (6)
const localNavMenu = document.querySelector(".localNavigation");
const localNav = document.querySelector(".localNav");
const localopenMenu= document.querySelector(".localopenMenu");
const localcloseMenu = document.querySelector(".localcloseMenu");

localopenMenu.addEventListener("click", () => {
    localNavMenu.style.maxHeight = "70vh";
    localNav.style.display = "flex";
    localopenMenu.style.display = "none";
    localcloseMenu.style.display = "flex";
});
localcloseMenu.addEventListener("click", () => {
    localNavMenu.style.maxHeight = "12vh";
    localNav.style.display = "none";
    localopenMenu.style.display = "flex";
    localcloseMenu.style.display = "none";

});



// ========================backend section cart controler============================(7)
// 01. --------------cart active and deactive-------------------
const cartIcon = document.querySelector('#cartIcon');
const cartBody = document.querySelector('#cart-body');
const cartClosed = document.querySelector('.cencel-cart');

cartIcon.addEventListener('click', () => {
    cartBody.classList.add('cart-active');
  });
  cartClosed.addEventListener('click', () => {
    cartBody.classList.remove('cart-active');
  });

// console.log(cartIcon, cartBody, cartClosed)

// 02. --------------shopping cart buttons active-------------------
// 02. step01
const addCartBtns = document.querySelectorAll('.add-cart');
addCartBtns.forEach( (btn) => {
  btn.addEventListener('click', event =>{
    const productBox = event.target.closest('.productBox'); //closest
    addToCart(productBox);
  });
});

// 03. --------------define add cart button -------------------
// 02. step04
const cartBodyContent = document.querySelector('.cart-body-content');
// 02. step02 main function
const addToCart = productBox =>{
    const productImgSrc = productBox.querySelector('.good-img img').src;
    const productName = productBox.querySelector('.headTitle-shop').textContent;
    const productPrice = productBox.querySelector('.price').textContent;

// 02. step03
    const newCartBox = document.createElement('div');
    newCartBox.classList.add('cart-box');

    newCartBox.innerHTML =`
        <img src="${productImgSrc}" alt="" class="cart-img">
        <div class="cart-details">
            <h5 class="cart-details-name">${productName}</h5>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-qty">
                <button id="minus">-</button>
                <span class="number">1</span>
                <button id="plus">+</button>
            </div>
        </div>
        <i class="ri-delete-bin-6-line" id="cardRemove"></i> 
    `;

    //  03. -------------------alert set when selected same item -------------- 
    const selectedSameItem = cartBodyContent.querySelectorAll('.cart-details-name');
    for(let item of selectedSameItem){
      if(item.textContent === productName){
        alert('This product is already in the CART')
        return;
      }
    }

    // 02. step04
    cartBodyContent.appendChild(newCartBox);

     //  04. -------------------remove cart items when click trash box -------------- 
     newCartBox.querySelector('#cardRemove').addEventListener('click', () => {
        newCartBox.remove();
    
        updateCartCountBadge(-1); //call from 07
        updateTotalPrice(); //call from 06
    });


     //  05. -------------------remove cart items when click trash box -------------- 
    newCartBox.querySelector('.cart-qty').addEventListener('click', event => {
    const numberElement = newCartBox.querySelector('.number');
    const minusBtn = newCartBox.querySelector('#minus');
  
    let qty = numberElement.textContent;
  
    if (event.target.id === 'minus' && qty > 1) {
      numberElement.textContent = --qty;
      if (qty === 1) minusBtn.style.color = '#999'; 
    } 
    else if (event.target.id === 'plus') {
      numberElement.textContent = ++qty;
      minusBtn.style.color = '#333'; 
    }
    updateTotalPrice(); //call from 06
  });

  updateCartCountBadge(1); //call from 07
  updateTotalPrice(); //call from 06
};


//  06. -------------------update total price -------------- 

const updateTotalPrice = () => {
    const totalPrice = document.querySelector('.total-price');
    const cartBoxes = cartBodyContent.querySelectorAll('.cart-box');
    let total = 0;
    cartBoxes.forEach( cartbox => {
      const priceElement = cartbox.querySelector('.cart-price');
      const qtyElement = cartbox.querySelector('.number');
      let price = parseFloat(priceElement.textContent.replace('$', '')) || 0;
      const qty =parseInt(qtyElement.textContent) || 0;
  
      total += price * qty;
  
    });
    totalPrice.textContent = `$${total}`;
  };


  //  07. -------------------counting cart icon  on  -------------- 

let cartCountIndex = 0;
const updateCartCountBadge = change => {
  const cartItemCount = document.querySelector('.cart-count');

  cartCountIndex += change;
  if(cartCountIndex > 0){
    cartItemCount.style.visibility = 'visible';
    cartItemCount.textContent = cartCountIndex;
  }else{
    cartItemCount.style.visibility = 'hidden';
    cartItemCount.textContent = '';

  }

};

//  08. -------------------buy button update --------------


const buyButton = document.querySelector('.buy_btn');
buyButton.addEventListener('click', () => {
  const cartBox = document.querySelectorAll('.cart-box');

  if(cartBox.length === 0) {
    alert('your cart is empty');
    return;
  }
  cartBox.forEach ( cartBox => cartBox.remove());
  cartCountIndex = 0;
  updateCartCountBadge(0); //call from 07
  updateTotalPrice(); //call from 06

  alert('Thank you for purshase');
});



// ================================================indexhtml menu==================================

const navigationMenu = document.querySelector(".navigationMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const nav = document.querySelector("nav");

openMenu.addEventListener("click", () => {
    navigationMenu.style.maxHeight = "70vh";
    nav.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
});

closeMenu.addEventListener("click", () => {

    navigationMenu.style.maxHeight = "12vh";
    nav.style.display = "none";
    openMenu.style.display = "flex";
    closeMenu.style.display = "none";
});

    



