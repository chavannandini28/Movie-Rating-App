import { useParams, Link } from "react-router-dom"

function MovieDetails({movies}){

const {id}=useParams()

const movie = movies.find((m)=>m.id === Number(id))

return(

<div className="details">

<h2>{movie.title}</h2>

<p>{movie.description}</p>

<h3 className="stars">
{"⭐".repeat(movie.rating)}
</h3>

<Link to="/">
<button>Back</button>
</Link>

</div>

)

}

export default MovieDetails