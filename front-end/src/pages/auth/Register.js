import React, { useState } from "react";
import styles from "./Auth.module.scss";
import RegisterImage from "../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/config';
import Loader from '../../components/loader/Loader';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if(password !== cPassword){
      toast.error("Password does not match")
    };
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registeration successful ...");
        navigate('/login')
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
        navigate('/register');
      });

  };

  return (
    <>
    <ToastContainer></ToastContainer>
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
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
            <input
              type="password"
              value={cPassword}
              placeholder="Confirm Password"
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>
          <span className={styles.register}>
            <p>You already have an account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={RegisterImage} alt="register" width="400" />
      </div>
    </section>
    </>
  );
};

export default Register;
