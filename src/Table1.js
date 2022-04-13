import TableMenu1 from './TableMenu1.js';
import TableStyle1 from './TableStyle1';
import styled from 'styled-components'


const Table1 = () => {
    const TableMenu1Style = styled.div`
    .table-menu1{
    padding:50px;

}

`;
    return ( 
        <TableMenu1Style>
        <div className='table-menu1'>
          <TableStyle1>
            <TableMenu1/>
          </TableStyle1>
        </div>
      </TableMenu1Style>
      
     );
}
 
export default Table1;