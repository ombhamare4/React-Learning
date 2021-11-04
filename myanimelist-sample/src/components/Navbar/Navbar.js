const Navbar = props => {
    return (

        <div className="bg-danger p-2 d-flex justify-content-between">
            <div className="d-flex center">
                <a className="text-decoration-none text-white mx-2" href="/">Anime</a>
                <a className="text-decoration-none text-white mx-2" href="/">Manga</a>
                <a className="text-decoration-none text-white mx-2" href="/">Community</a>
                <a className="text-decoration-none text-white mx-2" href="/">Industry</a>
                <a className="text-decoration-none text-white mx-2" href="/">Watch</a>
                <a className="text-decoration-none text-white mx-2" href="/">Read</a>
                <a className="text-decoration-none text-white mx-2" href="/">Help</a>
            </div>
            <div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class ="btn btn-outline-success" type ="submit">Search</button>
                </form>
            </div>

        </div>

    )
};

export default Navbar;