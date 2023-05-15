
// setTimeout(function() {
//     window.location.href = "https://metapan1992.github.io/evantasiakli/index.html";
//   }, 3000);

// API KEY: 7b9b8bcb1a0c4e3c80bdbc0e78413de2


// fetch('https://newsapi.org/v2/top-headlines?language=en&category=health&q=mental&apiKey=7b9b8bcb1a0c4e3c80bdbc0e78413de2')
//   .then(response => response.json())
//   .then(data => {
//     const newsContainer = document.querySelector('#mycarousel .carousel-inner');
//     data.articles.forEach((article, index) => {
//       const active = index === 0 ? 'active' : '';
//       const articleElement = document.createElement('div');

//       if (active !== '') {
//         articleElement.classList.add('carousel-item', active);
//       } else {
//         articleElement.classList.add('carousel-item');
//       }
//       articleElement.innerHTML = `
//         <img src="${article.urlToImage}" class="d-block w-100 carouselimg" alt="${article.title}">
//         <div class="carousel-caption d-md-block">
      
//           <h5>${article.title}</h5>
//           <p>${article.description}</p>
//           <a href="${article.url}" target="_blank" class="btn btn-secondary">Read More</a>
//         </div>
//         </div>
//       `;
//       newsContainer.appendChild(articleElement);
//     });
//   })
//   .catch(error => console.error(error));



