import styled from 'styled-components';
import * as palette from './variable';

export const Container = styled.div`  
    padding: 0 16px;
    max-width: 900;
`;

export const Finder = styled.div`
    display: flex;
    padding: 16px 0px;

    .dropbtn {
        align-items: center;
        background-color: #fff;
        border: 1px solid ${palette.lightGrey};
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, 0.04); 
        color: ${palette.grey};
        cursor: pointer;
        display: flex;        
        font-size: 16px;
        justify-content: center;
        padding: 6px 12px;
        transition-duration: 0.4s
    }

    .dropdown {
        position: relative;
        display: inline-block;
        justify-content: left;
        cursor: pointer;
        margin-right: 4px;
    }

    .dropdown-content {
        border-radius: 5%;
        right: 1px;
        left: auto;
        background-color: #f9f9f9;
        border: 1px solid ${palette.lightGrey};
        border-color: ${palette.lightGrey};
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
        display: none;
        font-size: 12px;
        position: absolute;
        width: 266px;
        z-index: 1;
    }

    .dropdown-content a {
        align-items: center;
        border: 0.2px solid ${palette.ultraLightGrey};
        color: black;
        display: block;
        padding: 12px 16px;
        text-align: left;
        text-decoration: none;
        transition-duration: 0.4s;        
        transition-timing-function: ease-in-out;

    }

    .dropdown-content a:hover {
        background-color: #f1f1f1;
        transition-duration: 0.4s;
        transition-timing-function: ease-in-out;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown:hover .dropbtn {
        background-color: ${palette.ultraLightGrey};
    }

    #selectors {
        align-items: center;
        display: flex;
        justify-content: flex-end;
    }

    input {
        background-color: #fff;
        border: 1px solid ${palette.lightGrey};
        border-radius: 6px;
        color: ${palette.grey};
        line-height: 20px;
        font-size: 14px;
        margin-right: 12px;
        outline: blue;
        padding: 5px 12px;
        vertical-align: middle;
        width: 100%;

        &:focus {
            border-color: ${palette.blue};
            box-shadow: 0 0 0 0.2em ${palette.lightBlue};
            outline: none;
        }
    }
`;

export const RepositoryListCss = styled.div`    

    h1 {
        margin-bottom: 16px;
    }

    #fillTheGap {
        width: 60vw;
    }    

    ul {
        list-style: none;
        
        p {
            color: ${palette.grey};
            font-size: 14px;
            margin-top: 0px;
            margin-bottom: 8px;
        }

        a {
            color: ${palette.grey};
            display: inline-block;
            text-decoration: none;
        }
    }
`;