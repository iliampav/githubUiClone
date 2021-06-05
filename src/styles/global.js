import { createGlobalStyle } from 'styled-components';
import * as palette from './variable';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    

    html {
        width:100%; 
        height:100%;
    }

    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        font-size: 14px;
        width:100%; 
        height:100%; 
    }

    .btn {
        align-items: center;
        background-color: #fafbfc;
        border: 1px solid ${palette.lightGrey};
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, 0.04); 
        color: #24292e;
        cursor: pointer;
        display: flex;
        font-size: 12px;
        font-weight: 600;
        justify-content: center;
        line-height: 20px;
        padding: 3px 12px;
        transition-duration: 0.4s;        
        transition-timing-function: ease-in-out;
    }

    .btn:hover {
        background-color: ${palette.ultraLightGrey};
        transition-duration: 0.4s;        
        transition-timing-function: ease-in-out;
    }

    span {
        color: ${palette.grey};
    }

    svg {
        height: 16px;
        width: 16px;
    }
`;

