import React from 'react'
import DReport from './DReport'

export default function DeanReport() {
    const [data, setData] = React.useState('')

    const validator = (e) => {
        console.log( e.target.value)
        setTextFieldFromDepartmentComponent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {}
        var formData = new FormData(e.target)
        for (var key of formData.keys()) {
            data[key] = formData.get([key])
         }
         console.log(data)
    }
  return (
    <form onSubmit={handleSubmit}>
        Dean Report
        <DReport validator={validator}/>
        <button type="button" onClick={handleSubmit}>Click Me</button>
    </form>
  )
}
