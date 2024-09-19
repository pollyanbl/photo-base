const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = [
    'images/pic1.jpg', 
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg'
]

/* Declaring the alternative text for each image file */
const alternativeTexts = [
    'grassland', 
    'river',
    'Beautiful house',
    'flowers',
    'river and tower'
]

/* Looping through images */
for(let i=0; i<pictures.length; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', pictures[i]);
newImage.setAttribute('alt', alternativeTexts[i]);
thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (e) => {
    const img = e.target;
    displayedImage.src = img.src;
    displayedImage.alt = img.alt;

})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
   if(e.target.classList.contains('dark')){
    e.target.classList.remove('dark');
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    e.currentTarget.textContent = 'Lighten'
   }else{
    e.target.classList.add('dark');
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    e.currentTarget.textContent = 'Darken'
   }
})