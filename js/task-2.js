const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('ul.gallery');

const galleryMarkup = images
  .map(({ url, alt }) => `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" class="gallery-image">
    </li>
  `)
  .join('');


galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.style.display = 'flex';
galleryList.style.gap = '8px';
galleryList.style.listStyle = 'none';



const imagesElements = galleryList.querySelectorAll('.gallery-image');
imagesElements.forEach(img => {
  img.style.maxWidth = '500px';
  img.style.height = 'auto';
});
