
document.getElementById('error-message-2').style.display = 'none';
const searchBook=()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    
    document.getElementById('error-message-2').style.display = 'none';
    if(searchText===''){
        document.getElementById('error-message-2').style.display = 'none';
    }
    
    else {
            // load data
            const url = `https://openlibrary.org/search.json?q=${searchText}`;
            fetch(url)
                .then(res => res.json())
                .then(data => displaySearchResult(data.docs))
              
        }
   
    
   
};

const displaySearchResult = bookDetails => {
    const searchResult = document.getElementById('search-result');
    
    searchResult.textContent = '';
//  if result is not found 
    if (bookDetails.length === 0) {
       const div1= document.createElement('div')
       div1.innerHTML=` <p  class=" text-danger text-center fw-bold"><span><i class="fas fa-times-circle"></i></span> Sorry, we couldn't find a book with that name. search result is not found</p>`
       searchResult.appendChild(div1);
    }
    // total result found count
    const div2 =document.createElement('h2')
    div2.innerHTML=`<h5 class="text-white p-5 text-center">About ${bookDetails.length} results</h5>`
    searchResult.appendChild(div2)
    bookDetails.forEach(book => {
   

       
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 m-4 rounded-2 mb-0 ">
            <img class="img-fluid w-100 p-2 pb-0 mb-0 rounded" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" /*  class="card-img-top" */  alt="">
            <div class="card-body m-0">
                <h5 class="card-title lead text-center fw-bolder m-0 p-0 ">${book.title}</h5>
                <p class="card-text text-center m-0 p-0 text-muted">${book.author_name[0]}</p>
                <hr>
                <p class="card-text lead m-0 p-0"><span class="fw-bolder">publisher</span> ${book.publisher.slice(0, 200)}</p>
                <p class="card-text lead m-0 p-0">first published in  <span class="fw-bolder">${book.publish_date}</span></p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
};