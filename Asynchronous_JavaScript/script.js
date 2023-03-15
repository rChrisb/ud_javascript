"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// const getCountry = function (country) {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// 	request.send();

// 	request.addEventListener("load", function () {
// 	  const [data] = JSON.parse(this.responseText); // when doing destructuring with [] its like doing [0] of an array
// 	  console.log(data);

// 	  const html = `<article class="country">
// 	<img class="country__img" src="${data.flags.png}" />
// 	<div class="country__data">
// 	  <h3 class="country__name">${data.name.common}</h3>
// 	  <h4 class="country__region">${data.region}</h4>
// 	  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
// 	  1
// 	)} Millions</p>
// 	  <p class="country__row"><span>🗣️</span>${
// 	  data.languages[Object.keys(data.languages)[0]]
// 	}</p>
// 	  <p class="country__row"><span>💰</span>${
// 	  data.currencies[Object.keys(data.currencies)[0]].name
// 	}</p>
// 	</div>
//   </article>`;
// 	  countriesContainer.insertAdjacentHTML("beforeend", html);
// 	  countriesContainer.style.opacity = 1;
// 	});
//   };

//   getCountry("usa");
//   getCountry("canada");
//   getCountry("cameroon");
//   getCountry("switzerland");
//   getCountry("germany");

////////////////////
const renderCountry = function (data, classname = "") {
  const html = `<article class="country ${classname}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
	<h3 class="country__name">${data.name.common}</h3>
	<h4 class="country__region">${data.region}</h4>
	<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} Millions</p>
	<p class="country__row"><span>🗣️</span>${
    data.languages[Object.keys(data.languages)[0]]
  }</p>
	<p class="country__row"><span>💰</span>${
    data.currencies[Object.keys(data.currencies)[0]].name
  }</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call for the first country
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText); // when doing destructuring with [] its like doing [0] of an array
    console.log(data);

    // Render the first country
    renderCountry(data);

    const neighbour = data.borders?.[0];

    // Call AJAX neighbour country
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener("load", function () {
      const [neighbour] = JSON.parse(this.responseText);
      console.log(neighbour);
      renderCountry(neighbour, "neighbour");
    });

    //Get neighbour country
  });
};

getCountryAndNeighbour("usa");
getCountryAndNeighbour("cameroon");
