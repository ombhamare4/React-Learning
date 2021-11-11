const TitleHead = (props) => {



    return (
        <div className=" bg-danger">
            <h4>{props.title}</h4>
            <h5>{props.title_english}</h5>
        </div>
    )
};

export default TitleHead;