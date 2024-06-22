import React,{useState, useContext, useEffect} from 'react'
import { Input } from '../components/input'
import Button from '../../langing-page/components/button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../layout/authContext';
import axios from 'axios';

const API_URL = 'http://localhost:8082';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      const { access_token } = response.data;
      setToken(access_token);

      // Redirect to /home after successful login
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <div className="flex w-screen h-screen"
    >
      <div className="flex-1 p-24 bg-login bg-cover">
      <h1 className="text-5xl text-white">Transformer l'éducation</h1>
      </div>
      <div className="flex-1 bg-secondary text-white flex flex-col justify-center gap-6 p-20">
        <h1 className="text-title ">Connexion</h1>
        <h3>Entrez votre identifiant</h3>
        <div className="flex flex-col gap-8 w-[80%]">
          <div className="w-90 flex flex-col  gap-5 justify-center ">

            <Input placeholder="Email" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Mot de passe" type="password" onChange= {(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <input type="checkbox"  id="rester" className="bg-secondary"/> <label for="rester" > Rester connecter</label>
          </div>
          <div>
            <Button order="primary" text="Commencer" className="align-middle" onClick={handleSubmit}/>
          </div>
        </div>

        <div>
          Pas encore de compte? <Link to="/register" className="text-primary hover:text-white" > s'inscrire</Link>
        </div>
      </div>
    </div>
  )
}
