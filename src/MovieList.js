import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
    // here we use the context created in MovieContext
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            {movies.map(movie => (
                <Movie 
                    name={movie.name} 
                    price={movie.price} 
                    key={movie.id}
                />
            ))}
        </div>
    );
}

export default MovieList;