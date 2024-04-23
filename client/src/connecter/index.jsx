
import React, { useState } from 'react';
import './style.css'; // Assurez-vous que le fichier style.css est présent dans votre projet
import login from './login.png';
import homeright from './home-right.png';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleModeToggle = () => {
    setIsSignUpMode(prevMode => !prevMode);
  };
  return (
    <div>
      <div className={`my-new-container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Se connecter</h2>
              <div className="input-field">
                <i><PersonIcon sx={{ color: 'gry' }} /></i>
                <input type="text" placeholder="Nom d'utilisateur" />
              </div>
              <div className="input-field">
                <i><LockIcon sx={{ color: 'grey' }}/></i>
                <input type="password" placeholder="Mot de passe" />
              </div>
              <input type="submit" defaultValue="Envoyer" className="btnn solid" />

            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
              <i><PersonIcon sx={{ color: 'grey' }}/></i>
                <input type="text" placeholder="Nom d'utilisateur" />
              </div>
              <div className="input-field">
              <i><EmailIcon sx={{ color: 'grey' }}/></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <LockIcon sx={{ color: 'grey' }}/>
                <input type="password" placeholder="Mot de passe" />
              </div>
              <input type="submit" className="btnn" defaultValue="Sign up" />


            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel ">
            <div className="content ">
              <h3>Nouveau ici ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button id="sign-up-btn" className="btnn transparent" onClick={handleSignUpClick}>
                S'inscrire
              </button>
            </div>
            <img src={login} className="image" alt="" />
          </div>
          <div className="panel right-panel ">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button id="sign-in-btn" className="btnn transparent" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src={homeright} className="image" alt="" />
          </div>
        </div>
      </div>
      <script >
        
      </script>
    </div>
  );
}

export default Login;
