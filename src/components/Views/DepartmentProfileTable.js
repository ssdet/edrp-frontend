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
import { MyContext } from '../../store/Store';
import { FACULTY_PROFILE_CONFIG } from '../Templates/FacultyProfileConfigurations/FacultyProfileConfiguration';
import { CircularProgress } from '@material-ui/core';


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
  }
});


const EXCLUDE_FIELDS = {
    "id" : true,
    "faculty_profile" : true
}

const FIELDS_WITH_NAME = {
    "dept" : true,
    "programme" : true
}

export const generateTabHeading = (criterion, step)=> {
    let steps = step.split("")
    if(!steps[1]) {
      steps[1] = '0'
    }
    return `${criterion}.${steps[0]}.${steps[1]}`
  }

export default function DepartmentProfileTable(props) {
    const {criterion, step, tableName, criterionDescription} = props;
    const {state} = React.useContext(MyContext)
    const classes = useStyles();


  return (
    <Paper variant="outlined" elevation={1} className={classes.tableRoot}>
        <TableContainer>
        <div>
            <Typography variant="body1" component="h5" className={classes.typography}><b>{`${generateTabHeading(criterion, step)} ${FACULTY_PROFILE_CONFIG[criterion][step].description}`}</b> </Typography>
            <Divider />
        </div>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
            {props.fields.map((field)=> !EXCLUDE_FIELDS[field.name] && <TableCell style={{textTransform : "capitalize", color : "gray"}}><b>{field.label.replaceAll("_", " ")}</b></TableCell> )}
            {/* {rows.length > 0 && Object.keys(rows[0]).map((key)=> (!EXCLUDE_FIELDS[key] && <TableCell align="left" style={{textTransform: "capitalize"}}><b>{key.replaceAll("_", " ")}</b></TableCell>))} */}
            </TableRow>
            </TableHead>
            <TableBody>
            {props.loading && <TableRow key="loading">
                <TableCell component="th" scope="row">
                <CircularProgress/>
              </TableCell>
            </TableRow>}
            {!state.data[`fp${criterion}${step}`] && <TableCell align="center">No Data Found</TableCell>}
            {state.data[`fp${criterion}${step}`] && state.data[`fp${criterion}${step}`].length === 0 && <TableCell align="center">No Data Found</TableCell>}
            {state.data[`fp${criterion}${step}`] && state.data[`fp${criterion}${step}`].map((row) =>(
                    (row["faculty_profile"] && parseInt(props.department) === 0 || parseInt(props.department) === parseInt(row["faculty_profile"]["dept"]) ) &&
                    <TableRow key={JSON.stringify(row)}>
                        {props.fields.map((field)=> (!EXCLUDE_FIELDS[field.name] &&
                          <TableCell component="th" scope="row">
                              {FIELDS_WITH_NAME[field.name] ? row[field.name].name : row[field.name]}
                        </TableCell>))}
                    </TableRow>
                  ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Paper>
  );
}
