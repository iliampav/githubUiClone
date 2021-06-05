import React, {useEffect, useState} from 'react';

import { Menu, Container, MenuHeader } from '../styles/header';

import { AiOutlineProject, AiOutlineGithub, AiOutlinePlus } from 'react-icons/ai';
import { RiBookLine } from 'react-icons/ri';
import { FiBookOpen, FiBox } from 'react-icons/fi';
import { BiBell } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'

export function Header({userName}) {
    
        const [repositories, setRepositories] = useState([]);
        //load from api
    
        useEffect(() => {
            fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => response.json())
            .then(data => {
                setRepositories(data)
            })
        }, []);

    return (
        <>
            <Container>
                <MenuHeader>
                    <div id="menuHeader__left">
                        <a id="lineH" href={`https://github.com/`}>
                            <AiOutlineGithub />
                        </a>
                        <div id="inputBox">
                            <input type="text" placeholder='Search or jump to...' /> 
                            <img src="https://github.githubassets.com/images/search-key-slash.svg"/>
                        </div>
                        <div id="leftMenu" >
                            <a >Pull request</a>
                            <a >Issues</a>
                            <a >MarketPlace</a>
                            <a >Explore</a>
                        </div>
                    </div>
                    <div id="menuHeader__right">
                        <div id="rightMenu" >
                            <BiBell />
                            <div id="plus"><AiOutlinePlus /><IoMdArrowDropdown /></div> 
                            <div id="pic">
                                <img src="https://i.pinimg.com/originals/ca/13/71/ca13713dedb0a58f58c58caed8ed747e.jpg" />
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                    </div>
                </MenuHeader>
                <div id="contentMenuMover">
                    <Menu>
                        <button>
                            <FiBookOpen />
                            Overview
                        </button>
                        <button id="activeButton">
                            <RiBookLine />
                            <p>Repositories</p>
                            <div><p id="insideDiv">{repositories.length}</p></div>
                        </button>
                        <button>
                            <AiOutlineProject />
                            Projects
                        </button>
                        <button>
                            <FiBox />
                            Packages
                        </button>
                    </Menu>
                </div>
            </Container>
        </>
    )
}