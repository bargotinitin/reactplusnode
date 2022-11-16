import React from 'react'
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: ${props => props.newclass ? '30px' : '10px'};

`;

// Use Title and Wrapper like any other React component – except they're styled!

function StyledComp() {
  const myclass = true
  return (
    <>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      <Button newclass={myclass}>Normal</Button>
      <Button primary>Primary</Button>
      </Wrapper>
    </>
  );
}

export default StyledComp
