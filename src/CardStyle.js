import styled from 'styled-components'

const CardStyle=styled.div`
    .card-content{
        background: #3A3B48 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 6px #0000000A;
        opacity: 1;
        width: 271px;
        height: 213px;
        border-radius:8px;
        margin-top:50px;
        padding:10px 8px;
        display:block;
    }

    h4{
        text-align: left;
        font: normal normal bold 16px/19px Montserrat Alternates;
        letter-spacing: 0px;
        color: #909090;
        opacity: 1;
      
    }
    h6{
        font: normal normal bold 11px/25px Montserrat Alternates;
        letter-spacing: 0px;
        color: #B5B5B5;
        opacity: 1;
    }
    
    hr{
        border:1px solid #707070;

    }
    .card-text{
        display:flex;
        justify-content:space-between;
        height:40px;
        align-items:center;
    }
    button{
        background: transparent linear-gradient(270deg, #33C2DF 0%, #0081C5 100%) 0% 0% no-repeat padding-box;
        opacity: 1;
        color:#FFFFFF;
        border-radius:8px;
        width:inherit;
        font: normal normal bold 14px/18px Montserrat Alternates;
        letter-spacing: 0px;
        border-style:none;
        padding:8px 0px;
    }
    .card-button{
        display:flex;
        justify-content:center;
        width:inherit;
    }

`;
export default CardStyle