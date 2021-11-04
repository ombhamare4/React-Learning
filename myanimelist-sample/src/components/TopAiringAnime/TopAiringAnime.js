import React from 'react'
import TopAnimeCard from './TopAnimeCard';

const TopAiringAnime = props => {
    return (
        <>{props.anime.slice(0, 3).map((anime) => (
            <TopAnimeCard className="text-center"
                key={anime.id}
                title={anime.title}
                image={anime.image}
            />
        ))};
        </>
    )
};

export default TopAiringAnime;