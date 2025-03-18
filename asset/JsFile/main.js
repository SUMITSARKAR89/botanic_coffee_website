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




const images = document.querySelectorAll('.img');
images.forEach( img => {
    img.addEventListener('mouseover', () => {
        removeClass (images);
        img.classList.add('show-img')
    })
})

function removeClass (images){
    images.forEach( img => {
        img.classList.remove('show-img')
    })
}