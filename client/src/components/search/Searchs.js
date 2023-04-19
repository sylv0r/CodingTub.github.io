import { useState } from "react";
import './Searchs.scss';
import ControlledCarousel from "./hashtag";
import Search2 from './searchbar';
import Hashtag from "./hashtag";
import Filtre from './dropbutton/dropbutton';
//import './Header.scss';

function Search() {

    const data = [/*{chaine}, {profil}, {hashtag}, {video},*/"Chocolat", "Chien", "chat", "Café", "Cafeine"];

    const [value, setvalue] = useState("");

    function handleChange (event) {
        setvalue(event.target.value)
    }

    const url = process.env.REACT_APP_NGINX_LINK;

    return (

    <header className="body">

        <nav className="recherche">
            <div className="Navsearch">

                <a className="logo" href="/" target="" rel="">
                    <img src={url + 'logo/logo_codingtub.png'} alt="Logo CodingTube" className="icon_title" width="100" />
                </a>

                <div className="search" action="submit">
                    <Search2/>
                </div>

                <div className="connect">

                    <a className="not"href="" target="" rel="">
                        <i class="fa-solid fa-bell fa-2x"></i>
                    </a>
                    
                    <a className="pp" href="/connexion" target="" rel="">
                        <i class="fa-solid fa-user fa-2x"></i>
                    </a>
                </div>
                
            </div>

            <div className="Navid">
                {Hashtag}

                <ControlledCarousel />
            </div>
            <div className="dropbutton">
                <Filtre/>
            </div>
            
            
        </nav>

    </header>
    );
}

export default Search;
