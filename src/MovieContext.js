// with context we make a centralized state and we can pass that to any component without sending and using props
import React, { useState, createContext } from "react";

// create the context
export const MovieContext = createContext();

// just holds some information and pass it down to all components we want to
export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 2134
        },
        {
            name: 'Game of Thrones',
            price: '$15',
            id: 256473
        },
        {
            name: 'Inception',
            price: '$12',
            id: 23456
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {/* props.children to render all child components like <Nav>, <MovieList> */}
            {props.children}
        </MovieContext.Provider>
    );
}