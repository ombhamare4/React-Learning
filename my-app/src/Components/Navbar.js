import React from 'react'
// import PropTypes from 'prop-types'


// Class Base Component
class Nabar extends React.Component {
  constructor(props){
    super(props);
    let firstName = this.props.title.split(' ')[0];

    this.state = {
      title: firstName
    }
  }
  render() {
    return (
      <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">{this.state.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">About</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  </>
  )
  }
}
 export default Nabar


//Functional Base Component
// export default function Navbar(props) {

//   constructor(props){
//     super(props);
//     let firstName = this.props.title.split(' ')[0];

//     this.state = {
//       title: firstName
//     }
//   }
//     return (
//         <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-dark  shadow-sm">
//         <div className="container-fluid">
//           <a className="navbar-brand text-white" href="/">{props.title}</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active text-white " aria-current="page" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white " href="/">About</a>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>

//     </>
//     )
// }

// Navbar.prototype = {title: PropTypes.string};

// Navbar.defaultProps = {title: "Hi! There "};