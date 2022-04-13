import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA1 from './MOCK_DATA1.json'
import { FaSort } from "react-icons/fa";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import AccordianMenu from './AccordianMenu';
import AccordianStyle from './AccordianStyle';

const TableMenu1 = () => {
const columns = React.useMemo(
    () => [
        {
            Header: 'Date',
            accessor: 'date',
          
          },
          {
            Header: 'Type',
            accessor: 'type',
           
          },
          {
            Header: 'ID',
            accessor: 'id',
           
          },
          {
            Header: 'Business',
            accessor: 'business',
           
          },
          {
            Header: 'Name',
            accessor: 'name',
           
          },
          {
            Header: 'Amount',
            accessor: 'amount',
           
          },
        ]
  );

  const data = useMemo(() => MOCK_DATA1, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  
  return (
    <>
      <table className='table-heading' {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')} &nbsp; <FaSort color="white"/></th>
              ))}
             
            </tr>
          ))}
        </thead>
      </table>




      <table className='table-content' {...getTableProps()}>
       
        <tbody {...getTableBodyProps()}>
        <tr className='row-header'>
        <td colSpan={6}>
        {/* <AccordianStyle>
          <AccordianMenu/>
        </AccordianStyle> */}
      
        </td>
  
        </tr>
       
       
          {rows.map(row => {
            prepareRow(row)
        
            {/* if (row.index == 4){
                return (
                  <tr className='row-header'>
                    <td>Digigtal Communication of Revenue Payable</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className='position-icon'>$80,000 &nbsp; &nbsp;<MdOutlineKeyboardArrowDown color='#3A3B48' className='drop-down-icon'/></td>
                  </tr>
                )
            } */}
         
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                
                })}

              
              </tr>
            )
          })}
         
        </tbody>
      
      </table>
      <div class="pagination">
        <a href="#">&lsaquo;</a>
          <div className='pagination-link'>
            <a href="#">1</a>
            <a class="active" href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
          </div>
        <a href="#">&rsaquo;</a>
      </div>
    </>
  )
}
export default TableMenu1