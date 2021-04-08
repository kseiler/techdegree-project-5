baguetteBox.run('.gallery');

// Set keyup listener to Search box
const search = document.getElementById('search');
search.addEventListener('keyup', filterImages);

/**
 * Filter Image Function
 * Takes search input and filters images based on keywords from image captions.
 */

function filterImages() {
    // Take 'search string' and format to lowercase
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    // Target links
    let link = document.getElementsByTagName('a');

    for ( let i = 0; i < link.length; i++ ) { 
        if ( link[i].getAttribute('data-caption').toLowerCase().includes(input) ) {
            link[i].style.display = "";
        }
        else {
            link[i].style.display = "none";                 
        }
    }
}