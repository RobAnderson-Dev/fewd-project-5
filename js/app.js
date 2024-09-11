baguetteBox.run('.gallery');

const textSearch = document.getElementById('search-bar');

textSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let photos = document.querySelectorAll('a.photo');

    photos.forEach( photo => {
        let title = photo.getAttribute('title');
        let caption = photo.getAttribute('data-caption');

        if ( title.toLowerCase().includes(currentValue) ) {
            photo.style.display = 'block';
        } else if ( caption.toLowerCase().includes(currentValue) ) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
});

const photoCards = document.querySelectorAll('a.photo');

photoCards.forEach( card => {
    let randomAniDelay = Math.floor(Math.random() * 250);
    card.style.animation = `fadeIn 1s .${randomAniDelay}s ease forwards`;
});
