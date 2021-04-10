import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { MyContext } from '../../../../store/Store';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    remove : {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.secondary.main, 
    },
    GridClass : {
        marginTop : theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
  }));

export default function FinalState() {
    const classes = useStyles();
    const {state} =  React.useContext(MyContext);
    return (
        <div>
      <Grid container spacing={2}>
          <Grid item xs={12} className={classes.GridClass}>
              <Typography variant="body1">{state.stepLabel[0]}</Typography>
              <TableContainer >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name Of Programme</TableCell>
                    <TableCell align="right">Programme Code</TableCell>
                    <TableCell align="right">Date Of Revision</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.c1s1Rows.map((row) => (
                    <TableRow key={row.pName}>
                      <TableCell component="th" scope="row">
                        {row.pName}
                      </TableCell>
                      <TableCell align="right">{row.pCode}</TableCell>
                      <TableCell align="right">{row.pDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} className={classes.GridClass}>
            <Typography variant="body1">{state.stepLabel[1]}</Typography>
            <TableContainer >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Programme with Code</TableCell>
                        <TableCell align="right">Introduction Date - Programme</TableCell>
                        <TableCell align="right">Course With Code</TableCell>
                        <TableCell align="right">Date Of Introduction Course</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.c1s2Rows.map((row) => (
                        <TableRow key={row.pName}>
                          <TableCell component="th" scope="row">
                            {row.pName}
                          </TableCell>
                          <TableCell align="right">{row.cDate}</TableCell>
                          <TableCell align="right">{row.cName}</TableCell>
                          <TableCell align="right">{row.cDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} className={classes.GridClass}>
            <Typography variant="body1">{state.stepLabel[2]}</Typography>
            <TableContainer >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Programme/Course</TableCell>
                        <TableCell align="right">Introduction Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.c1s3Rows.map((row) => (
                        <TableRow key={row.pName}>
                          <TableCell component="th" scope="row">
                            {row.pName}
                          </TableCell>
                          <TableCell align="right">{row.pDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} className={classes.GridClass}>
            <Typography variant="body1">{state.stepLabel[3]}</Typography>
            <TableContainer >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Programme/Course</TableCell>
                        <TableCell align="right">Introduction Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data.c1s4 && state.data.c1s4.map((row) => (
                        <TableRow key={row.pName}>
                          <TableCell component="th" scope="row">
                            {row.pName}
                          </TableCell>
                          <TableCell align="right">{row.pDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} className={classes.GridClass}>
            <Typography variant="body1">{state.stepLabel[4]}</Typography>
            <TableContainer >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Value Added Courses</TableCell>
                        <TableCell align="right">Introduction Date</TableCell>
                        <TableCell>Students Enrolled</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data.c1s5 && state.data.c1s5.map((row) => (
                        <TableRow key={row.vName}>
                          <TableCell component="th" scope="row">
                            {row.vName}
                          </TableCell>
                          <TableCell align="right">{row.vDate}</TableCell>
                          <TableCell align="right">{row.sTotal}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} className={classes.GridClass}>
            <Typography variant="body1">{state.stepLabel[5]}</Typography>
            <TableContainer >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Project Title</TableCell>
                        <TableCell align="right">Student Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data.c1s6 && state.data.c1s6.map((row) => (
                        <TableRow key={row.pTitle}>
                          <TableCell component="th" scope="row">
                            {row.pTitle}
                          </TableCell>
                          <TableCell align="right">{row.sName}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} className={classes.GridClass}>
            <Typography variant="body1">{state.stepLabel[6]}</Typography>
            <TableContainer >
                  <Table className={classes.table} aria-label="simple table">
                      <TableRow>
                        <TableCell><b>Student</b></TableCell>
                        <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 ) ? state.data.c1s7[0].students : "-"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Teachers</b></TableCell>
                        <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].teachers : "-"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Employers</b></TableCell>
                        <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].employers : "-"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Alumni</b></TableCell>
                        <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].alumni : "-"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Parents</b></TableCell>
                        <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].parents : "-"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><b>Feedback</b></TableCell>
                        <TableCell>{(state.data.c1s7 && state.data.c1s7.length > 0 )  ? state.data.c1s7[0].feedback : "-"}</TableCell>
                      </TableRow>
                  </Table>
                </TableContainer> 
            </Grid>
        </Grid>    
        </div>
    )
}
