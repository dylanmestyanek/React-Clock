import React from "react"
import styled from "styled-components";


const Hours = () => {
    return (
        <HoursHand>

        </HoursHand>
    )
}

export default Hours;

const HoursHand = styled.div`
    background: #000;
    height: 10%;
    left: 49.65%;
    position: absolute;
    top: 38%;
    transform-origin: 50% 100%;
    width: 10px;
    // animation: rotate 4s;

    @keyframes rotate {
        100% {
            transform: rotateZ(180deg)
        }
    }
`;