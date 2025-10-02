import { useState } from 'react';
import MovieListItem from './MovieListItem';

export default function MoviesList() {
    const [movies, setMovies] = useState([
        { 'id': 1, 'title': 'The Matrix' },
        { 'id': 2, 'title': 'Requiem for a dream' },
        { 'id': 3, 'title': '300' },
        { 'id': 4, 'title': 'Breaking Bad' },
        { 'id': 5, 'title': 'Man of Steel' },
    ]);

    const movieElements = movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)

    function deleteFirst() {
        setMovies(prev => [...prev.slice(1)])
    }


    return (
        <>
            <ul>
                {movieElements}
            </ul>
            <button onClick={deleteFirst}>Remove first</button>
        </>
    );
}