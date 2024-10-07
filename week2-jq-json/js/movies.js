$(function () {


    init();

})

function init() {
    console.log('jquery goodness has loaded');
    SetUpMovieLoader();

}

function SetUpMovieLoader() {

    // $('#btnLoadMovies').on('click', function () {})
    $('#btnLoadMovies').on('click', function () {

        console.log('loading movie button clicked');
        const URL_MOVIES = './data/movies.json';

        $.getJSON(URL_MOVIES, function (moviedata) {


            let foundMovie = FindMovieById(107, moviedata);
            console.log(foundMovie);
            RenderMovieDataAsTable(moviedata)

        })
        // no code here as above call is async 
    });
}

function RenderMovieDataAsTable(moviedata) {

    console.log(moviedata);
    console.log("===============")
    console.log({ moviedata })

    htmlString = [];


    for (const movie of moviedata) {

        // object destructuring
        const { title, year, director, id, cast, ...rest } = movie;

        console.log(title)

        htmlString.push('<tr>')

        htmlString.push(`<td>${title}</td><td>${year}</td><td>${director}</td>`)


        // htmlString.push('<td>')
        // htmlString.push(title)
        // htmlString.push('</td>')


        // htmlString.push('<td>')
        // htmlString.push(year)
        // htmlString.push('</td>')


        // htmlString.push('<td>')
        // htmlString.push(director)
        // htmlString.push('</td>')

        htmlString.push('</tr>')

    }


    $('#movieBody').append(htmlString.join(""));



}

function FindMovieById(id, listOfMovies) {

    //return "Not implemented";

    let movie = {};

    for (i = 0; i < listOfMovies.length; i++) {
        if (listOfMovies[i].id === id) {

            movie = listOfMovies[i];
            break;
        }
    }
    return movie;

}