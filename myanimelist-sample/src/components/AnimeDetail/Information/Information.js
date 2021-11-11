const Information = (props) => {
    return (
        <div>
            <div class="mt-3 text-white">
                <p class="border-bottom border-danger">Information</p>
                <p><span class="text-danger">Type</span>: {props.type}</p>
                <p><span class="text-danger">Episodes</span>: {props.episodes}</p>
                <p><span class="text-danger">Status</span>: {props.status}</p>
                <p><span class="text-danger">Premiered</span>: {props.premiered}</p>
                <p><span class="text-danger">Duration</span>: {props.duration}</p>
            </div>
        </div>
    )
};

export default Information;