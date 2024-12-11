
import{ useState, FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { validate } from '../../utils/validate'
import { User } from '../../types/User'
import { useNavigate } from 'react-router-dom'
import logoFurniro from '../../assets/logo_furniro.png'
import { useCarrinho } from '../../contexts/CartContext'

const LoginForm = () => { 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<User | null>(null) 
  const { user, signInWithEmailAndPassword, loading } = useCarrinho()
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleSignIn = (e: FormEvent) => {

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
  }

  if(user){
    navigate('/');
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  const navigateLastPage = () => {
    if (from === '/register') {
      navigate('/');
    } else {
      navigate(from, { replace: true });
    }
  };
    return (

      <div className='fixed top-0 right-0 z-50 bg-white h-screen w-full py-16 flex flex-col  items-center'>
        <i onClick={navigateLastPage} className='fas absolute top-8 left-10 fa-arrow-left fa-lg cursor-pointer py-5 px-3 shadow-md bg-white shadow-neutral-400 rounded-full'></i>

        <div className='flex flex-col items-center mb-5'>
            <img src={logoFurniro} alt="Logo furniro" className='mb-[-20px]' />
            <h1 className='text-2xl font-bold'>Furniro</h1>
          </div>

        <form className='bg-white pb-8 pt-5 w-96 px-8  flex flex-col border-zinc-600 border '>
          <h1 className=' text-center mb-6 font-bold text-3xl'>Faça seu login!</h1>
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
            <Link to="/register" className='hover:underline'>Crie a sua conta aqui</Link>
          </div>

          <button onClick={handleSignIn} className='p-2 bg-yellow-600 hover:bg-yellow-700 text-white border rounded-sm  border-none'>Submit</button>
      </form>
      </div>
      
    )
}

export default LoginForm