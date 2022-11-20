import React, { useState } from "react";
import styles from './Auth.module.scss';
import LoginImage from '../../assets/login.png';
import {Link,useNavigate } from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa';
import Card from '../../components/card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/config';
import Loader from '../../components/loader/Loader';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const LoginHandler = (e) => { 
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Login successful ...");
        navigate('/home')
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
        navigate('/login');
      });
  };

  const signInGoogleHandler = (e) =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Login with Google successful ...");
        navigate('/home');
      }).catch((error) => {
        // Handle Errors here.
          toast.error(error.message);
          setIsLoading(false);
          navigate('/login');
      });
  };

  return (
    <>
    <ToastContainer></ToastContainer>
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={LoginImage} alt="login" width="400"/>
        </div>
        <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form onSubmit={LoginHandler}>
          <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className='--btn --btn-primary --btn-block'>Login</button>
            <div className={styles.links}>
              <Link to="/reset">Reset Password</Link>
            </div>
            <p>--or--</p>
          </form>
          <button 
            className='--btn --btn-danger --btn-block'
            onClick={signInGoogleHandler}
          ><FaGoogle color='#fff'/>Login with Google</button>
          <span className={styles.register}>
            <p>You don't have any account?</p>
            <Link to="/register" >Register</Link>
          </span>
        </div>
        </Card>
    </section>
    </>
  )
}

export default Login