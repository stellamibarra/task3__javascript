details = data.events;
const queryString = location.search
console.log("queryString :" + queryString);
const params = new URLSearchParams(queryString)
console.log("params : " + params);
const id = params.get("id")
console.log("id : " + id);
const item = details.find(event => event._id == id)
/* details.forEach(element => {
    console.log(element);
}); */
console.log(item);
const div = document.querySelector(".container")
div.innerHTML = `

<div class="card event__card p-2 m-5 rounded ">
  <div class="row no-gutters">
    <div class="col-sm-5">
      <img
        class="card-img shadow-sm p-3 mb-5 bg-white rounded"
        src=" ${item.image} "
        alt=""
      />
    </div>
    <div class="col-sm-7">
        <div class="card-body">
          <h5 class="card-title">${item.name} </h5>
            <p class="card-text">
              ${item.description} 
            </p>
            <p class="card-text">Category : ${ item.category}</p>
            <p class="card-text">Capacity : ${ item.capacity}</p>
            <p class="card-text">Assistance : ${ item.assistance}</p>
            <p class="card-text">Price : ${ item.price}</p>

          <input type="button" value="Volver" name="volver" onclick="history.back()" />
        </div>
      </div>
    </div>
  </div>
</div>
`