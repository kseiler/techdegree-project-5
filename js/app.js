// Initialize BaguetteBox
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
    let filter = document.getElementById('search').value;
    filter = filter.toLowerCase();
    // Target <a> HTML elements
    let link = document.getElementsByTagName('a');
    // Loop through each <a> and get strings from within "data-caption" attribute
    // Convert caption to lowercase and compare with filter string
    for ( let i = 0; i < link.length; i++ ) { 
        // if string matches do nothing (show content)
        if ( link[i].getAttribute('data-caption').toLowerCase().includes(filter) ) {
            link[i].style.display = "";
        }
        // if no match then display: none;
        else {
            link[i].style.display = "none";                 
        }
    }
}