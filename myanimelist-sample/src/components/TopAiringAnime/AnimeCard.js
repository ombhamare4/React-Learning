const AnimeCard = props => {
    const style = {
        width: 70,
        hight: 70
    };

    return (
        <>
            <div class="border rounded p-2 d-flex">
                <img src={props.image} class="card-img-top" style={style} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </>
    )
};

export default AnimeCard;