import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { gql } from "apollo-boost";
// import { useMutation } from '@apollo/react-hooks';
import {useMutation} from '@apollo/client';


const LIKE_MOVIE = gql`
    mutation likeMoive($id: Int!){
        likeMoive(id:$id) @client
        # client에서의 처리이므로 위와같이 @client를 붙여줘야함 안그러면 백엔드 mutation찾게됨
    }
`

const Movie = ({id, bg, title, isLiked}) =>{
    const [likeMoive] = useMutation(LIKE_MOVIE, {variables: {id: parseInt(id)}});

    return(
            <Wrapper>
                <Link to ={`/${id}`}>
                    <Poster bg ={bg} />
                </Link>
                <Title>
                    {title} 
                    <button onClick={likeMoive}>{isLiked ? "Unlike" : "Like"}</button>
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
    display: flex;
    justify-content: space-between;
`

const Poster = styled.div`
    background-image: url(${props => props.bg});
    width: 100%;
    height: 100%;

`;





export default Movie;