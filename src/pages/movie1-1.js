import React, { useState } from 'react';
import {Seats, Invisible} from "./indexElements";
import { View } from "react-native";
  

const Movie1 = () => {
    const [cls, setCls] = useState("green");

    return (
        <>
            <Invisible>Filler</Invisible>
            <hr style={{width:"50%", size:"5", color:"black", height:"50%"}}></hr>
            <Invisible>Filler</Invisible>
            <View style={{ flexDirection:"row"}}>
            <Invisible>Filler</Invisible>
            <style>{`
                .red {color: red}
                .green {color: green}
            `}</style>
            <Seats className={cls}onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}>1A</Seats>
            <Seats>2A</Seats>
            <Invisible>Filler</Invisible>
            <Seats>3A</Seats>
            <Seats>4A</Seats>
            <Seats>5A</Seats>
            <Seats>6A</Seats>
            </View>
            
            <View style={{ flexDirection:"row"}}>
            <Invisible>Filler</Invisible>
            <Seats>1B</Seats>
            <Seats>2B</Seats>
            <Invisible>Filler</Invisible>
            <Seats>3B</Seats>
            <Seats>4B</Seats>
            <Seats>5B</Seats>
            <Seats>6B</Seats>
            </View>

            <View style={{ flexDirection:"row"}}>
            <Invisible>Filler</Invisible>
            <Seats>1C</Seats>
            <Seats>2C</Seats>
            <Invisible>Filler</Invisible>
            <Seats>3C</Seats>
            <Seats>4C</Seats>
            <Seats>5C</Seats>
            <Seats>6C</Seats>
            </View>

            <View style={{ flexDirection:"row"}}>
            <Invisible>Filler</Invisible>
            <Seats>1D</Seats>
            <Seats>2D</Seats>
            <Invisible>Filler</Invisible>
            <Seats>3D</Seats>
            <Seats>4D</Seats>
            <Seats>5D</Seats>
            <Seats>6D</Seats>
            </View>

            <View style={{ flexDirection:"row"}}>
            <Invisible>Filler</Invisible>
            <Seats>1E</Seats>
            <Seats>2E</Seats>
            <Invisible>Filler</Invisible>
            <Seats>3E</Seats>
            <Seats>4E</Seats>
            <Seats>5E</Seats>
            <Seats>6E</Seats>
            </View>
        </>
    )
}

export default Movie1;