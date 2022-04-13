import styled from 'styled-components'


const TableStyle = styled.div`
    table {
        border-spacing: 0;
        background: #3A3B48 0% 0% no-repeat padding-box;
        opacity: 1;
        text-align: left;
        font: normal normal normal 11px/25px Montserrat Alternates;
        letter-spacing: 0px;
        color: #B5B5B5;
        padding:10px 10px 0;
        border-radius:8px;
        margin:50px 40px 0 0;
        
    }
    
    td {
        padding:0.5rem 2.5rem;
        border-bottom: 1px solid #707070;
        text-align:center;


    }
    
    td:nth-child(4) {
       padding:0.5rem 0.5rem;
    }

    th{
        padding:0.5rem 2.5rem;
        text-align:center;
        color:white;
    }

    thead {
        background: transparent linear-gradient(90deg, #0081C5 0%, #31C0DE 100%) 0% 0% no-repeat padding-box;
        opacity: 1;
        
    }

    table th:first-child{
        border-radius:8px 0 0 8px;
    }

    table th:last-child{
        border-radius:0 8px 8px 0;
    }
    input{
        width:55%;
        background-color:transparent;
        color:#B5B5B5;
        border:1px solid #707070;
        font: normal normal normal 11px/25px Montserrat Alternates;
        opacity:1;
    }
   
`;

  export default TableStyle