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

// ========================goods and shop cart button active============================
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

});

