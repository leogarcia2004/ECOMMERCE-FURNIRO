
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
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [errors, setErrors] = useState<User | null>(null) 


  const handleSubmit = (e: FormEvent) => {

    e.preventDefault() 
    const data: User = { name, email, password, confirmPassword, agree } 

    const validadeErros = validate(data) 

    if(Object.keys(validadeErros).length > 0) {
      setErrors(validadeErros) 
      return
    }


    setErrors(null) 
    setName('') 
    setEmail('') 
    setPassword('') 
    setConfirmPassword('') 
    setAgree(false)

    console.log(data)
  }


  
  
  if(!isOpen) {
    return (

      <div className='bg-white h-fit md:w-3/6 w-full sticky  py-16 m-auto z-10 flex flex-col justify-center items-center '>

        <i onClick={setFormOpen} className='fa-solid fa-circle-xmark cursor-pointer text-zinc-500 absolute right-4 top-3'></i>

        <h1 className=' text-center mb-6 text-amber-400 font-bold text-3xl'>Cadastre-se!</h1>
        <form onSubmit={handleSubmit} className='bg-white py-8 w-96 px-8 flex flex-col border-amber-300 border '>

          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="name">Nome</label>
            <input type="name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className=' focus:bg-amber-300 focus:outline-none py-1 pl-1.5 hover:bg-amber-200 bg-amber-300 rounded-sm border-none' />
            {errors?.name && (
              <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
            )}
          </div>

          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className=' focus:bg-amber-300 focus:outline-none py-1 pl-1.5 hover:bg-amber-200 bg-amber-300 rounded-sm border-none' />
            {errors?.email && (
              <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
            )}
          </div>

          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className=' focus:bg-amber-300 focus:outline-none py-1 pl-1.5 hover:bg-amber-200 bg-amber-300 rounded-sm border-none' />
            {errors?.password && (
              <small className="text-xs text-red-500 mt-1">{errors?.password}</small>
            )}
          </div>

          <div className='flex flex-col mb-2 gap-1.5'>
            <label htmlFor="confirmPassword">Confirme sua senha</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className=' focus:bg-amber-300 focus:outline-none py-1 pl-1.5 hover:bg-amber-200 bg-amber-300 rounded-sm border-none' />
            {errors?.confirmPassword && (
              <small className="text-xs text-red-500 mt-1">{errors?.confirmPassword}</small>
            )}
          </div>

          <div className='flex flex-col mb-6 '>
            <div className='flex items-center gap-2'>
            <input type="checkbox" id="rememberMe" name="rememberMe" checked={agree} onChange={(e) => setAgree(e.target.checked)} className={ agree ? 'appearance-none h-5 w-5 rounded-full cursor-pointer bg-amber-300 fas fa-check fa-xs flex justify-center items-center checked:text-white checked:bg-amber-300 focus:outline-none ' : 'appearance-none h-5 w-5 rounded-full cursor-pointer bg-amber-300 flex justify-center items-center focus:outline-none' } />
              <label htmlFor="rememberMe" className='text-sm'>Aceito os termos de uso</label>
            </div>
            {errors?.agree && (
              <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
            )}
          </div>
            
          <button type="submit" className=' p-2 border-amber-300 text-amber-300 border rounded-sm hover:bg-amber-300 hover:text-white font-semibold'>Submit</button>
      </form>
      </div>
      
    )
  }  
}

export default LoginForm