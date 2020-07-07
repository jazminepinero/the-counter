import React, { useState, useEffect } from 'react'
import MaterialTable, { MTableBodyRow } from 'material-table';
import { makeStyles } from '@material-ui/core/styles';


function MatTable() {
  const useStyles = makeStyles((theme) => ({
    main: {
      width: "100%",
      fontSize: "15px"
  
    },
  }));
  const classes = useStyles();
    const [columns, setColumns] = useState ([
          { title: 'Account Number', field: 'number', initialEditValue: '' },  
          { title: 'Account Name', field: 'name' },  
          { title: 'Beginning Balance', field: 'beginning' },  
          { title: 'Adjusted Balance', field: 'adjusted' },
          {
            title: 'P & L',
            field: 'profitLoss',
            lookup: { 1: 'yes', 2: 'no' },
          }  
        ]
    );
    const [data, setData] = useState([
      { number:'Account Number', name:'Account Name', beginning: 'Beginning Balance', adjusted: 'Adjusted Balance', profitLoss: 'y/n'},      
    ]);
    


    return (
        <MaterialTable
        title="Trial balance"
        columns={columns}
        options={{
          exportButton: true
        }}
        data={data}
        components={{
          Row: props => (
            <MTableBodyRow className={classes.main}
              {...props}
              onDoubleClick={e => {
                console.log(props.actions);
                props.actions[1]().onClick(e, props.data);
              }}
            />
          )
        }}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 200)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 200)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 200)
            }),
        }}
      />
    )
  }

export default MatTable
