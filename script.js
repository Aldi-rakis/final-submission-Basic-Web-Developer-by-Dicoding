// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}




let products = null;

fetch('product.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    addDataToHTML();
  })

function addDataToHTML() {
  // remove data default from HTML
  let listProductHTML = document.querySelector('.listProduct');

  // add new data
  if (products != null) // if has data
  {
    products.forEach(product => {
      let newProduct = document.createElement('a');

      newProduct.classList.add('item');
      newProduct.innerHTML =
        `<img src="${product.image}" alt="">
          <h2>${product.name}</h2>
          <div class="price">Rp. ${product.price}</div>`;
      listProductHTML.appendChild(newProduct);

    });
  }
}
