import React from 'react';
import {Image, NavLink, Button} from "./indexElements";

const Home = () => {
    return (
        <div>
            <Image>
                <img src={require("./img/moviePoster2.png")} alt="logo" width={400} height={600}/>
            </Image>
        </div>
    );
};

export default Home;