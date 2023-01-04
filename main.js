
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "Breakfast",
        price: "$10.99",
        img: "./img/item-1.jpeg",
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 2,
        title: "Diner Double",
        category: "Lunch",
        price: "$12.99",
        img: "./img/item-2.jpeg",
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "Shakes",
        price: "$7.99",
        img: "./img/item-3.jpeg",
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
        id: 4,
        title: "Country Delight",
        category: "Breakfast",
        price: "$20.99",
        img: "./img/item-4.jpeg",
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "Breakfast",
        price: "$14.99",
        img: "./img/item-5.jpeg",
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "Shakes",
        price: "$10.99",
        img: "./img/item-6.jpeg",
        description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "Breakfast",
        price: "$10.99",
        img: "./img/item-7.jpeg",
        description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
        id: 8,
        title: "American Classic",
        category: "Lunch",
        price: "$12.99",
        img: "./img/item-8.jpeg",
        description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        category: "Shakes",
        price: "$7.99",
        img: "./img/item-9.jpeg",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
        id: 10,
        title: "Steak Dinner",
        category: "Dinner",
        price: "$22.99",
        img: "./img/item-10.jpeg",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    }
]

const menuContainer = document.querySelector('.menu-container');
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', function() {
    // menu.map(menuItem => renderMenuItem(menuItem));
    menu.forEach(menuItem => renderMenuItem(menuItem));

})

filterBtns.forEach(btn => btn.addEventListener('click', function(e) {
    const menuCategories = menu.filter(menuItems => {
        if (e.target.textContent === menuItems.category) {
        return menuItems;
        } else if (e.target.textContent === 'All') {
            return menu;
        }
    })
    menuContainer.textContent = '';
    // menuCategories.map(menuItem => renderMenuItem(menuItem));
    menuCategories.forEach(menuItem => renderMenuItem(menuItem));

}))


function renderMenuItem(menuItems) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    menuContainer.appendChild(itemContainer);

    const itemPic = document.createElement('img');
    itemPic.classList.add('item-pic');
    itemPic.src = menuItems.img;
    itemContainer.appendChild(itemPic);

    const menuTextContainer = document.createElement('div');
    menuTextContainer.classList.add('menu-text-container');
    itemContainer.appendChild(menuTextContainer);

    const titlePriceContainer = document.createElement('div');
    titlePriceContainer.classList.add('title-price-container');
    menuTextContainer.appendChild(titlePriceContainer);

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = menuItems.title;
    titlePriceContainer.appendChild(itemTitle);

    const itemPrice = document.createElement('h4');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = menuItems.price;
    titlePriceContainer.appendChild(itemPrice);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = menuItems.description;
    menuTextContainer.appendChild(itemDescription);
}   
