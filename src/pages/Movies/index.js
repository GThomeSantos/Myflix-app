import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

import "./movies.css"

import api from "../../services/api";

function Movie(){

    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:'d3d510de8a2e6dfd5b1c27a0a83124c1',
                    language: 'en',
                }
            })
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("Movie not found!")
                navigate('/', {replace: true});
                return;
            })
        }
        loadMovie();

        return() => {
            console.log("Componente desmontado")
        }
    }, [navigate, id])

    function saveMovie() {
        const myList = localStorage.getItem('@myflix');

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movie.id)

        if(hasMovie) {
            toast.warn("This movie is already on your list!");
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem("@myflix", JSON.stringify(savedMovies));
        toast.success("Movie saved successfully!")
    }

    if(loading){
        return(
            <div className="movie-info">
                <h1>Loading movie...</h1>
            </div>
        )
    }

return(
    <div className="movie-info">
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

        <h3>Details</h3>
        <span>{movie.overview}</span>

        <strong>Rating: {movie.vote_average} / 10</strong>

        <div className="area-buttons">
            <button onClick={saveMovie}>Save</button>
            <button>
                <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>Trailer</a>
            </button>

        </div>
    </div>
)
}

export default Movie;