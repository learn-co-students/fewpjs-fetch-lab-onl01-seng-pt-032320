function fetchBooks() {
  //empty function called when index.html is loaded
  return fetch('https://anapioficeandfire.com/api/books')
  
  .then((response) => response.json())

  .then((json) => renderBooks(json))
// render data
//json = books we got from our fetch request our renderBooks function
//we will render all the books


}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})


// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => console.log(json));