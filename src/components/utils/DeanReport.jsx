import React from 'react'
import DReport from './DReport'

export default function DeanReport() {
    const [textFieldFromDepartmentComponent, setTextFieldFromDepartmentComponent] = React.useState('')

    const validator = (e) => {
        console.log( e.target.value)
        setTextFieldFromDepartmentComponent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(textFieldFromDepartmentComponent === 'mehul') {
            alert("Correct")
        }
        else {
            alert("Invalid")
        }
    }
  return (
    <div>
        Dean Report
        <DReport validator={validator}/>
        <button type="button" onClick={handleSubmit}>Click Me</button>
    </div>
  )
}
