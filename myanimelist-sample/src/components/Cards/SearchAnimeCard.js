import Card from './Card';
const SearchAnimeCard = (props) => {
    return (
        <>
            <ul className="d-flex flex-wrap justify-content-evenly mx-5">
                {props.anime.slice(0, 15).map((anime) => (
                    <Card
                        key={anime.id}
                        id={anime.id}
                        title={anime.title}
                        image_url={anime.image_url}
                    />
                ))};
            </ul>
        </>
    )
};

export default SearchAnimeCard;