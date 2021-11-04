import React, { useState } from 'react'
import TopAnimeCard from './TopAnimeCard';

const TopAiringAnime = props => {

    const [TopAnime,setTopAnime] = useState([]);

    async function fetchTopAnimeHandles() {
        const response = await fetch("https://api.jikan.moe/v3/top/anime");
        const data = await response.json();
        // console.log(data);
        const transformTopAnime = data.top.map(TopAnimeData=>{
            return{
                id:TopAnimeData.mal_id,
                image:TopAnimeData.image_url,
                title:TopAnimeData.title,
            }
        });
        // console.log(transformTopAnime);
        setTopAnime(transformTopAnime);
    };

    fetchTopAnimeHandles()

    return (
        <>
            {/* <button onClick={fetchTopAnimeHandles}>Load Anime</button> */}
            <TopAnimeCard topAnime={TopAnime}/>
        </>
    )
};

export default TopAiringAnime;