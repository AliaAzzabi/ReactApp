import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import homeright from './home-right.png';
import { AuthContext } from '../context/AuthContext';
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <section className="dark:bg-gray-50 h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          //src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          src={homeright}
          alt="Sample image"
          
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
           Se connecter
          </p>
        </div>
        <form className="login" onSubmit={handleSubmit}>
        <input
          className=" text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          placeholder="Adresse Email"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          placeholder="Mot de passe"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
             Mot de passe oublié?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button  disabled={isLoading}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Connecter
          </button>
        </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        Vous n&apos;avez pas de compte?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;