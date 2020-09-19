
let result; 

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
  return response.json();
  }).then(function(json) {
    console.log(json);
    result = json
    // json.map(j => j["numberOfPages"]); // why can't you do this? Can you store json response in a variable? 
    // console.log(json[4].name);
   
   
    renderBooks(json);

  })
};

function pageTotal() {
  return (result.map(j => j.numberOfPages)).reduce((a, b) => a + b, 0);
}

function fifthName() {
  return result[4].name;
}



function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', async function() {
  await fetchBooks();
  console.log(fifthName());
  console.log(`Total pages in series: ${pageTotal()}`);
})



