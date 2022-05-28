import { productList } from './data.js'
import { inspirationFood } from './inspiration_food.js'
import { topbrandList } from './top_brand.js'
const container = document.getElementById('container')
const main_section = document.getElementById('main-section')
const main_section_two = document.getElementById('main-section-two')

// Taking data into fragments
const productListFragment = document.createDocumentFragment()
const inspirationFoodFragment = document.createDocumentFragment()
const topBrandFoodFragment = document.createDocumentFragment()

// Function calling
foodInspiration()
topBrand()
product()

// Function Defination

// Code for Inspiration Food
function foodInspiration() {
  for (let i = 0; i < inspirationFood.length; i++) {
    const { src_1, foodname } = inspirationFood[i]
    const inspi_div = document.createElement('div')
    inspi_div.className = 'inspi-food-card'

    inspi_div.innerHTML = `
      <img src="${src_1}" alt="Thali" class="inspi-food-img">
      <h3 class="inspi-food-text"><a href="#" class="inspi-food-link">${foodname}</a></h3>`

    inspirationFoodFragment.appendChild(inspi_div)
  }
  main_section.appendChild(inspirationFoodFragment)
}

// Code for top brand foods

function topBrand() {
  for (let j = 0; j < topbrandList.length; j++) {
    const { src_2, brandname, time } = topbrandList[j]
    const top_brand_div = document.createElement('div')
    top_brand_div.className = 'top-food-card'
    top_brand_div.innerHTML = `<img src="${src_2}" alt="Thali" class="top-food-img">
  <h3 class="top-food-text"><a href="#" class="top-food-link">${brandname}</a></h3>
  <p class="time">${time}</p>`
    topBrandFoodFragment.appendChild(top_brand_div)
  }
  main_section_two.appendChild(topBrandFoodFragment)
}

//   Code for Foodcards
function product() {
  for (let item = 0; item < productList.length; item++) {
    const {
      src,
      promoted,
      off,
      food_time,
      name,
      star_numbers,
      food_description,
      for_each_price,
      food_footer_description,
    } = productList[item]

    const carddiv = document.createElement('div')
    carddiv.className = 'card'

    carddiv.innerHTML = `<div class="card-img">
    <img src="${src}" alt="food-image">
</div>
<a href="#" class="promoted">${promoted}</a>
<p class="off">${off}</p>
<p class="food-time">${food_time}</p>
<div class="food-card-info">
   <div class="food-name-info">
       <div class="food-name">${name}</div>
       <div class="star-rating">
           <div class="star-numbers">${star_numbers}</div>
           <div class="star"><i class="fa-solid fa-star"></i></div> 
       </div>
   </div>

   <div class="food-description-info">
       <p class="food-description">${food_description}</p>
       <p class="for-each-price">${for_each_price}</p>
   </div>

   <div class="food-card-hr"></div>

   <div class="food-footer">
       <img class="blue-arrow" src="./assets/images/blue arrow.png" alt="blue-arrow">
       <p class="food-footer-description">${food_footer_description}</p>
       <img class="safety" src="./assets/images/safety.png" alt="safety">
   </div>
</div>`

    productListFragment.appendChild(carddiv)
  }

  container.appendChild(productListFragment)
}
