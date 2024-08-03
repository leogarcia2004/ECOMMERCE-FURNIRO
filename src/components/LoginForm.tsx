
import React, { useState, FormEvent } from 'react'
import { validate } from '../utils/validate'
import { User } from '../types/User'

interface FormProps {
  isOpen: boolean;
  setFormOpen: () => void;

}

const LoginForm: React.FC<FormProps> = ({isOpen, setFormOpen}) => { 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<User | null>(null) 


  const handleSubmit = (e: FormEvent) => {

    e.preventDefault() 
    const data: User = { name, email, password } 

    const validadeErros = validate(data) 

    if(Object.keys(validadeErros).length > 0) {
      setErrors(validadeErros) 
      return
    }

    setErrors(null) 
    setName('') 
    setEmail('') 
    setPassword('')  
  }
  
  if(!isOpen) {
    return (

      <div className={isOpen ? ' fixed top-0 right-0 z-50 bg-white h-screen w-full py-16 m-auto flex flex-col justify-center items-center ' : 'fixed top-0 bg-white h-screen w-full  py-16 m-auto flex flex-col justify-center items-center '}>

        <i onClick={setFormOpen} className='fa-solid fa-circle-xmark cursor-pointer text-zinc-500 absolute right-4 top-3'></i>

        <h1 className=' text-center mb-6 font-bold text-3xl'>Cadastre-se!</h1>
        <form onSubmit={handleSubmit} className='bg-white py-8 w-96 px-8 flex flex-col border-zinc-600 border '>

          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="name">Nome</label>
            <input type="name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className='focus:outline-none py-1 pl-1.5  border border-zinc-500 rounded-sm' />
            {errors?.name && (
              <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
            )}
          </div>

          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='focus:outline-none py-1 pl-1.5 border border-zinc-500 rounded-sm' />
            {errors?.email && (
              <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
            )}
          </div>

          <div className='flex flex-col mb-6 gap-1.5'>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='focus:outline-none py-1 pl-1.5  border border-zinc-500 rounded-sm' />
            {errors?.password && (
              <small className="text-xs text-red-500 mt-1">{errors?.password}</small>
            )}
          </div>

            
          <button type="submit" className=' p-2 bg-yellow-600 hover:bg-yellow-700 text-white border rounded-sm font-semibold border-none'>Submit</button>
      </form>
      </div>
      
    )
  } 
  
  return null
}

export default LoginForm