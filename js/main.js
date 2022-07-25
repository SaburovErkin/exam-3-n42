
let elList = document.querySelector("#list");
let elBtnPokemon = document.querySelector("#btn__pokemon");
let elBtnMovies = document.querySelector("#btn__movies");
let elBtnRandom = document.querySelector("#btn__random");
let elBtnClear = document.querySelector("#btn__clear");
let elResult = document.querySelector(".result");
let elItem = document.querySelector("#text");
let elImage = document.querySelector("#image");


let pokemonArray = pokemons.slice(0, 100);
let moviesArray = movies.slice(0, 100);


elBtnPokemon.addEventListener("click", function() {
	elResult.textContent = pokemonArray.length;
	elImage.innerHTML = `<img class="logo_img" src="./images/pokemon_logo.png" alt="pokemon">`
	renderArray(pokemonArray);
});

elBtnMovies.addEventListener("click", function() {
	elResult.textContent = moviesArray.length;
	elImage.innerHTML = `<img class="logo_img" src="./images/movie_logo.png" alt="movie"></img>`
	renderArray(moviesArray);
});

elBtnRandom.addEventListener("click", function() {
	elImage.innerHTML = `<img class="logo_img" src="./images/pokemon_logo.png" alt="pokemon">
	<img class="logo_img" src="./images/movie_logo.png" alt="movie"></img>`
	renderBoth(pokemonArray, moviesArray);
});

elBtnClear.addEventListener("click", function() {
	elList.innerHTML = null;
	elImage.innerHTML = null
	elResult.textContent = 0;
	elList.innerHTML = `<p class="h2 text-center">Cleaned!</p>`
});


function renderArray(array) {
	
	elList.innerHTML = null
	
	for (const item of array) {
		let newLi = document.createElement("li");
		
		let newImg = document.createElement("img");
		
		let newH3 = document.createElement("h3");
		
		let newP1 = document.createElement("p");
		
		let newP2 = document.createElement("p");

		let newP3 = document.createElement("p");
		
		if (item.name) {
			newImg.src =item.img;
			newImg.width = "200";
			newImg.height = "200";
			
			newH3.textContent = item.name;
			
			newP1.textContent = item.type;
			
			newP2.textContent = item.weight;
			
			newP3.textContent = item.height;
		}else {
			
			newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
			newImg.width = "250";
			newImg.height = "150";
			newImg.classList.add("movie_img");
			
			newH3.textContent = item.Title;
			
			newP1.textContent = item.imdb_rating;
			
			newP2.textContent = item.Categories;

			
			newP3 = document.createElement("a")
            newP3.textContent = "Watch now";
            newP3.href= `https://www.youtube.com/watch?v=${item.ytid}`
		}
		
		newLi.appendChild(newImg);
		newLi.appendChild(newH3);
		newLi.appendChild(newP1);
		newLi.appendChild(newP2);
		newLi.appendChild(newP3);
		
		elList.appendChild(newLi);
		newLi.classList.add("col-3", "mb-5");
		newLi.style = "width: 300px;"
	}
};

function renderBoth(array1, array2) {

	elList.innerHTML = null

    let renderedArray = array1.concat(array2)

    elResult.textContent = renderedArray.length;

	for (const item of renderedArray) {
		let newLi = document.createElement("li");
		
		let newImg = document.createElement("img");
		
		let newH3 = document.createElement("h3");
		
		let newP1 = document.createElement("p");
		
		let newP2 = document.createElement("p");

		let newP3 = document.createElement("p");
		
		if (item.name) {
			newImg.src =item.img;
			newImg.width = "200";
			newImg.height = "200";
			
			newH3.textContent = item.name;
			
			newP1.textContent = item.type;
			
			newP2.textContent = item.weight;
			
			newP3.textContent = item.height;
		}else {
			
			newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
			newImg.width = "250";
			newImg.height = "150";
			newImg.classList.add("movie_img");
			
			newH3.textContent = item.Title;
			
			newP1.textContent = item.imdb_rating;
			
			newP2.textContent = item.Categories;

			let newP3 = document.createElement("a")
            newP3.textContent = "Watch now";
            newP3.href= `https://www.youtube.com/watch?v=${item.ytid}`
			newP3.classList.add("btn_tralier")
			
		}
		
		newLi.appendChild(newImg);
		newLi.appendChild(newH3);
		newLi.appendChild(newP1);
		newLi.appendChild(newP2);
		newLi.appendChild(newP3);
		
		elList.appendChild(newLi);
		newLi.classList.add("col-3", "mb-5");
		newLi.style = "width: 300px;"
	};
}