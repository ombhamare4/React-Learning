const AlternativeTitles = (props)=>{
    return(
        <div class="mt-3 text-white">
                <p class="border-bottom border-danger">Alternative Titles</p>
                <p><span class="text-danger">English</span>: {props.title_english}</p>
                <p><span class="text-danger">Synonyms</span>: {props.title_synonyms}</p>
                <p><span class="text-danger">Japanese</span>: {props.title_japanese}</p>
            </div>
    )
};
export default AlternativeTitles;