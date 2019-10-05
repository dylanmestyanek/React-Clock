import React from "react"
import styled from "styled-components";


const Minutes = () => {
    return (
        <MinutesHand>

        </MinutesHand>
    )
}

export default Minutes;

const MinutesHand = styled.div`
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