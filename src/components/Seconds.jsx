import React from "react"
import styled from "styled-components";


const Seconds = () => {
    return (
        <SecondsHands>

        </SecondsHands>
    )
}

export default Seconds;

const SecondsHands = styled.div`
    background: white;
    z-index: 4;
    height: 18%;
    left: 49.9%;
    position: absolute;
    top: 30%;
    transform-origin: 50% 100%;
    width: 2px;
    animation: rotate 4s;

    @keyframes rotate {
        100% {
            transform: rotateZ(180deg)
        }
    }
`;