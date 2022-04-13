import styled from 'styled-components'


const TableStyle1 = styled.div`
    .table-content {
        border-spacing: 0;
        background: #3A3B48 0% 0% no-repeat padding-box;
        opacity: 1;
        text-align: left;
        font: normal normal normal 11px/25px Montserrat Alternates;
        letter-spacing: 0px;
        color: #B5B5B5;
        padding:7px 20px 40px;
        border-radius:8px;
        width:100%
     
        
    }
    
    td {
        padding:0.5rem 2.5rem;
        border-bottom: 1px solid #707070;
        ${'' /* text-align:center; */}


    }
    
    td:nth-child(4) {
       padding:0.5rem 0.5rem;
    }

    th{
        padding:0.5rem 2.5rem;
        ${'' /* text-align:center; */}
        color:white;
    }
    .table-heading{
        background: transparent linear-gradient(90deg, #0081C5 0%, #31C0DE 100%) 0% 0% no-repeat padding-box;
        opacity: 1;
        margin-bottom:10px;
     
      
       
        text-align: left;
        font: normal normal normal 11px/25px Montserrat Alternates;
        letter-spacing: 0px;
        color: #B5B5B5;
       
        border-radius:8px;
        width:100%
     
    }

    thead {
        background: transparent linear-gradient(90deg, #0081C5 0%, #31C0DE 100%) 0% 0% no-repeat padding-box;
        opacity: 1;
        
    }

    .table-heading th:first-child{
        border-radius:8px 0 0 8px;
    }

    .table-heading th:last-child{
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

     /* Pagination links */
     .pagination{
         display:flex;
         justify-content:center;
         margin-top:20px;
     }
     .pagination a {
        color: #FFFFFF;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
       
    }
    .pagination-link{
        background: #3A3B48 0% 0% no-repeat padding-box;
        opacity: 1;
      
    }
    
    /* Style the active/current link */
    .pagination a.active {
        background: #33C2DF 0% 0% no-repeat padding-box;
        border-radius: 7px;
        opacity: 1;
        color: white;
    }
    .drop-down-icon{
        background: #CCCCCC 0% 0% no-repeat padding-box;
        opacity: 1;
        border-radius:50%;
        width:20px;
        height:20px;
    }
    .position-icon{
        display:flex;
        align-item:center;
      
        
    }
    .row-header{
        background: #676876 0% 0% no-repeat padding-box;
        opacity: 1;
        font: normal normal 600 11px/25px Montserrat Alternates;
        letter-spacing: 0px;
        color: #FFFFFF;
        padding:2px 10px;
    }
    
   
`;
   


  export default TableStyle1