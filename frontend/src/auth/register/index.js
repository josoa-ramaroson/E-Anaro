import React, {useState, useContext} from 'react'
import { Input } from '../components/input'
import Button from '../../langing-page/components/button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../layout/authContext';
import axios from 'axios';

const API_URL = 'http://localhost:8082';


export default function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/register`, { username, password });
      const { access_token } = response.data;
      setToken(access_token);

      // Redirect to /home after successful login
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error.response.data);
      setError(error.response.data.message)

    }
  }
  return (
    <div className="flex w-screen h-screen bg-cover"
    >
      <div className="flex-1 p-32 bg-register bg-cover">
        <h1 className="text-5xl text-white">Transformer l'éducation</h1>
        <h1 className="text-5xl text-primary">Avec nous</h1>
      </div>
      <div className="flex-1 bg-secondary text-white flex flex-col justify-center gap-6 p-20">
        <h1 className="text-title ">S'inscrire</h1>
        <h3>Entrez votre identifiant</h3>
        <div className="flex flex-col gap-8 w-[80%]">
          <div className="w-90 flex flex-col  gap-5 justify-center ">
            <Input placeholder="Nom" type="text"/>
            <Input placeholder="Nom d'utilisateur" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Mot de passe" type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <input type="checkbox" id="rester" className="bg-secondary" /> <label for="rester" > Rester connecter</label>
          </div>
          <div>
            <Button order="primary" text="S'inscrire" className="align-middle" onClick={handleSubmit}/>
          </div>
        </div>
       {error && <div><p className="text-red-600">{error}</p></div>}
        <div>
          Vous avez déjà un compte? <Link to="/login" className="text-primary hover:text-white" > se connecter</Link>
        </div>
      </div>
    </div>
  )
}
