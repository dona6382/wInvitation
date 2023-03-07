import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

function Home() {
    return (
        <Container>
            <Title>Our Wedding Invitation</Title>
            <Subtitle>You are cordially invited to our wedding</Subtitle>
        </Container>
    );
}

export default Home;
