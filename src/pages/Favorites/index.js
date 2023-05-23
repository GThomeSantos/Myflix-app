import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"

import './favorites.css';

function Favorites() {

    const [movies, setMovies] = useState ([]);

    useEffect(() => {

        const myList = localStorage.getItem("@myflix");
        setMovies(JSON.parse(myList) || [])

    }, [])

    function deleteMovie(id) {
        let moviesFilter = movies.filter((movie) => {
            return(movie.id !== id)
        })

        setMovies(moviesFilter);
        localStorage.setItem("@myflix", JSON.stringify(moviesFilter))
        toast.success("Movie deleted successfully!")
    }

    return(
        <div className='my-movies'>
            <h1>My List</h1>

            {movies.length === 0 && <span>There's an empty space between us...</span>}

            <ul>
                {movies.map((movie) => {
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>See Details</Link>
                                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;