import React from 'react'
import Input from './Input'
import Button from './Button'

function Form() {
  return (
    <form>
        <Input id="email" label="Email" required/>
        <Input id="password" type="password" label="Senha"/>
        <Button />
    </form>
  )
}

export default Form