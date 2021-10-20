import React from 'react';
import './GoalList.css'
import RenderList from './RenderList'
const GoalList = (props) => {
    return (


        <ul className="mt-5">
            {props.task.map(task => (
                <RenderList key={task.id} name={task.name} start={task.start} end={task.end} complete={task.complete} />
            ))}
        </ul>

    )
};

export default GoalList;