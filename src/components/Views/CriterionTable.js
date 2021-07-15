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
import { CRITERION_CONFIG } from '../Templates/CriterionConfiguration/CriterionConfig';
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
    "criterion" : true
}

const FIELDS_WITH_NAME = {
    "dept" : true,
    "programme" : true
}

export const generateTabHeading = (criterion, step)=> {
    let steps = step.split("")
    return `${criterion}.${steps[0]}.${steps[1]}`
  }

export default function CriterionTable(props) {
    const {criterion, step, tableName, criterionDescription} = props;
    const {state} = React.useContext(MyContext)
    const classes = useStyles();

  return (
    <Paper variant="outlined" elevation={2} className={classes.tableRoot}>
        <TableContainer>
        <div>
            <Typography variant="body1" component="h5" className={classes.typography}><b>{`${generateTabHeading(criterion, step)} ${CRITERION_CONFIG[criterion][step].description}`}</b> </Typography>
            <Divider />
        </div>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
            {props.fields.map((field)=> !EXCLUDE_FIELDS[field.name] && <TableCell style={{textTransform : "capitalize", color : "gray"}}><b>{field.label}</b></TableCell> )}
            {/* {rows.length > 0 && Object.keys(rows[0]).map((key)=> (!EXCLUDE_FIELDS[key] && <TableCell align="left" style={{textTransform: "capitalize"}}><b>{key.replaceAll("_", " ")}</b></TableCell>))} */}
            </TableRow>
            </TableHead>
            <TableBody>
            {props.loading && <TableRow key="loading">
                <TableCell component="th" scope="row">
                <CircularProgress/>
              </TableCell>
            </TableRow>}
            {!state.data[`c${criterion}${step}`] && <TableCell align="center">No Data Found</TableCell>}
            {state.data[`c${criterion}${step}`] && state.data[`c${criterion}${step}`].length === 0 && <TableCell align="center">No Data Found</TableCell>}
            {state.data[`c${criterion}${step}`] && state.data[`c${criterion}${step}`].map((row) =>(
                    (row["criterion"] && parseInt(props.department) === 0 || parseInt(props.department) === parseInt(row["criterion"]["dept"]) ) &&
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
