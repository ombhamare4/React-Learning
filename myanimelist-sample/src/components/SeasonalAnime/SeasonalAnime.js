
import './SeasonalAnime.css';
import Card from '../Cards/Card'
const SeasonalAnime = ()=>{

    const URL = 'https://api.jikan.moe/v3/season/2021/fall';

    return(
        <div>
            <div className="head mx-2">
                <p className="text-white">Fall 2021 Anime</p>
                <button type="button" class="btn btn-danger">View More</button>
            </div>
            <div className="scrollmenu ">
                <Card/>
            </div>
        </div>
    )
};

export default SeasonalAnime;