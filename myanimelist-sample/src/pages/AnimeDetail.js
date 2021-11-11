import TitleHead from '../components/AnimeDetail/TitleHead/TitleHead';
import AnimeImage from '../components/AnimeDetail/ImageCard/AnimeImage';
import AlternativeTitles from '../components/AnimeDetail/AlternativeTitles/AlternativeTitles';
import Information from '../components/AnimeDetail/Information/Information';
import AnimeHeadData from '../components/AnimeDetail/AnimeHeadData/AnimeHeadData';
import Synopsis from '../components/AnimeDetail/Synopsis/Synopsis';



import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react';
const AnimeDetail = (props) => {

    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { animeId } = useParams();
    const fetchAnimeData = useCallback(async () => {
        try {
            const response = await fetch(`https://api.jikan.moe/v3/anime/${animeId}`);
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const trasnformAnimeData = [data].map(animeData => {
                return {
                    id: animeData.mal_id,
                    url: animeData.url,
                    image_url: animeData.image_url,
                    trailer_url: animeData.trailer_url,
                    title: animeData.title,
                    title_english: animeData.title_english,
                    title_japanese: animeData.title_japanese,
                    title_synonyms: animeData.title_synonyms,
                    type: animeData.type,
                    source: animeData.source,
                    episodes: animeData.episodes,
                    status: animeData.status,
                    airing: animeData.airing,
                    //Aired data  remaining               
                    duration: animeData.duration,
                    rating: animeData.rating,
                    score: animeData.score,
                    scored_by: animeData.scored_by,
                    rank: animeData.rank,
                    popularity: animeData.popularity,
                    members: animeData.members,
                    favorites: animeData.favorites,
                    synopsis: animeData.synopsis,
                    premiered: animeData.premiered,
                }
            });
            // console.log(data)
            setAnime(trasnformAnimeData);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);

    }, [animeId]);

    useEffect(() => {
        fetchAnimeData();
    }, [fetchAnimeData])

    return (
        <div>
            {!isLoading &&
                <div>
                    {
                        anime.map((data) => (
                            <div>
                                <TitleHead title={data.title} title_english={data.title_english} />
                                <div className="row">
                                    <div className="p-3 col-3" style={{ fontsize: "14px" }}>
                                        <AnimeImage image={data.image_url} />
                                        <AlternativeTitles title_english={data.title_english} title_japanese={data.title_japanese} title_synonyms={data.title_synonyms} />
                                        <Information type={data.type} episodes={data.episodes} status={data.status} premiered={data.premiered} duration={data.duration} />
                                    </div>
                                    <div className="col-9">
                                        <AnimeHeadData
                                            score={data.score}
                                            rank={data.rank}
                                            popularity={data.popularity}
                                            members={data.members}
                                            scored_by={data.scored_by}
                                            trailer_url={data.trailer_url} />
                                        <Synopsis
                                            synopsis={data.synopsis}
                                        />
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            }
            {isLoading &&
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
        </div>





    )
};

export default AnimeDetail;