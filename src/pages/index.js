import React from 'react';
import {Image, Button, NavLink} from "./indexElements";

const Home = () => {
    return (
        <div>
            <Image>
                <img src={require("./img/moviePoster1.png")} alt="logo" width={400} height={600}/>
            </Image>
            <Button>
                Tickets
            </Button>
            <NavLink to="/movie2" activeStyle>
                <Image>
                    <img src={require("./img/moviePoster2.png")} alt="logo" width={400} height={600}/>
                </Image>
            </NavLink>
            <Button>
                Tickets
            </Button>
            <NavLink to="/movie3" activeStyle>
                <Image>
                    <img src={require("./img/moviePoster3.png")} alt="logo" width={400} height={600}/>
                </Image>
            </NavLink>
            <Button>
                Tickets
            </Button>
            <NavLink to="/movie4" activeStyle>
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