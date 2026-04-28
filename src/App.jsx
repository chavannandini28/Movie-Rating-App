import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import "./App.css"

import MovieList from "./components/MovieList"
import AddMovie from "./components/AddMovie"
import MovieDetails from "./components/MovieDetails"

const initialMovies = [
{
id:1,
title:"Inception",
rating:5,
description:"A thief who steals corporate secrets through dream-sharing technology."
},
{
id:2,
title:"Interstellar",
rating:4,
description:"A team of explorers travel through a wormhole in space."
},
{
id:3,
title:"The Dark Knight",
rating:5,
description:"When the menace known as the Joker emerges from his mysterious past."
}
]

function App() {

const [movies,setMovies] = useState(initialMovies)

const addMovie = (movie)=>{
setMovies([...movies,movie])
}

return (

<BrowserRouter>

<h2 className="heading">
Movie Collection with Rating App in React
</h2>

<Routes>

<Route
path="/"
element={<MovieList movies={movies}/>}
/>

<Route
path="/add"
element={<AddMovie addMovie={addMovie}/>}
/>

<Route
path="/movie/:id"
element={<MovieDetails movies={movies}/>}
/>

</Routes>

</BrowserRouter>

)
}

export default App