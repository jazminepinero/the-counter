import React from "react";
import { useTable } from "react-table";
import MaUTable from "@material-ui/core/Table";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from '@material-ui/core/TextField';

import MUIDataTable from "mui-datatables";



function Form() {
const data = [
  ["101", "Cash - Operating", "No", "15,000", "26,000"],
  ["", "Debit", "", "", ""],
  ["", "Debit", "", "", ""],
  ["", "Debit", "", "", ""],
  ["", "Debit", "", "", ""],
  ["", "Debit", "", "", ""],
  ["", "Debit", "", "", ""],
  ["", "Debit", "", "", ""],
  ["", "Debit", "", "", ""],
  ["", "Debit", "", "", ""],
 ];

const columns = [
  {
    name: "Account Number",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <FormControlLabel
          value={value}
          control={<TextField value={value} />}
          onChange={event => updateValue(event.target.value)}
        />
      )
    }
   },
   {
    name: "Account Name",
    selector: "account",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <FormControlLabel
          value={value}
          control={<TextField value={value} />}
          onChange={event => updateValue(event.target.value)}
        />
      )
    }
  },
  {
    name: "P & L",
    options: {
      filterType: 'dropdown',
      customBodyRender: (value, tableMeta, updateValue) => (
        <FormControlLabel
          value={value}
          control={<TextField value={value} />}
          onChange={event => updateValue(event.target.value)}
        />
      )
    }
  },
  {
    name: "Beginning Balance",
    options: {
      elevation: 10,
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <FormControlLabel
          value={value}
          control={<TextField value={value} />}
          onChange={event => updateValue(event.target.value)}
        />
      )
    }
  },
  {
    name: "Adjusted Balance",
    options: {
      elevation: 10,
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <FormControlLabel
          value={value}
          control={<TextField value={value} />}
          onChange={event => updateValue(event.target.value)}
        />
      )
    }
  }
  ];
  
  const options = {
    display: 'excluded',
  };

  return (
    <MUIDataTable
    title={"Trial Balance"}
    data={data}
    columns={columns}
    options={options}
    />
  );
};

export default Form;