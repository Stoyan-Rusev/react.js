export default function Movie(props) {
    return (
        <>
            <article>
                <header>
                    <h2>{props.movie.Title}</h2>
                </header>
                <main>
                    <p>{props.movie.Year}</p>
                    <p>Awards: {props.movie.Awards}</p>
                    <img src={props.movie.Images[0]} alt={props.movie.Title} />
                    <hr />
                </main>
            </article>
        </>
    );
}