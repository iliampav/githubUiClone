import styled from 'styled-components';
import * as palette from './variable';

export const Container = styled.div`
    align-items: top;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: -25px;
    padding: 0 16px;
    max-width: 25vw;

    .mainCss {
        align-items: center;
        color: ${palette.grey};
        display: flex;
        justify-content: left;
        text-decoration: none;
    }

    .autoPadding {
        padding-bottom: 16px;
    }

    #bio {    
        p {
        font-size: 16px;
        width: auto;
        }
    }

    button {
        font-size: 14px;
        padding: 5px 16px;
        width: 100%;
    }

    @media (max-width: 1700px) {
        max-width: 20vw;  
    }

    @media (max-width: 1300px) {
        width: 25%;  
    }
`;

export const ProfileImg = styled.img`
    border-radius: 50%;
    height: auto;
    width: auto;
    max-height: 290px;
    max-width: 290px;

    @media (max-width: 1500px) {
        height: auto;
        width: auto;  
    }

    @media (max-width: 1300px) {
        height: auto;
        max-width: 280px;
        max-height: 280px;
        width: auto;  
    }
`;

export const ProfileName = styled.div`
    color: ${palette.black};
    font-size: 26px;
    font-weight: 600;
    line-height: 1.25;
    padding-top: 16px;
`;

export const ProfileNickName = styled.div`
    color: ${palette.grey};
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    padding-bottom:16px;
`;

export const StatusLinks = styled.div`
    align-items: center;
    display: flex;
    justify-content: left;

    p {
        margin-right: 5px;
    }

    a:last-child {

        p {
            margin-right: 0;
        }
    }    

    span {
        font-weight: 600;
        margin-right: 5px;
    }    

    svg {
        margin-right: 5px;
    }

    @media (max-width: 1700px) {
        flex-direction: column;
        align-items: flex-start;

        .hide {
            opacity: 0;
            position: absolute;
        }

        .hide_space {
            margin-left: 22px;
        }
    }
`;

export const ProfileLocation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;

    div, a {
        padding-top: 4px;
    }

    span {
        font-weight: 400;
        margin-right: 5px;
    }    

    svg {
        margin-right: 5px;
    }
`;