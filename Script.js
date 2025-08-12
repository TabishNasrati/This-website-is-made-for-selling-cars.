const thumbs = document.querySelectorAll('.thumbnails li');
const slides = document.querySelectorAll('.slide');

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        document.querySelector('.thumbnails .selected').classList.remove('selected');
        thumb.classList.add('selected');

        document.querySelector('.slide.active').classList.remove('active');
        slides[index].classList.add('active');
    });
});



//salam 