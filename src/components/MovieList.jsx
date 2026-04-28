import { Link } from "react-router-dom"

function MovieList({movies}){

return(

<div className="box">

<h3 className="section">Movie List</h3>

<table className="table">

<tbody>

{movies.map((movie)=>(
<tr key={movie.id}>

<td>
<Link className="link" to={`/movie/${movie.id}`}>
{movie.title}
</Link>
</td>

<td className="stars">
{"⭐".repeat(movie.rating)}
</td>

</tr>
))}

</tbody>

</table>

<Link to="/add">
<button className="addbtn">
Add Movie
</button>
</Link>

</div>

)

}

export default MovieList