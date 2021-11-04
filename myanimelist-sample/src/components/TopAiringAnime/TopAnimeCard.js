import AnimeCard from './AnimeCard'

const TopAnimeCard = props => {


    return (
        <>
            {props.topAnime.slice(0, 3).map((anime) => (
                <AnimeCard
                    key={anime.id}
                    title={anime.title}
                    image={anime.image}
                />
            ))};

        </>
    );
}

export default TopAnimeCard;