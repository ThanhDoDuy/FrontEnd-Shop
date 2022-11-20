import React, { useState } from "react";
import styles from './Auth.module.scss';
import ResetImage from '../../assets/forgot.png';
import { Link } from "react-router-dom";
import Card from '../../components/card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from '../../firebase/config';
import Loader from '../../components/loader/Loader';

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPasswordHandler = (e) =>{
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setIsLoading(false);
        toast.success("Check email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });

  };

  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={ResetImage} alt="reset" width="400"/>
        </div>
        <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form onSubmit={resetPasswordHandler}>
            <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
             <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
            <div className={styles.links}>
              <Link to="/login">--Login</Link>
              <Link to="/register">--Register</Link>
            </div>
          </form>
        </div>
        </Card>
    </section>
    </>
  )
}

export default Reset