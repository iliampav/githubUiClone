import styled from 'styled-components';
import * as palette from './variable';

export const Container = styled.div`
    border-bottom: 1px solid ${palette.lightGrey};
    display: flex;
    padding: 24px 0px;
    width: 75vw;
    max-width: 900px;

    h3 {
        color: ${palette.blue};
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 4px;
        text-decoration: none;
    }

    .roundIconLanguage {
        border-radius: 50%;
        display: inline-block;
        height: 12px;
        margin-right: 3px;
        position: relative;
        top: 1px;
        width: 12px;
    }

    #javascript {
        background-color: #f1e05a;
        border: 1px solid yellow;        
    }

    #css {
        background-color: #563d7c;
        border: 1px solid #563d7c;
    }

    #ruby {
        background-color: #701516;
        border: 1px solid #701516;
    }

    #shell {
        background-color: #89e051;
        border: 1px solid #89e051;
    }

    #html {
        background-color: #e34c26;
        border: 1px solid #e34c26;
    }

    #python {
        background-color: #3572A5;
        border: 1px solid #3572A5;
    }

    #java {
        background-color: #b07219;
        border: 1px solid #b07219;
    }

    #typescript {
        background-color: #2b7489;
        border: 1px solid #2b7489;
    }

    #php {
        background-color: #4F5D95;
        border: 1px solid #4F5D95;
    }

    #leftBoxContent {
        display: flex;
        flex-direction: column;
        width: 75vw;
    }

    #repoBox {
        align-items: center;
        display: flex;
        float: left;
        margin-top: 8px;

        div {
            align-items: center;
            display: flex;
            justify-content: center;
            margin-right: 16px;

            a {
            align-items: center;
            display: flex;
            justify-content: center;
            }

            svg {
                margin-right: 3px;
            }
        }        
    }

    #rightBoxContent {
        width: 25vw;

        #buttonRight {
            display: flex;
            justify-content: flex-end;

            button {

                svg {
                    color: ${palette.grey};
                }

                p {
                    font-size: 12px;
                    margin: 0;
                }

                #buttonIcon {
                    height: 16px;
                    margin-right: 4px;
                    margin-bottom: 2px;
                    width: 16px;
                }

                #graphic {
                    height: 100%;
                    width: 100%;
                }
            }
        }      
    }

`;