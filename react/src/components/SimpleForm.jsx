import React from 'react'
import simpleform from '../validations/simpleform'

function SimpleForm() {

  //Final submit function
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  //Custom hook call
  const {handleChange, values, errors, handleSubmit} = simpleform(formLogin);

  return (
    <div>
      <form>
        <label htmlFor="user">User Name</label>
        <input type="text" name="user" id="user" onChange={handleChange} />
        {
          errors.email && <h3>{errors.user}</h3>
        }
        <br/>

        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" id="pass" onChange={handleChange}/>
        {
          errors.pass && <h3>{errors.pass}</h3>
        }
        <br/>

        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>



    </div>
  )
}

export default SimpleForm
