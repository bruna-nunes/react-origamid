import React from 'react'
import Input from './Input'

function Form() {
  return (
    <form>
        <label htmlFor="nome">Nome</label>
        <Input/>
        <label htmlFor="mail">Email</label>
        <Input />
    </form>
  )
}

export default Form