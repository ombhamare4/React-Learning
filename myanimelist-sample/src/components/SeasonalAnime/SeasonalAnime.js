import { useState, useEffect, useCallback } from 'react';



import './SeasonalAnime.css';
import CardList from '../Cards/CardList'
const SeasonalAnime = () => {

    const [seasonnalAnime, setSeasonalAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    // const URL = 'https://api.jikan.moe/v3/season/2021/fall';

    const fetchTopAnime = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.jikan.moe/v3/season/2021/fall`);
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const tranformAnime = data.anime.map(animeData => {
                return {
                    id: animeData.mal_id,
                    title: animeData.title,
                    image_url: animeData.image_url,
                    synopsis: animeData.synopsis,
                }
            });
            setSeasonalAnime(tranformAnime);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchTopAnime();
    }, [fetchTopAnime]);

    return (
        <>
            {!isLoading &&
                <div>
                    <div className=" ">
                        <div className="head mx-2  ">
                            <p className="text-white  ">Fall 2021 Anime</p>
                            <button type="button" class="btn btn-danger">View More</button>
                        </div>
                        <div className="scrollmenu">
                            <CardList anime={seasonnalAnime} />
                        </div>
                    </div>
                </div>
            }
            {isLoading &&
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }

        </>

    )
};

export default SeasonalAnime;