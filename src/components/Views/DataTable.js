import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
  tableRoot : {
      marginTop : "50px",
  },
  typography : {
      marginLeft : "20px",
      marginTop : "20px",
      marginBottom : "10px",
      textTransform : "uppercase"
  }
});


const EXCLUDE_FIELDS = {
    "id" : true,
    "faculty_profile" : true
}


export default function DataTable(props) {
    const {rows, tableName} = props;

  const classes = useStyles();

  return (
    <Paper variant="outlined" elevation={2} className={classes.tableRoot}>
        <TableContainer>
        <div>
            <Typography variant="h6" component="h5" className={classes.typography}><b>{tableName.replaceAll("-", " ")}</b> </Typography>
            <Divider/>
        </div>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
            {rows.length > 0 && Object.keys(rows[0]).map((key)=> (!EXCLUDE_FIELDS[key] && <TableCell align="left" style={{textTransform: "capitalize"}}><b>{key.replaceAll("_", " ")}</b></TableCell>))}
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.length === 0 && <TableCell align="center">No Data Found</TableCell>}
            {rows.map((row) => (
                (row["faculty_profile"] && parseInt(props.department) === 0 || parseInt(props.department) === parseInt(row["faculty_profile"]["dept"]) ) &&
                <TableRow key={row.id}>
                    {Object.keys(row).map((key)=> (!EXCLUDE_FIELDS[key] && <TableCell align="left">{row[key]}</TableCell>))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Paper>
  );
}
