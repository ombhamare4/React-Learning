import React from 'react'
import PropTypes from 'prop-types'

export default class Information extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.user.Username
        };

    }

    changeName() {
        // this.name = "Om Rubiks 14"
        this.setState({ name: this.state.name = "Bhamare Om" });
        console.log(this.name);
    }
    render() {
        return (
            <>
                <div className="container text-center">

                    <h1>My Information</h1>
                    <p className="display-1">Watashi no name <span className="text-danger">{this.state.name}</span></p>
                    <p>Hobbies</p>
                    <ul className="list-group">
                        {this.props.user.hobbies.map((hobby) =>
                            <li className="list-group-item">{hobby}</li>
                        )}
                    </ul>
                    <button onClick={this.changeName.bind(this)} className="btn btn-danger mt-2 mb-5">Change My Name</button>
                </div>
            </>
        )
    }
}

Information.propTypes = {
    Username: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string),
}