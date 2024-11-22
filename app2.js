
let api="https://www.omdbapi.com/?apikey=61748dd7&t="
let title = document.getElementById('title')
let director=document.getElementById('director')
let actors=document.getElementById('actors')
let collections=document.getElementById('collections')
let Desc=document.getElementById('Desc')
let awards=document.getElementById('awards')
let writer=document.getElementById('writer')
let ratings=document.getElementById('ratings')
let genre=document.getElementById('genre')
let date=document.getElementById('date')
let poster=document.getElementById('poster')



function searchMovie(){
    let movieName = document.getElementById('movieName')
    let query = api+movieName.value
    fetch(query).then((data)=>{
        return data.json()
     }).then((data)=>{
      title.innerText = data.Title;
      director.innerText = data.Director;
      actors.innerText = data.Actors;
      collections.innerText = data.BoxOffice;
      Desc.innerText = data.Plot;
      awards.innerText = data.Awards;
      writer.innerText = data.Writer;
      ratings.innerText = data.imdbRating;
      genre.innerText = data.Genre;
      date.innerText = data.Released;
      poster.src = data.Poster;
     })
}

