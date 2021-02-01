import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import Controls from './../FormParts/Conrols/Controls'
import { useForm } from '../FormParts/UseForm'
import { Form } from '../FormParts/UseForm'

function AdminForm(props) {
  const { addOrEdit } = props

  //form value object
  const initialValues = {
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nic: '',
    tel1: '',
    tel2: '',
    address: '',
  }

  //validate function
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('firstName' in fieldValues)
      temp.firstName = fieldValues.firstName ? '' : 'This field is required.'
    if ('lastName' in fieldValues)
      temp.lastName = fieldValues.lastName ? '' : 'This field is required.'
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.'
    if ('nic' in fieldValues)
      temp.nic = fieldValues.nic ? '' : 'This field is required.'
    if ('password' in fieldValues)
      temp.password = fieldValues.password ? '' : 'This field is required.'
    if ('tel1' in fieldValues)
      temp.tel1 =
        fieldValues.tel1.length > 9 ? '' : 'Minimum 10 numbers required.'
    if ('address' in fieldValues)
      temp.address = fieldValues.address ? '' : 'This field is required.'

    setErrors({
      ...temp,
    })

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '')
  }

  //import reusable form
  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialValues,
    true,
    validate,
  )

  //handle submit function
  const handleSubmit = (e) => {
    console.log(initialValues)
    console.log(values)
    e.preventDefault()
    if (validate()) {
      window.alert('testing' + values)

      console.log('values=' + values)
      resetForm()
    }
  }

  return (
    <React.Fragment>
      <Paper>
        <Form onSubmit={handleSubmit}>
          <Grid>
            <Controls.Input
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />
          </Grid>
          <Grid>
            <Controls.Input
              name="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />
          </Grid>
          <Grid>
            <Controls.Input
              name="nic"
              label="NIC"
              value={values.nic}
              onChange={handleInputChange}
              error={errors.nic}
            />
          </Grid>
          <Grid>
            <Controls.Input
              name="email"
              label="Email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
          </Grid>
          <Grid>
            <Controls.Input
              name="tel1"
              label="Phone-1"
              value={values.tel1}
              onChange={handleInputChange}
              error={errors.tel1}
            />
          </Grid>
          <Grid>
            <Controls.Input
              name="tel2"
              label="Phone-2"
              value={values.tel2}
              onChange={handleInputChange}
              error={errors.tel2}
            />
          </Grid>

          <Grid>
            <div>
              <Controls.Button type="submit" text="Submit" />
              <Controls.Button
                text="Reset"
                color="default"
                onClick={resetForm}
              />
            </div>
          </Grid>
        </Form>
      </Paper>
    </React.Fragment>
  )
}

export default AdminForm
