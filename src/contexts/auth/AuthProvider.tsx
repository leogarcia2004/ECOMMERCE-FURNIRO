import { createContext, useContext } from "react";
import { User } from '../../types/User';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'
import { useNavigate } from 'react-router-dom';

type AuthProviderProps = {
    children: React.ReactNode;
};

interface AuthContextType {
    user: User | undefined;
    signInWithEmailAndPassword: (email: string, password: string) => void;
    loading: boolean;
    handleLogOut: () => void;
}

const AuthContext = createContext( {} as AuthContextType );

const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {

    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
    
      const handleLogOut = async () => {
        try {
          await signOut(auth);
          navigate('/');
          auth.onAuthStateChanged((user) => {
            console.log("Estado do usuário após logout:", user); 
          });
        } catch (error) {
          console.error("Erro ao deslogar: ", error);
        }
      };
    return (
        <AuthContext.Provider value={{ user, signInWithEmailAndPassword, loading, handleLogOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthProvider;

