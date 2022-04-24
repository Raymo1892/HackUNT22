import React from 'react';
import {Image, Button} from "./indexElements";
import {useNavigate} from 'react-router-dom';
import {View} from "react-native";
import Box from '@material-ui/core/Box';




const Home = () => {

    let navigate = useNavigate();

    const movie11 = async () => {
        navigate('/movie1-1');
    };

    const movie12 = async () => {
        navigate('/movie1-2');
    };

    const movie13 = async () => {
        navigate('/movie1-3');
    };

    const movie14 = async () => {
        navigate('/movie1-4');
    };

    const movie15 = async () => {
        navigate('/movie1-5');
    };

    const movie16 = async () => {
        navigate('/movie1-6');
    };

    const movie21 = async () => {
        navigate('/movie2-1');
    };

    const movie22 = async () => {
        navigate('/movie2-2');
    };

    const movie23 = async () => {
        navigate('/movie2-3');
    };

    const movie24 = async () => {
        navigate('/movie2-4');
    };

    const movie25 = async () => {
        navigate('/movie2-5');
    };

    const movie26 = async () => {
        navigate('/movie2-6');
    };

    const movie31 = async () => {
        navigate('/movie3-1');
    };

    const movie32 = async () => {
        navigate('/movie3-2');
    };

    const movie33 = async () => {
        navigate('/movie3-3');
    };

    const movie34 = async () => {
        navigate('/movie3-4');
    };

    const movie35 = async () => {
        navigate('/movie3-5');
    };

    const movie36 = async () => {
        navigate('/movie3-6');
    };

    const movie41 = async () => {
        navigate('/movie4-1');
    };

    const movie42 = async () => {
        navigate('/movie4-2');
    };

    const movie43 = async () => {
        navigate('/movie4-3');
    };

    const movie44 = async () => {
        navigate('/movie4-4');
    };

    const movie45 = async () => {
        navigate('/movie4-5');
    };

    const movie46 = async () => {
        navigate('/movie4-6');
    };
    
    return (
        <div>
            <View style={{ flexDirection:"row", padding: 100 }}>
            <Image>
                <img src={require("./img/moviePoster1.png")} alt="logo" width={400} height={600}/>
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
            <Button onClick={movie11}>
                    1:45 PM
            </Button>
            <Button onClick={movie12}>
                    1:45 PM
            </Button>
            <Button onClick={movie13}>
                    1:45 PM
            </Button>
            </View>
            <View style={{ flexDirection:"row" }}>
            <Button onClick={movie14}>
                    1:45 PM
            </Button>
            <Button onClick={movie15}>
                    1:45 PM
            </Button>
            <Button onClick={movie16}>
                    1:45 PM
            </Button>
            </View>
            </View>
            </View>
                        <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
                }}/>
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
            <Button onClick={movie21}>
                    1:45 PM
            </Button>
            <Button onClick={movie22}>
                    1:45 PM
            </Button>
            <Button onClick={movie23}>
                    1:45 PM
            </Button>
            </View>
            <View style={{ flexDirection:"row" }}>
            <Button onClick={movie24}>
                    1:45 PM
            </Button>
            <Button onClick={movie25}>
                    1:45 PM
            </Button>
            <Button onClick={movie26}>
                    1:45 PM
            </Button>
            </View>
            </View>
            </View>
                        <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
                }}/>

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
            <Button onClick={movie31}>
                    1:45 PM
            </Button>
            <Button onClick={movie32}>
                    1:45 PM
            </Button>
            <Button onClick={movie33}>
                    1:45 PM
            </Button>
            </View>
            <View style={{ flexDirection:"row" }}>
            <Button onClick={movie34}>
                    1:45 PM
            </Button>
            <Button onClick={movie35}>
                    1:45 PM
            </Button>
            <Button onClick={movie36}>
                    1:45 PM
            </Button>
            </View>
            </View>
            </View>
                        <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
                }}/>
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
            <Button onClick={movie41}>
                    1:45 PM
            </Button>
            <Button onClick={movie42}>
                    1:45 PM
            </Button>
            <Button onClick={movie43}>
                    1:45 PM
            </Button>
            </View>
            <View style={{ flexDirection:"row" }}>
            <Button onClick={movie44}>
                    1:45 PM
            </Button>
            <Button onClick={movie45}>
                    1:45 PM
            </Button>
            <Button onClick={movie46}>
                    1:45 PM
            </Button>
            </View>
            </View>
            </View>
                        <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
                }}/>
        </div>
    );
};

export default Home;

