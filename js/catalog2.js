function fetchCatalog() {
    // will create a GET AJAX req to API
    // get the list of movies
    // travel the array to get each movie
    // display the movie on HTML

    $.ajax({
        type: "GET",
        url: '/api/movies',
        success: function(res) {
            var list = res.objects;
            for(let i=0; i< list.length; i++) {
                displayMovie(list[i]);
            }
        },
        error: function(details){
            console.log("Error", details);
        }
    });
}

function displayMovie(movie){
    let container = $("#catalog");

    var syntax = 
    `<div class="card" style="width: 18rem;">
        <img src="${movie.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${ movie.title }</h5>
        <a href="/details/${movie.id}" class="btn btn-info">See details</a>
        </div>
    </div>`

    container.append(syntax);
}

function init() {
    console.log('Catalog CSR page');

    fetchCatalog();
}

