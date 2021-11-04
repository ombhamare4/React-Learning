import './LatestAnime.css'
const LatestAnimeCard = props => {
    const style = {
        width: 100,
        // hight: 40
    };
  
    return (
        <>
            {/* <img src={props.image} alt="latest" />
            <p>{props.title}</p> */}
            <div class="mx-1 text-center" >
                <img src={props.image} class="card-img-top" style={style} alt="..." />
                <div class="text-ellipsis">
                    {props.title}
                </div>
            </div>
        </>
    )
};

export default LatestAnimeCard;