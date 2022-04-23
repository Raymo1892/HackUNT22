import React from 'react';
import {Image, NavLink, Button} from "./indexElements";

const Home = () => {
    return (
        <div>
            <NavLink to="/contact" activeStyle>
                <Image>
                    <img src={require("./img/moviePoster1.png")} alt="logo" width={400} height={600}/>
                </Image>
            </NavLink>
            <Button>
                Tickets
            </Button>
            <NavLink to="/contact" activeStyle>
                <Image>
                    <img src={require("./img/moviePoster2.png")} alt="logo" width={400} height={600}/>
                </Image>
            </NavLink>
            <Button>
                Tickets
            </Button>
            <NavLink to="/contact" activeStyle>
                <Image>
                    <img src={require("./img/moviePoster3.png")} alt="logo" width={400} height={600}/>
                </Image>
            </NavLink>
            <Button>
                Tickets
            </Button>
            <NavLink to="/contact" activeStyle>
                <Image>
                    <img src={require("./img/moviePoster4.png")} alt="logo" width={400} height={600}/>
                </Image>
            </NavLink>
            <Button>
                Tickets
            </Button>
        </div>
    );
};

export default Home;