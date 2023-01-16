var cart = document.getElementById('card');
var region = document.getElementById('région');
var categorie = document.getElementById('catégorie');
for( i = 0 ; i <6 ;i++){
fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(async response=>{
    let data = await response.json()
    console.log(data);
    return data
}
).then(response=>{
    create(response)
})
    function create(array){
        array.meals.forEach(element =>{
            let card = document.createElement("div");
            card.setAttribute("class","card col-md-5 col-lg-3 p-0 m-0")
            let img = document.createElement("img");
            img.setAttribute("src",element.strMealThumb);
            img.setAttribute("class","card-img-top")
            card.append(img);
            let CardBody = document.createElement("div");
            CardBody.setAttribute("class","card-body");
            let CardTitle = document.createElement("h5");
            CardTitle.setAttribute("class", "card-title");
            CardTitle.append(element.strMeal);
            let button = document.createElement("button");
            button.setAttribute("class","btn btn-primary");
            button.setAttribute("data-bs-toggle","modal")
            button.setAttribute("data-bs-target","#modale")
            button.id = element.idMeal;
            let show = document.createTextNode("Read More");
            button.appendChild(show);
            button.addEventListener("click",(e)=>{
            document.querySelector(".modal-title").innerHTML =element.strMeal
            document.querySelector(".modal-body").innerHTML =""
            let img = document.createElement("img");
            img.setAttribute("src",element.strMealThumb);
            img.setAttribute("class","card-img-top")
            document.querySelector(".modal-body").append(img)
            let catégorie = document.createElement("h3");
            catégorie.append(element.strCategory);
            document.querySelector(".modal-body").append(catégorie);
            let région = document.createElement("h4");
            région.append(element.strArea);
            document.querySelector(".modal-body").append(région);
            let reccete = document.createElement("p");
            reccete.append(element.strInstructions);
            document.querySelector(".modal-body").append(reccete)
            

            })
            CardBody.append(CardTitle,button);
            card.append(CardBody);
            document.querySelector('#content').append(card);
        })
            
        }

     }


     // search ********

     document.querySelector('#search-btn').addEventListener('click',()=>{
        document.querySelector('#content').innerHTML = '';
        var urlvalue =document.querySelector('#search').value;
       
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${urlvalue}`).then((response)=>{
                let searchdata = response.json();
                return searchdata
                
        }).then((response)=>{
                response.meals.forEach(element => {
                        let card = document.createElement("div");
                        card.setAttribute("class","card col-md-5 col-lg-3 p-0 m-0")
                        let img = document.createElement("img");
                        img.setAttribute("src",element.strMealThumb);
                        img.setAttribute("class","card-img-top")
                        card.append(img);
                        let CardBody = document.createElement("div");
                        CardBody.setAttribute("class","card-body");
                        let CardTitle = document.createElement("h5");
                        CardTitle.setAttribute("class", "card-title");
                        CardTitle.append(element.strMeal)
                        let button = document.createElement("button");
                        button.setAttribute("class","btn btn-primary");
                        let show = document.createTextNode("Read More");
                        button.appendChild(show);
                        CardBody.append(CardTitle,button);
                        card.append(CardBody);
                        document.querySelector('#content').append(card)
                });     
        })

})





// slider******
var currentslide = 1;
// slide number element
var slideNumberElement = document.getElementById('slider-number');
// previous and next button
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick = nextslide;
prevButton.onclick = prevslide;

function nextslide(){
    console.log('Next');
}
function prevslide(){
    console.log('Previous');
}
