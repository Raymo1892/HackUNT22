import React from 'react';
import {Image, Button} from "./indexElements";

const Home = () => {
    return (
        <div>
            <div>
                <Image>
                    <img src={require("./img/moviePoster1.png")} alt="logo" width={400} height={600}/>
                </Image>
            </div>
            <Button>
                7:30
            </Button>
        </div>
    );
};

export default Home;