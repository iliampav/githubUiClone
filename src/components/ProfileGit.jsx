import React, {useEffect, useState} from 'react';
import { 
    Container, 
    ProfileImg, 
    ProfileName,
    ProfileNickName,
    StatusLinks, 
    ProfileLocation 
} from '../styles/profileGit';

import { BiBuildings, BiLink } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go'

function bioTrue({bio}) {
    if(bio !== null) {
        return <p id="bio" className="autoPadding">{bio}</p>      
    }
}

export function ProfileGit({userName}) {
    
    const [repositories, setRepositories] = useState([]);
    //load from api

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => {
            setRepositories(data)
        })
    }, []);

    return (
        <Container>
            <ProfileImg src={repositories.avatar_url}/>
            <ProfileName>{repositories.name}</ProfileName>
            <ProfileNickName>{repositories.login}</ProfileNickName>
            <div className="autoPadding">
                <button className="btn"> Follow </button>
            </div>
            {bioTrue(repositories)}            
            <StatusLinks className="autoPadding">
                <a className="mainCss" href={`https://github.com/${userName}tab=followers`}>
                    <BsPeople />
                    <span>{repositories.followers}</span>
                    <p>followers</p>
                </a>
                <p className="hide">·</p>
                <a className="mainCss hide_space" href={`https://github.com/${userName}tab=following`}>
                    <span>{repositories.following}</span>
                    <p> following </p>
                </a>
            </StatusLinks>
            <ProfileLocation>
                <div className="mainCss">
                    <BiBuildings />
                    <span>{repositories.company}</span>
                </div>
                <div className="mainCss">
                    <GoLocation />
                    <span>{repositories.location}</span>
                </div>
                <a className="mainCss" href={repositories.blog}>
                    <BiLink />
                    <span>{repositories.blog}</span>
                </a>
            </ProfileLocation>
        </Container>)
}