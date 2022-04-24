import React, { useState } from 'react';
import { Seats, Invisible } from "./indexElements";
import { View } from "react-native";


const Movie1 = () => {
    const [cls, setCls] = useState("green");

    return (
        <>
            <Invisible>Filler</Invisible>
            <hr style={{ width: "50%", size: "5", color: "black", height: "50%" }}></hr>
            <Invisible>Filler</Invisible>
            <View style={{ flexDirection: "row" }}>
                <Invisible>Filler</Invisible>
                <style>{`
                .red {background-color: red}
                .green {background-color: green}
            `}</style>
                <Seats className={cls} onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}>1A</Seats>
                <Seats className={cls} onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}>2A</Seats>
                <Invisible>Filler</Invisible>
                <Seats>3A</Seats>
                <Seats>4A</Seats>
                <Seats>5A</Seats>
                <Seats>6A</Seats>
            </View>

            <View style={{ flexDirection: "row" }}>
                <Invisible>Filler</Invisible>
                <Seats>B1</Seats>
                <Seats>B2</Seats>
                <Invisible>Filler</Invisible>
                <Seats>B3</Seats>
                <Seats>B4</Seats>
                <Seats>B5</Seats>
                <Seats>B6</Seats>
            </View>

            <View style={{ flexDirection: "row" }}>
                <Invisible>Filler</Invisible>
                <Seats>C1</Seats>
                <Seats>C2</Seats>
                <Invisible>Filler</Invisible>
                <Seats>C3</Seats>
                <Seats>C4</Seats>
                <Seats>C5</Seats>
                <Seats>C6</Seats>
            </View>

            <View style={{ flexDirection: "row" }}>
                <Invisible>Filler</Invisible>
                <Seats>D1</Seats>
                <Seats>D2</Seats>
                <Invisible>Filler</Invisible>
                <Seats>D3</Seats>
                <Seats>D4</Seats>
                <Seats>D5</Seats>
                <Seats>D6</Seats>
            </View>

            <View style={{ flexDirection: "row" }}>
                <Invisible>Filler</Invisible>
                <Seats>E1</Seats>
                <Seats>E2</Seats>
                <Invisible>Filler</Invisible>
                <Seats>E3</Seats>
                <Seats>E4</Seats>
                <Seats>E5</Seats>
                <Seats>E6</Seats>
            </View>
        </>
    )
}

export default Movie1;