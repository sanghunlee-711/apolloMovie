import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Movie = ({id, bg, title}) =>{
    return(
            <Wrapper>
                <Link to ={`/${id}`}>
                    <Poster bg ={bg} />
                </Link>
                <Title>
                    {title}
                </Title>
            </Wrapper>
    )
}


const Wrapper = styled.section`
    width: 400px;
    height: 400px;
    margin: 3vh;
    a{
        color: red;
        font-size: 3rem;
    }
`
const Title = styled.p`
    color: gray;
    margin: 1vh;
    font-size: 1.5rem;
`

const Poster = styled.div`
    background-image: url(${props => props.bg});
    width: 100%;
    height: 100%;

`;





export default Movie;