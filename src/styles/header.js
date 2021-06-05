import styled from 'styled-components';
import * as palette from './variable'

export const Container = styled.div`
    align-items: center;
    border-bottom: 1px solid ${palette.lightGrey};
    display: flex; 
    flex-direction: column;
    justify-content: center;  

    #contentMenuMover {
        width: 100vw;
        display: flex;
        justify-content: flex-start;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 16px; 
    width: auto;
    margin: 19px 0 0 33vw;    

    @media (max-width: 1900px) {
        width: 27vw; 
    }

    @media (max-width: 1500px) {
        width: 28vw; 
    }

    @media (max-width: 1200px) {
        width: 30vw; 
    }

    @media (max-width: 1050px) {
        width: 35vw; 
    }

    @media (max-width: 900px) {
        width: 43vw; 
    }
    
    button {
        align-items: center;
        background-color: #FFF;
        border: none;
        color: ${palette.grey};
        cursor: pointer;
        display: flex;
        padding: 20px 16px;
        transition: all 0.3s;
        text-align: center;

        &:hover {
        box-shadow: inset 0 -2px ${palette.lightGrey};
    }
    }

    svg {
        color: ${palette.grey};
        margin-right: 4px;
    }

    #activeButton {        
        box-shadow: inset 0 -2px #f9826c;
        color: ${palette.black};

        svg {
            fill: ${palette.black};;
        }

        p {
            margin-right: 6px;
            font-weight: 600;
        }

        div {
            background-color: ${palette.lightGrey};
            border-radius: 40%;
            padding: 3px 3px;
        }

        #insideDiv {
        margin-right: 0;
        font-size: 12px;
        font-weight: 400;
    }

}

    
`;

export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;     
    height: 63px;
    padding: 16px 39px;
    font-size: 14px;
    line-height: 1.5;
    background-color: ${palette.black};

    svg {
        width: 36.5px;
        height: 36.5px;
        color: white;
        margin-right:14px;        
    }

    input {
        background: none;
        padding: 0 12px;
        width: 240px;
        color: ${palette.lightGrey};
        border: 0;
        line-height: 20px;
        font-size: 14px;
        
        &::placeholder {
            opacity: 0.7;
            color: ${palette.lightGrey};
            padding: 12px 0;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;;
            font-weight: 400;
        }
    }

    #lineH {
        line-height: 0px;
    }

    #inputBox {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #444d56;
        border-radius: 5px;
        margin-right: 16px;

        img {
            padding-right: 8px ;
        }
    }

    #menuHeader__left {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #leftMenu {
        a {
            color: white;
            font-weight: 600;
            cursor: pointer;

            &:not(:last-child) {
                margin-right: 16px;
            }

            &:hover {
                color: ${palette.lightGreyTwo};
            }
        }
    }

    #rightMenu {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        #plus {
            font-size: 25px;
            color: white;
            font-weight: 200;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                height: 15px;
                width: 15px;
                color: white;                

                &:not(:last-child) {
                    margin-right: 0px;
                }                
            }
        }

        #pic {
            font-size: 25px;
            color: white;
            font-weight: 200;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                height: 15px;
                width: 15px;
                color: white;
                margin-right: 0px;
            }
        }

        img {
            border-radius: 50%;
            width: 20px;
            height: 20px;
        }

        svg {
            height: 18px;
            width: 18px;
            color: white;
            margin-right: 16px;
        }
    }
`;