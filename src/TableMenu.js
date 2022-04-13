import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { FaTrash,FaSort } from "react-icons/fa";

const TableMenu = () => {
const columns = React.useMemo(
    () => [
        {
            Header: 'Bill No',
            accessor: 'bill_no',
          
          },
          {
            Header: 'Customer Ref',
            accessor: 'customer_ref',
           
          },
          {
            Header: 'Outstanding Amount',
            accessor: 'outstanding_amount',
           
          },
        ]
  );

  const data = useMemo(() => MOCK_DATA, [])

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
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')} &nbsp; <FaSort color="white"/></th>
              ))}
              <th>To Pay &nbsp;<FaSort color="white"/></th>
              <th>Action</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                
                })}
                <td><input type="text" value="$185,000"></input></td>
                <td><FaTrash color='#FF5353'/></td>
              </tr>
            )
          })}
         
        </tbody>
      
      </table>
    </>
  )
}
export default TableMenu