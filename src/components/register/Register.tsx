
import React, { useState, FormEvent } from 'react'
import { validate } from '../../utils/validate'
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../services/firebaseConfig'
import { User } from '../../types/User'
import { useNavigate } from 'react-router-dom'
import logoFurniro from '../../assets/logo_furniro.png'

const Register: React.FC = () => { 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<User | null>(null) 
  const navigate = useNavigate()

  const [createUserWithEmailAndPassword, loading] =
  useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e: FormEvent) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);

    const data: User = { name, email, password, confirmPassword: password } 
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
    navigate('/login') 
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  const navigateLogin = () => {
    navigate('/login')
  }
  
    return (

      <div className=' fixed top-0 right-0 z-50 bg-white h-full overflow-y-auto w-full m-auto flex flex-col items-center '>

        <i onClick={navigateLogin} className='fas absolute top-8 left-10 fa-arrow-left fa-lg cursor-pointer py-5 px-3 shadow-md bg-white shadow-neutral-400 rounded-full'></i>
        <div className='flex flex-col items-center mb-5'>
            <img src={logoFurniro} alt="Logo furniro" className='mb-[-20px]' />
            <h1 className='text-2xl font-bold'>Furniro</h1>
        </div>
        <form className='bg-white py-8 w-96 px-8 flex flex-col border-zinc-600 border '>
          <h1 className=' text-center mb-6 font-bold text-3xl'>Cadastre-se!</h1>
          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="name">Nome</label>
            <input type="name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className='focus:outline-none py-1 pl-1.5  border border-zinc-500 rounded-sm' />
            {errors?.name && (
              <small className="text-xs text-red-500 ">{errors?.name}</small>
            )}
          </div>

          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='focus:outline-none py-1 pl-1.5 border border-zinc-500 rounded-sm' />
            {errors?.email && (
              <small className="text-xs text-red-500 ">{errors?.email}</small>
            )}
          </div>

          <div className='flex flex-col mb-6 gap-1.5'>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='focus:outline-none py-1 pl-1.5  border border-zinc-500 rounded-sm' />
            {errors?.password && (
              <small className="text-xs text-red-500">{errors?.password}</small>
            )}
          </div>

          <div className='flex flex-col mb-6 gap-1.5'>
            <label htmlFor="password">Confirme sua senha:</label>
            <input type="password" id="password" name="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='focus:outline-none py-1 pl-1.5  border border-zinc-500 rounded-sm' />
            {errors?.confirmPassword && (
              <small className="text-xs text-red-500">{errors?.confirmPassword}</small>
            )}
          </div>

          <button onClick={handleSignOut} className=' p-2 bg-yellow-600 hover:bg-yellow-700 text-white border rounded-sm border-none'>Submit</button>
      </form>
      </div>
      
    )
  
}

export default Register