let card = document.getElementById("card");
const currentDate = data.currentDate;
const arrayEvents = data.events;
data = data.events;
let finder = document.getElementById("finder");


window.onload = () => { getData(data) }

function getfindData(data) {

    let template = ""

    data.forEach((data) => {
        template += `
      
        <div class="row p-4 justify-content-center">
            <div class="card text-center" style="width: 18rem">
          <img
            src="${data.image}"
            class="card-img-top mt-2"
            alt="..."
          />
            <div class="card-body">
              <h4 class="">${data.name}</h4>
              <h5 class="">${data.category}</h5>

              <p class="card-text">${data.description}</p>
              <div class="price d-flex justify-content-between">
                <p class="card-text">${data.price}</p>
                <a href="./details.html?id=${data._id}" class="btn btn-primary">Details</a>
              </div>
            </div>
        </div>
      </div>
  
  `})
    card.innerHTML = template;
}

finder.addEventListener("change", (e) => {
    let dataFinderFiltered = data.filter((data) => data.category.toLowerCase().includes(finder.value.toLowerCase()))
    getfindData(dataFinderFiltered)
});

const categories = data.map(event => event.category);
const uniqueCategories = [...new Set(categories)];

const checkboxCategory = document.querySelector('#checkboxCategory');

for (const category of uniqueCategories) {
    checkboxCategory.innerHTML +=
        `<input type="checkbox" id="${category}" name="${category}" value="${category}">
    <label for="${category}">${category}</label><br>`
}

const check = document.querySelectorAll('input[type="checkbox"]');

for (const checkbox of check) {
    checkbox.addEventListener('change', () => {
        const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const values = Array.from(checkedCheckboxes).map(checkbox => checkbox.value);
        const filteredData = data.filter(event => values.includes(event.category));
        getfindData(filteredData);
    });
}


function getData() {

  let template =""

  for (let index = 0; index < arrayEvents.length; index++) {

    template += `
    <div class="row p-4 justify-content-center">
      <div class="card text-center" style="width: 18rem">
        <img
          src="${ arrayEvents[index].image }"
          class="card-img-top mt-2"
          alt="..."
        />
          <div class="card-body">
            <h5 class="">${ arrayEvents[index].name }</h5>
            <p class="card-text">${ arrayEvents[index].description }</p>
            <p class="card-text">${ arrayEvents[index].date }</p>
            <div class="price d-flex justify-content-between">
              <p class="card-text">Price $ ${ arrayEvents[index].price }</p>
              
              <a href="./details.html?id=${ arrayEvents[index]._id}" class="btn btn-primary">Details</a>
            </div>
          </div>
      </div>
    </div>

`}
  card.innerHTML = template;
}

