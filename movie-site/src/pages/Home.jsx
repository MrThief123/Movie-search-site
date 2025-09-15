import MovieCard from "../components/MovieCard"

function Home () {
    const movies = [
        {id: 1, title: "Piartes", release_date: "2024"},
        {id: 2, title: "John Wick", release_date: "2013"},
        {id: 3, title: "Intersetllar", release_date: "2014"},
    ]

    return (
        <div className="home">
            <div className="moives-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>

        </div>
    )
}

export default Home