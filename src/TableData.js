import React from 'react'
import DataTable from 'react-data-table-component';

 
const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

const data = [{ debit: 45 }];

const columns = [
    {
      name: 'Account',
      selector: 'title',
      input: 5, 
      sortable: true,
    },
    {
      name: 'Debit',
      selector: 'debit',
      sortable: true,
    },
    {
      name: 'Credit',
      selector: 'year',
      sortable: true,
    },
  ];
  
 function TableData() {
 return (
  <DataTable
    title="Trial Balance"
    data={data}
    columns={columns}
    customStyles={customStyles}
    selectableRows
  />
 
)
 };
 
export default TableData;