const RenderList = (props) => {

    // const month1 = props.start.toLocaleString('en-US', { month: 'long' });
    // const day1 = props.start.toLocaleString('en-US', { day: '2-digit' });
    // const year1 = props.start.getFullYear();

    return(
        <div className="w-50 container mt-2">
        <div className="bg-white shadow p-2 border border-primary rounded d-flex flex-wrap justify-content-between">
            <p>{props.name}</p>
            {/* <div className="bg-success p-2 rounded d-flex">
                <p>{props.start.toLocaleString('en-US', { month: 'long' })}</p>
                <p>{props.start.toLocaleString('en-US', { day: '2-digit' })}</p>
                <p>{props.start.getFullYear()}</p>
            </div>
            <div className="bg-danger p-2 rounded d-flex">
                <p>{props.end.toLocaleString('en-US', { month: 'long' })}</p>
                <p>{props.end.toLocaleString('en-US', { day: '2-digit' })}</p>
                <p>{props.end.getFullYear()}</p>
            </div> */}
            {/* <p>{props.end}</p> */}
            <input className="form-check-input" type="checkbox" value="Completed"></input>
        </div>
    </div>
    )
}

export default RenderList;