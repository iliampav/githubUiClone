import { BiStar, BiGitRepoForked } from 'react-icons/bi';
import { VscLaw } from 'react-icons/vsc';
import date from 'date-and-time';

import { Container } from '../styles/repositoryItem';

function forksTrue(props) {
    if(props.repository.forks > 0) {
        return (
            <>
                <div>
                    <a href={props.repository.forks_url}>
                        <BiGitRepoForked />
                        <span>{props.repository.forks}</span>
                    </a>
                </div>
            </>
        )        
    }
}

function repoTrue(props) {
    if(props.repository.license !== null) {
        return (
            <>
                <div>
                    <VscLaw />
                    <span>{props.repository.license.name}</span>
                </div>
            </>
        )        
    }
}

function descriptionTrue(props) {
    if(props.repository.description !== null) {
        return (
            <p>
                {props.repository.description}
            </p>
        )        
    }
}

function languageTrue(props) {
    if(props.repository.language !== null) {
        return(
            <>
                <div>
                    <span id={props.repository.language.toLowerCase()} className="roundIconLanguage"></span>
                    <span>{props.repository.language}</span>
                </div>
            </>
        )       
    }
}

function repoDate(props) {
    const updatedAt = Date.parse(props.repository.updated_at)
    const now = new Date()
    const newDate = new Date(updatedAt)
    const difference = now - updatedAt
    const smallDifference = Math.round(difference / (1000 * 3600 * 24))  

    if (smallDifference <= 7) {
        return `Updated ${smallDifference} days ago`

    } else {
        const pattern = date.format(newDate, 'D MMM')
        return ('updated on ' + pattern )
    }
}

export function RepositoryItem (props) {

    return (
        <li>
            <Container>
                <div id="leftBoxContent">
                    <a href={props.repository.html_url}>
                        <h3>{props.repository.name}</h3> 
                    </a>
                    {descriptionTrue(props)}
                    <div id="repoBox">                        
                        {languageTrue(props)}
                        <div>                       
                            <a href={props.repository.stargazers_url}>
                                <BiStar />
                                <span>{props.repository.stargazers_count}</span>
                            </a>
                        </div>
                        {forksTrue(props)}  
                        {repoTrue(props)}      
                        <div>
                            <span>{repoDate(props)}</span>
                        </div>
                    </div>                    
                </div>
                <div id="rightBoxContent">
                    <div id="buttonRight">
                        <button className="btn">
                            <BiStar id="buttonIcon" />
                            <p>Star</p>
                        </button>
                    </div>
                    <div id="graphic">
                    </div>
                </div>
            </Container>
            
        </li>
    )
}