import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button
        onClick={toggleForm}
        className="mt-4 rounded bg-cerulean px-4 py-2 font-bold text-white hover:bg-gunmetal"
      >
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Login;
