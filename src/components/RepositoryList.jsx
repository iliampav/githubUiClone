import React, { useState, useEffect } from 'react';

import { RepositoryItem } from "./RepositoryItem";

import { Container, Finder, RepositoryListCss} from '../styles/repositories'

//https://api.github.com/users/iliampav

export function RepositoryList({userName}) {
    
    const [repositories, setRepositories] = useState([]);
    const [filters, setFilters] = useState([])
    const [input, setInput] = useState('')
    const [type, setType] = useState('')
    const [language, setLanguage] = useState('')
    const [reSorted, setReSorted] = useState('')
    //load from api

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => {
            setRepositories(data)
            setFilters(data)
        })
    }, []);

    // input change

    const onChangeInput = (e) => {
        setInput(e.currentTarget.value);
    };    

    useEffect(() => {
        const newData = repositories.filter((repository) => {
            if(repository.name.toLowerCase().includes(input.toLowerCase())) {
                return true
            }
        })
        setFilters(newData)
                      
    }, [input]);

    // on change Type

    const onChangeType = (e) => {
        setType(e.target.getAttribute('value'))
    }; 

    useEffect(() => {
        
        const typeData = repositories.filter((repository) => {
            if (type === 'all') {
                return true
            } else if (type === 'source') {
                if(repository.fork === false) {
                    return true
                }
            } else if (type === 'forks') {
                if(repository.fork === true) {
                    return true
                }    
            } else if (type === 'archived') {
                if(repository.archived === true) {
                    return true
                } 
            } else if (type === 'mirrors') {
                if(repository.mirror_url === true) {
                    return true
                }        
            }
            
        })
        setFilters(typeData)                      
    }, [type]);

    // on change Language

    const menuLanguageCaller = () => {
        let names = []
        repositories.map(repository => {     
            names.push(repository.language)     
        })

        const uniqueName = names.filter((elem, index, self) => {
            if (elem !== null) {
                return index === self.indexOf(elem);
            }
        })
        return uniqueName
    }

    const menuLanguage = menuLanguageCaller()

    const onChangeLanguage = (e) => {
        setLanguage(e.target.getAttribute('value'))
    }; 

    useEffect(() => {        
        const languageData = repositories.filter((repository) => {
            if (repository.language === 'all') {
                return true
            } else if (repository.language === language) {
                return true                
            }             
        })
        setFilters(languageData)                      
    }, [language]);

    // onSortBy

    const onSortBy = (e) => {
        setReSorted(e.target.getAttribute('value'))
    }; 

    useEffect(() => {        
        if (reSorted === 'lastUpdated') {
            const newArray = [...filters]
            newArray.sort((a,b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime());
            setFilters(newArray)
        } else if (reSorted === 'stars') {
            const newArray = [...filters]
            newArray.sort((a,b) => a.stargazers_count - b.stargazers_count);
            setFilters(newArray.reverse())            
        }                     
    }, [reSorted]);

    return (
        <>
        <Container>           
            <Finder>
                <input type="text" placeholder='Find a repository..' onChange={onChangeInput}/>
                <div id="selectors">
                    <div className="dropdown">
                        <button className="dropbtn">Type</button>
                        <div className="dropdown-content" >
                            <a value="all" onClick={onChangeType}>All</a>
                            <a value="source" onClick={onChangeType}>Sources</a>
                            <a value="forks" onClick={onChangeType}>Forks</a>
                            <a value="archived" onClick={onChangeType}>Archived</a>
                            <a value="mirrors" onClick={onChangeType}>Mirrors</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Language</button>
                        <div className="dropdown-content" >
                            {menuLanguage.map(language => {                            
                                    return <a key={language} value={language} onClick={onChangeLanguage}>{language}</a>                                                       
                            })}
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Sort</button>
                        <div className="dropdown-content" >
                            <a value="lastUpdated" onClick={onSortBy}>Last Updated</a>
                            <a value="stars" onClick={onSortBy}>Stars</a>
                        </div>
                    </div>
                </div>
            </Finder>
            <RepositoryListCss>
                <ul>
                    {
                        filters.length ?
                        filters.map(repository => {
                            return <RepositoryItem key={repository.name} repository={repository} />
                        })
                        :
                        <h1 id="fillTheGap">Loading data or no data</h1>  
                    }                    
                </ul>
            </RepositoryListCss>
        </Container>
        </>
    );
}
