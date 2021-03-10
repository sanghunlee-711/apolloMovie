import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import React from "react";
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

const GET_DETAIL = gql`
# query getMovie... 는 apollo를 위한 것
# apollo의 타입검사
    query getMovie($id: Int!){
        #아래의 query는 서버로 보내기 위한 것.
        movie(id:$id){
            id
            title
            medium_cover_image
            language
            description_intro
            isLiked @client
            
        }
    }
`


const Detail =()=>{
    const {id} = useParams();
    const {loading, data} = useQuery(GET_DETAIL,{variables:{id}});
    console.log(loading, data)
    return(
        <>
            {loading ? <Loading><p>Loading...</p></Loading>  : <Wrapper><ImageWrapper img = {data.movie.medium_cover_image}></ImageWrapper><TextWrapper><Title>{data.movie.title}{data.movie.isLiked ? "♥️" : "😭"}</Title><Description>{data.movie.description_intro}</Description><Language>Language : {data.movie.language}</Language></TextWrapper></Wrapper>}
        </>
    )
}

const Loading = styled.div`
    color: gray;
    margin: auto;
    font-size: 3rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

`
const Description = styled.p`
    color: gray;
    font-size: 1.2rem;
    width: 80%;
    margin-top: 1vh;
`

const Language = styled.p`
    font-size: 1.2rem;
    color: red;
`

const Title =styled.h1`
    color: black;
    font-size: 2rem;
`


const ImageWrapper = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${props=> props.img})
`

export default Detail