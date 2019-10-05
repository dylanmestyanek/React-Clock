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
    background: red;
    z-index: 2;
    height: 18%;
    left: 49.75%;
    position: absolute;
    top: 30.25%;
    transform-origin: 50% 100%;
    width: 8px;
    animation: rotate 4s;

    @keyframes rotate {
        100% {
            transform: rotateZ(180deg)
        }
    }
`;