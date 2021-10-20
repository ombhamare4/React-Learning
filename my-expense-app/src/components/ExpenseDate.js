
 function ExpenseDate(props) {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <>
            <div className="bg-warning fw-bold py-1 px-3 rounded text-center text-dark border border-2 border-white">
                {/* {props.date.toISOString()} */}
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
        </>
    )
};

export default ExpenseDate;