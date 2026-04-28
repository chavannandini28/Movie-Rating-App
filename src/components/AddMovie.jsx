import { useState } from "react"

function AddMovie({addMovie}){

const [title,setTitle] = useState("")
const [rating,setRating] = useState("")
const [description,setDescription] = useState("")

const submitHandler=(e)=>{
e.preventDefault()

const newMovie={
id:Date.now(),
title,
rating:Number(rating),
description
}

addMovie(newMovie)

setTitle("")
setRating("")
setDescription("")
}

return(

<div className="box">

<h3 className="section">Add New Movie</h3>

<form onSubmit={submitHandler}>

<input
className="input"
placeholder="Movie Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
className="input"
placeholder="Rating"
value={rating}
onChange={(e)=>setRating(e.target.value)}
/>

<textarea
className="input"
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<button className="addbtn">
Add Movie
</button>

</form>

</div>

)

}

export default AddMovie