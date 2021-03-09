import React from "react";
import {gql} from 'apollo-boost';
import { useQuery } from "@apollo/react-hooks";
import styled from 'styled-components';
import Movie from '../components/Movie'
// import {useEffect }  from 'react';
// import {useParams} from 'react-router-dom';

const GET_MOVIES = gql`
        query{
                movies{
                    id
                    medium_cover_image
                    title
            }
        }
    
`

const Home =()=>{
    const {loading, data} = useQuery(GET_MOVIES);
    console.log(loading, data)
    return (
        <MovieContainer>
            <Header >
                <Title>
                    Apollo Test Movie!
                </Title>

                <SubTitle>
                    It's for Testing GraphQL
                </SubTitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            <MovieSection>
                {!loading && data.movies && data.movies.map(m => <Movie key ={m.id} id ={m.id} bg = {m.medium_cover_image} title={m.title}/>)}
            </MovieSection>


        </MovieContainer>
    )
}

const Loading = styled.div`
    color: gray;
    margin-top: 1vh;
`
const MovieSection = styled.section`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    font-size: 3rem;
    margin: 10vh 0 0 0 ;

`

const SubTitle = styled.h3`
    color: gray;
    margin: 2vh 0 10vh 0;
        font-size: 1.5rem;
`

const Header = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width : 100%;
    background-color: pink;
    

`


const MovieContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width : 100vw;
    height: 100vh;

`

export default Home;