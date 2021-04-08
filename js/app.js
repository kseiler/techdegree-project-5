baguetteBox.run('.gallery');


const search = document.getElementById('search');
search.addEventListener('keyup', filterImages);

// function filterImages() {
//   let filter = document.getElementsByTagName('search').value
//   filter = filter.toLowerCase();
//   let item = document.getElementsByClassName('gallery-item');
//   let caption = document.getElementsByTagName('a')[0].getAttribute('data-caption')[0];

//   for ( i = 0; i < caption.length; i++ ) {
//     if ( caption[i].toLowerCase().includes(filter) ) {
//       item[i].style.display = '';
//     } else {
//       item[i].style.display = 'none';
//     }
//   }
  
// }

function filterImages() {
  let input = document.getElementById('search').value;
  input = input.toLowerCase();
  let link = document.getElementsByTagName('a');
    
  for (i = 0; i < link.length; i++) { 
      if (!link[i].getAttribute('data-caption').toLowerCase().includes(input)) {
          link[i].style.display="none";
      }
      else {
          link[i].style.display="";                 
      }
  }
}