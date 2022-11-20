import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaShoppingCart,FaTimes,FaUserCircle } from 'react-icons/fa';
import {HiOutlineMenu} from 'react-icons/hi';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../firebase/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const logo = (
  <div className={styles.logo}>
    <NavLink to="/">
      <h2>
        TN<span>Shop</span>
      </h2>
    </NavLink>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <NavLink to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </NavLink>
  </span>
);

const activeNavLink = ({isActive}) =>
(isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDislayName] = useState("");

  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const hideMenu = () =>{
    setShowMenu(false)
  };

  const logoutHandler = (e) =>{
    signOut(auth).then(() => {
      toast.success("Logout successful ...");
      navigate('/')
    }).catch((error) => {
      toast.error(error.message);
    });    
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const uName = user.displayName || user.email ;
        setDislayName(uName);
      } else {
        setDislayName("");
      }
    });
  },[])

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div className={showMenu? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` :
           `${styles["nav-wrapper"]}`} onClick={hideMenu}>
          </div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={25} color="#fff"/>
            </li>
            <li>
              <NavLink 
                to="/" 
                className={activeNavLink}
              >Home</NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={activeNavLink}
                >Contact Us</NavLink>
            </li>
          </ul>

          <div className={styles["header-right"]}
            onClick={hideMenu}
          >
            <span className={styles["links"]}>
              <a href='#'>
                <FaUserCircle size={16}/>
                Hi, {displayName}
              </a>
              <NavLink to="/login" className={activeNavLink}>Login</NavLink>
              <NavLink to="/register" className={activeNavLink}>Register</NavLink>
              <NavLink to="/order-history" className={activeNavLink}>My order</NavLink>
              <NavLink to="/" onClick={logoutHandler} >Logout</NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles["menu-icon"]} onClick={toggleMenu}>
          {cart}
          <HiOutlineMenu size={30}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
