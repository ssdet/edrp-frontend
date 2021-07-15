import React, { useEffect, useState } from 'react'
import { MyContext } from '../../store/Store';
import { FormControlLabel, Grid, InputLabel, makeStyles, Select, TableBody, TableContainer, TableHead, TableRow, TextField as MuiTextField } from '@material-ui/core';
import axios from 'axios';
import { GLOBAL_URL } from '../../config/Config';
import { FormControl } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableCell } from '@material-ui/core';



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
  }
}));

const EXCLUDE_FIELDS = {
  "id" : true,
  "criterion" : true
}

const FIELDS_WITH_NAME = {
  "dept" : true,
  "programme" : true
}

const TextField = (props)=> {
  const {field} = props;
  const classes = useStyles();
    return(
        <>
        <Grid item xs={12} >
          <MuiTextField
            autoComplete={field.name}
            name={field.name}
            variant="outlined"
            required
            fullWidth
            id={field.name}
            label={field.label}
            autoFocus
            {...field.extras}
            type={props.type}
          />
        </Grid>
        </>
    )
}

const DateField = (props)=> {
  const {field} = props;
    return(
        <>
        <Grid item xs={12} >
          <MuiTextField
            type="date"
            autoComplete={field.name}
            name={field.name}
            variant="outlined"
            required
            defaultValue="2021-05-11"
            fullWidth
            id={field.name}
            label={field.label}
            {...field.extras}
          />
        </Grid>
        </>
    )
}

const SelectField = (props)=> {
    const classes = useStyles();
    const [options, setOptions] = useState([])
    const {field} = props;

    useEffect(()=>{
        axios.get(`${GLOBAL_URL}/${field.props.field}`).then((response)=>setOptions(response.data))
    },[])

    return(
        <>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id={`select-outlined-label`}>{field.label}</InputLabel>
                <Select
                  labelId={`select-outlined-label`}
                  id={field.name}
                  label={field.label}
                  name={field.name}
                  fullWidth
                >
                    {
                    options.map((option)=> (
                     <MenuItem value={option.id}>{option.name}</MenuItem>
                    ))
                    }
                </Select>
              </FormControl>
            </Grid>
        </>
    )
}

const CheckBoxField = (props)=> {
  const {field} = props;
  const classes = useStyles();
  const [value, setValue] = React.useState("true");

  const handleChange = (event) => {
    if(field.yesNoField) {
      setValue(event.target.value);
    }
    else {
      setValue(event.target.value.toUpperCase())
    }
  };

    return(
        <>
          <Grid container className={classes.gridRoot} style={{paddingLeft : "10px"}}> 
             <Grid item xs={12} sm={6}>
             <FormControl component="fieldset">
                  <FormLabel component="legend">{field.label}</FormLabel>
                  <RadioGroup aria-label={field.label} name={field.name}  row value={value} onChange={handleChange}>
                      {field.options && field.options.map((option)=> (<FormControlLabel value={field.yesNoField ? option.value.toString() : option.value.toUpperCase()} control={<Radio />} label={option.label} />))}
                  </RadioGroup>
                </FormControl>
            </Grid>
          </Grid>
        </>
    )
}

function Form(props) {
  const classes = useStyles();
    const generateField = (type, index)=> {
        switch (type) {
            case "text":
                return (<TextField field={props.fields[index]} type="text"/>)
                break;

            case "checkbox":
                return (<CheckBoxField field={props.fields[index]}/>)
                break;

            case "select":
                return (<SelectField field={props.fields[index]}/>)
                break;

            case "date":
                return (<DateField field={props.fields[index]}/>)
                break
            
            case "number":
              return (<TextField field={props.fields[index]} type="number"/>)
              break

            default:
                return (<TextField field={props.fields[index]}/>)
                break;
        }
    }
    
    return (
        <>
         {props.fields.map((field, i)=> (
             <>
             {generateField(field.type, i)}
             </>
         ))}
        </>
    )
}


function Step(props) {
    const classes = useStyles();
    const {criterion, step} = props
    const {state, addBtn, removeBtn} =  React.useContext(MyContext);

    React.useEffect(()=> console.log(props.fields),[])
    const handleSubmit = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {}
        for (var key of formData.keys()) {
          data[key] = formData.get([key])
       }
       console.log(data)
        addBtn(
            criterion,
            step,
            data
        )
    }

    return (
        <div>
             <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                  <Form fields={props.fields}/>
              </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Button
                       // type="submit"
                       onClick={()=> removeBtn(criterion,step)}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.remove}
                      >
                        Remove
                      </Button>
                  </Grid>
                 <Grid item xs={12} sm={6}>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Add
                      </Button>
                  </Grid>
              </Grid>
              <TableContainer >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                          {props.fields.map((field)=> (
                            <TableCell>{field.label}</TableCell>
                          ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.data[`c${criterion}${step}`] && state.data[`c${criterion}${step}`].map((row) =>(
                       <TableRow key={JSON.stringify(row)}>
                      {props.fields.map((field)=> (!EXCLUDE_FIELDS[field.name] && !EXCLUDE_FIELDS[field.name] &&
                        <TableCell component="th" scope="row">
                            {FIELDS_WITH_NAME[field.name] ? row[field.name].name : row[field.name]}
                      </TableCell>))}
                   </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </form>   
        </div>
    )
}




export default Step
