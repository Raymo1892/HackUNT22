import React from 'react';
import {Image, Button} from "./indexElements";
import {Link, useNavigate} from 'react-router-dom';
import { View } from "react-native";
import Box from '@material-ui/core/Box';




const Home = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `./about`; 
      navigate(path);
    };

    
    return (
        <div>
            <Image> 
                <img src={require("./img/moviePoster1.png")} alt="logo" width={400} height={600}/>
            </Image>
            <div>
                <h1>The Spongebob Movie Sponge on the Run</h1>
            </div>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Image>
                <img src={require("./img/moviePoster2.png")} alt="logo" width={400} height={600}/>
            </Image>
            <h1>Uncharted</h1>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <View style={{ flexDirection:"row", padding: 100 }}>
            <Image>
                <img src={require("./img/moviePoster3.png")} alt="logo" width={400} height={600}/>
            </Image>
            <View style={{ flexDirection:"column", padding: 45 }}>
            <h1>The Secrets of Dumbledore Return of the Magic</h1> 
            <div style={{ marginLeft: '0%', marginTop: '20px', width: '30%', fontSize: 20 }}>
                <Box color="black">
                <b>Description:</b> Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, 
                he entrusts magizoologist Newt Scamander to lead an intrepid  of wizards and witches. They soon encounter an array of old and new beasts as they clash with 
                Grindelwald's growing legion of followers.
                </Box>
            </div>
            
            <View style={{ flexDirection:"row" }}>
            <Button onClick={routeChange}>
                    1:45 PM
            </Button>
            <Button>
                <Link to="/movie1">
                    4:30 PM
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    8:15 PM
                </Link>
            </Button>
            </View>
            <View style={{ flexDirection:"row" }}>
            <Button>
                <Link to="/movie1">
                    2:00 PM
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    3:50 PM
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    9:30 PM
                </Link>
            </Button>
            </View>
            </View>
            </View>
            <Image>
                <img src={require("./img/moviePoster4.png")} alt="logo" width={400} height={600}/>
            </Image>
            <h1>The Curse of La LLorona</h1>
            <Button>
                <Link to="/movie1desc">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
            <Button>
                <Link to="/movie1">
                    Tickets
                </Link>
            </Button>
        </div>
    );
};

export default Home;

