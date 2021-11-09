import Card from '../Cards/Card'
const CardList = (props) => {
    return (
        <>
            <ul>
                {props.anime.slice(0,15).map((anime) => (
                    <Card
                        key={anime.id}
                        title={anime.title}
                        image_url={anime.image_url}
                    />
                ))};
            </ul>
        </>
    )
};

export default CardList;