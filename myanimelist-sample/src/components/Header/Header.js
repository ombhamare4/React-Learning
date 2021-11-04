import './Header.css'

const Header = props => {
    return (
        <div>
            <nav className="bg-light p-2 d-flex justify-content-between">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 align-middle">My Anime List</span>
                </div>
                <div className="d-flex me-5">
                    <button type="button" className="btn btn-danger mx-2 btn-sm">Hide Ads</button>
                    <i className="bi bi-list  mx-2 center"></i>
                </div>
            </nav>

        </div>
    )
};

export default Header;