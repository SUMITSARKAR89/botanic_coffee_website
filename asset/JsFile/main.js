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



// ========================LOcalmenuBar============================
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

})

