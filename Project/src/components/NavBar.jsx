import { useState } from "react";
import "../css/Nav.css"
import { Link } from "react-router-dom";

function NavBar({ onSend, onLogout }) {

    const [searchText , setSearchText] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();

        if(!searchText.trim()) return

        onSend(searchText)
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                <div className="container p-1">
                    <Link className="navbar-brand" to="/"><b><span style={{"color": "white"}}>Movies </span><i style={{ "backgroundColor" : "orange", "padding": "5px", "borderRadius" : "10px"}}>Hub</i></b></Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="bi bi-three-dots" style={{"color":"white"}}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link onClick={()=>onSend("")} className="nav-link active text-light nav-zoom" to="/HomePage" aria-current="page">
                                    Home <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light nav-zoom" to="/HomePage/Favorites">Favorites</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-light nav-zoom" onClick={onLogout}>Logout</button>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-light nav-zoom"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownId" style={{"overflow" : "hidden"}}>
                                    <a className="dropdown-item nav-zoom" href="#">Action 1</a>
                                    <a className="dropdown-item nav-zoom" href="#">Action 2</a>
                                </div>
                            </li> */}
                        </ul>
                        <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                            />
                            <button
                                className="btn btn-outline-light my-2 my-sm-0 bi bi-search"
                                type="submit"
                                style={{"border": "none"}}
                            >
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;