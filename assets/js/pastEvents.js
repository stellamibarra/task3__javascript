let card = document.getElementById("card-past");
const currentDate = data.currentDate;
const arrayEvents = data.events;
data = data.events;
let finder = document.getElementById("finder");


window.onload = () => { getData(data) }

function getFindData(data) {

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
                <p class="card-text">$ ${data.price}</p>
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
    getFindData(dataFinderFiltered)
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
        getFindData(filteredData);
    });
}

function getData() {

  let pas = [];

  for (let i = 0; i < arrayEvents.length; i++) {
    let eventElement = arrayEvents[i];

    if (eventElement.date < currentDate) {
      pas.push(eventElement);
    }
  }

  let template = ""

  for (let index = 0; index < pas.length; index++) {

    template += `

  <div class="card event__card p-2 m-5 rounded ">
  <div class="row no-gutters">
    <div class="col-sm-5">
      <img
        class="card-img shadow-sm p-3 mb-5 bg-white rounded"
        src=" ${ pas[index].image } "
        alt=""
      />
    </div>
    <div class="col-sm-7">
      <div class="card-body">
        <h5 class="card-title">${ pas[index].name } </h5>
        <p class="card-text">${ pas[index].date }</p>
        <p class="card-text">${ pas[index].description }</p>
        <p class="card-text">Price $ ${ pas[index].price }</p>
        <a href="./details.html?id=${ pas[index]._id }" class="btn btn-primary">Details</a>
      </div>
    </div>
  </div>
</div>
`}
  card.innerHTML = template
}

