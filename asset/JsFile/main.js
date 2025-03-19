// ===============================image slider========================
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



// ===========================image-slide-btn=============== 

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


// ============================FAQ===================

const faqContent = document.querySelectorAll('.faq-content');

faqContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});

// ========================menuBar============================

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