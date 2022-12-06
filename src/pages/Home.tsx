import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--urban);
`;

const Hello = styled.p`
    font-size: 5rem;
`;

const Title = styled.p`
    font-size: 2rem;
`;

const Motivation = styled.p`
    font-size: 3 rem;
`;

const Home = () => {
    return (
        <div id='home' className='page-container'>
            <Navbar />

            <TextWrapper>
                <Hello>hello</Hello>
                <Title>I'm a frontend developer</Title>
                <Motivation>
                    passionate and motivated by the impact of my code
                </Motivation>
            </TextWrapper>
        </div>
    );
};

export default Home;
