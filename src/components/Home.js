import React from 'react'
import img from '../Images/CoffeeBackground.jpg';
import styled from 'styled-components'

const ImageBackground = styled.div`
    vertical-align: top;
    display: block;
    width: 100vw;
`
const Home = () => {
    return (
        <ImageBackground>
            <h1>Welcome</h1>
            <img src={img} alt="coffee-img" style={{width: '100vw', height:'100vh'}}/>
        </ImageBackground>
    )
}

export default Home
