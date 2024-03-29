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
  /* countriesContainer.style.opacity = 1; */
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  /* countriesContainer.style.opacity = 1; */
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call for the first country
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText); // when doing destructuring with [] its like doing [0] of an array
//     console.log(data);

//     // Render the first country
//     renderCountry(data);

//     const neighbour = data.borders?.[0];

//     // Call AJAX neighbour country
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [neighbour] = JSON.parse(this.responseText);
//       console.log(neighbour);
//       renderCountry(neighbour, "neighbour");
//     });

//     //Get neighbour country
//   });
// };

// getCountryAndNeighbour("usa");

// const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const getJSON = function (url, errorMsg = "Sum went left") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(`${err} :(`);
//       renderError(`yoo sum went left broda: ${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Cannot find country`
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`${country} has no neighbour`);
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Cannot find neighbour country"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(`${err} :(`);
      renderError(`yoo sum went left broda: ${err.message}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener("click", function () {
  getCountryData("australia");
});
console.log("okkk");
