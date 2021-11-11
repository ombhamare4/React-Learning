import { useEffect, useCallback } from 'react';
import anime from 'animejs';
import './AnimeHeadData.css'

const AnimeHeadData = (props) => {

    // const score = props.score;
    
    // const ScoreAnime = () => anime({
    //     targets: '.ScoreAnimation',
    //     innerHTML: [0, props.score],
    //     easing: 'linear',
    //     round: 10 // Will round the animated value to 1 decimal
    // });

    const ScoreAnime = useCallback(
        () => anime({
            targets: '.ScoreAnimation',
            innerHTML: [0, props.score],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        }),
        [props.score]
    );
    // const ScoredByAnime; 
    // const ScoreByAnime = () => anime({
    //     targets: '.ScoreByAnimation',
    //     innerHTML: [0, props.scored_by],
    //     easing: 'linear',
    //     round: 10 // Will round the animated value to 1 decimal
    // });

    const ScoreByAnime = useCallback(
        () => anime({
            targets: '.ScoreByAnimation',
            innerHTML: [0, props.scored_by],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        }),
        [props.scored_by]
    );

    // const RankAnime; 
    // const RankAnime = () => anime({
    //     targets: '.RankAnimation',
    //     innerHTML: [0, props.rank],
    //     easing: 'linear',
    //     round: 10 // Will round the animated value to 1 decimal
    // });

    const RankAnime  = useCallback(
        () => anime({
            targets: '.RankAnimation',
            innerHTML: [0, props.rank],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        }),
        [props.rank]
    );

    // const PopularityAnime;
    // const PopularityAnime = () => anime({
    //     targets: '.PopularityAnimation',
    //     innerHTML: [0, props.popularity],
    //     easing: 'linear',
    //     round: 10 // Will round the animated value to 1 decimal
    // });

    const PopularityAnime  = useCallback(
        () => anime({
            targets: '.PopularityAnimation',
            innerHTML: [0, props.popularity],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        }),
        [props.popularity]
    );

    // const MemebersAnime;
    // const MemebersAnime = () => anime({
    //     targets: '.MembersAnimation',
    //     innerHTML: [0, props.members],
    //     easing: 'linear',
    //     round: 1 // Will round the animated value to 1 decimal
    // });

    const MemebersAnime = useCallback(
        () => anime({
            targets: '.MembersAnimation',
            innerHTML: [0, props.members],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
        }),
        [props.members]
    );

    useEffect(() => {
        ScoreAnime();
        ScoreByAnime();
        RankAnime();
        MemebersAnime();
        PopularityAnime();
    }, [ScoreAnime, ScoreByAnime, RankAnime, PopularityAnime, MemebersAnime]);

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <div className="d-flex text-white border-dark px-2 py-3">
                        <div className="text-center p-2 border-end">
                            <p className="fs-3">Score</p>
                            <p className="ScoreAnimation text-danger">{props.score}</p>
                            <p ><span className="ScoreByAnimation text-danger">{props.scored_by}</span> users</p>
                        </div>
                        <div className="p-2">
                            <ul className="d-flex flex-row fs-3">
                                <li className="me-3 text-center">
                                    <div>
                                        <p>Ranked</p>
                                        <p>#<span className="RankAnimation text-danger fs-4">{props.rank}</span></p>
                                    </div>
                                </li>
                                <li className="me-3 text-center">
                                    <div>
                                        <p>Popularity</p>
                                        <p>#<span className="PopularityAnimation text-danger fs-4">{props.popularity}</span></p>
                                    </div>
                                </li>
                                <li className="me-3 text-center ">
                                    <div>
                                        <p className="">Members</p>
                                        <p>#<span className="MembersAnimation text-danger fs-4">{props.members}</span></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="frame">
                        <iframe title="trailer"
                            src={props.trailer_url}>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AnimeHeadData;