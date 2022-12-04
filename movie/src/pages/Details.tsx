import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const API_URL = 'https://api.themoviedb.org/3';

interface Movie {
    id: number,
    original_language: "en",
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
    backdrop_path: string
    tagline: string
    genres: {
        id: number
        name: string
    }[]
}

function Details() {
    const [loading, setLoading] = useState<boolean>(false)
    let { movieId } = useParams();
    const [movie, setMovie] = useState<Movie>()

    useEffect(() => {
        setLoading(true)
        fetch(`${API_URL}/movie/${movieId}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
            .then(res => res.json())
            .then(res => setMovie(res))
            .finally(() => {
                setLoading(false)
            })
    }, [movieId])

    const { title, tagline, overview, genres, release_date, poster_path } = movie ?? {}

    return (
        <div style={{
            padding: 55,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {
                loading
                    ?
                    <p>Loading...</p>
                    :
                    <div className="container">
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                        <div style={{ width: '50%' }}>

                            <h1>{title}({new Date(release_date ?? '')?.getFullYear()})</h1>
                            <span style={{ color: "gray" }}>{genres?.map(item => item.name).join(', ')}</span>
                            <h3>{tagline}</h3>
                            <p>{overview}</p>
                        </div>

                    </div>
            }
        </div>
    )
}

export default Details
