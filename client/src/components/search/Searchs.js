import './Searchs.scss';
import ControlledCarousel from "./hashtag";
import Search2 from './searchbar';

function Search() {
    return (

    <header className="body">

        <nav className="recherche">
            <div className="Navsearch">

                <a className="logo" href="#" target="" rel="">
                    <img src="assets/img_header/Project_title_picture.png" alt="Logo CodingTube" class="icon_title" width="100" />  
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

                <ControlledCarousel />
            </div>
        </nav>

    </header>
    );
}

export default Search;
