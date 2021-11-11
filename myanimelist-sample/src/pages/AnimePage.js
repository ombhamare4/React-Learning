import './css/AnimePage.css';
import { useState, useCallback, useEffect } from 'react';
import SearchAnimeCard from '../components/Cards/SearchAnimeCard';

const AnimePage = () => {

    const [animeName, setAnimeName] = useState(' ');
    const [animeData, setAnimeData] = useState([]);

    const SearchAnimeHandler = (event) => {
        console.log(event.target.value);
        setAnimeName(event.target.value);
    };

    const SearchAnimeFormHandler = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        fetchSearchAnime();
    }

    const fetchSearchAnime = useCallback(async () => {
        try {
            const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${animeName}`);
            if (!response.ok) {
                throw new Error('Something Went Wrong');
            }
            const data = await response.json();
            // console.log(data);
            const transformedData = data.results.map(animeData => {
                return {
                    id: animeData.mal_id,
                    image_url: animeData.image_url,
                    title: animeData.title,
                }
            })
            setAnimeData(transformedData);
        } catch (e) {
            console.log(e);
        }
    }, [animeName]);

    useEffect(() => {
        fetchSearchAnime();
    }, [fetchSearchAnime]);

    return (
        <div>
            <div className="text-center">
                <form onSubmit={SearchAnimeFormHandler}>
                    <div className="text-center">
                        <h1 className="text-danger">Search Anime</h1>
                    </div>
                    <div>
                        <input type="text" placeholder="Search Anime" onChange={SearchAnimeHandler} />
                    </div>
                </form>
            </div>
            <div className="mt-5">
                <div >
                    <SearchAnimeCard anime={animeData} />
                </div>
            </div>
        </div>

    )
};
export default AnimePage;