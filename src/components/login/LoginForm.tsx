
import{ useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { validate } from '../../utils/validate'
import { User } from '../../types/User'
import { auth } from '../../services/firebaseConfig'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom'

const LoginForm = () => { 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<User | null>(null) 

  const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {

    e.preventDefault() 
    signInWithEmailAndPassword(email, password);

    const data: User = { email, password } 

    const validadeErros = validate(data) 

    if(Object.keys(validadeErros).length > 0) {
      setErrors(validadeErros) 
      return
    }

    setErrors(null) 
    setEmail('') 
    setPassword('')  

    navigate('/')
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  }
  
    return (

      <div className=' fixed top-0 right-0 z-50 bg-white h-screen w-full py-16 m-auto flex flex-col justify-center items-center '>

        <h1 className=' text-center mb-6 font-bold text-3xl'>Faca seu login!</h1>
        <form onSubmit={handleSubmit} className='bg-white py-8 w-96 px-8 flex flex-col border-zinc-600 border '>

          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='focus:outline-none py-1 pl-1.5 border border-zinc-500 rounded-sm' />
            {errors?.email && (
              <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
            )}
          </div>

          <div className='flex flex-col mb-3 gap-1.5'>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='focus:outline-none py-1 pl-1.5  border border-zinc-500 rounded-sm' />
            {errors?.password && (
              <small className="text-xs text-red-500 mt-1">{errors?.password}</small>
            )}
          </div>

          <div className="flex justify-center gap-1 mb-3 text-xs">
            <p>Você não tem uma conta?</p>
            <Link to="/register">Crie a sua conta aqui</Link>
          </div>

            
          <button type='submit' className=' p-2 bg-yellow-600 hover:bg-yellow-700 text-white border rounded-sm font-semibold border-none'>Submit</button>
      </form>
      </div>
      
    )
}

export default LoginForm