import { ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const API_URL = 'https://api.themoviedb.org/3';

interface Movie {
    id: number,
    original_language: "en",
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

function Home() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [query, setQuery] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setQuery(e.target.value)
        if (query)
            searchcMovies(query)
    }

    useEffect(() => {
        if (!query)
            fetchMovies(query)
    }, [query])

    const fetchMovies = (q: string) => {
        setLoading(true)
        fetch(`${API_URL}/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c`, {

        })
            .then(res => res.json())
            .then(res => setMovies(res.results))
            .finally(() => {
                setLoading(false)
            })

    }

    const searchcMovies = (q: string) => {
        setLoading(true)
        fetch(`${API_URL}/search/movie?query=${q}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`, {

        })
            .then(res => res.json())
            .then(res => setMovies(res.results))
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <div style={{
            padding: 55,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{ alignSelf: 'self-start' }}>SHMovies</h1>

            <input value={query} onChange={onSearch} placeholder="Search for a movie" />

            <div style={{
                display: 'grid',
                justifyContent: 'space-between',
                gap: '50px 100px',
                gridTemplateColumns: 'auto auto auto auto'
            }}>
                {
                    loading
                        ?
                        <p>Loading...</p>
                        : movies.map(item =>
                            <Link to={`/${item.id}`} key={item.id}>
                                <div
                                    style={{
                                        width: 300,
                                    }}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        style={{
                                            width: 300,
                                        }}
                                    />
                                    <h3 style={{ color: 'white' }}>{item.title}</h3>
                                </div>
                            </Link>)
                }
            </div>
        </div >

    )
}

export default Home
