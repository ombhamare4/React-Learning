import './LatestAnime.css'
// import TopAnimeCard from '../TopAiringAnime/TopAnimeCard'
import LatestAnimeCard from './LatestAnimeCard'
const LatestAnime = props => {
    return (
        <div>
            <p>2021 Fall Anime</p>
        <div className="wrapper">
            {props.anime.map((anime) => (
                <LatestAnimeCard className="text-center"
                    key={anime.id}
                    title={anime.title}
                    image={anime.image}
                />
            ))}
        </div>
        </div>
    )
};

export default LatestAnime;