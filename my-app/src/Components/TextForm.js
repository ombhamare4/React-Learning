import React from 'react'
// import PropTypes from 'prop-types'


export default class Textform extends React.Component {
    render() {
        return (
                        <>
            <div className="container mt-5">
                <div className="mb-3">
                    <h1 className="text-center">{this.props.heading}</h1>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-primary">Enter Text Here</label>
                    <textarea className="form-control border border-primary mb-5" id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary">Convert To Uppercase</button>
                </div>
            </div>
        </>
        )
    }
}

// export default function TextForm(props) {
//     return (
//         <>
//             <div className="container mt-5">
//                 <div class="mb-3">
//                     <h1 className="text-center">{props.heading}</h1>
//                     <label for="exampleFormControlTextarea1" className="form-label text-primary">Enter Text Here</label>
//                     <textarea className="form-control border border-primary mb-5" id="exampleFormControlTextarea1" rows="8"></textarea>
//                     <button className="btn btn-primary">Convert To Uppercase</button>
//                 </div>
//             </div>
            
//         </>

//     )
// }
