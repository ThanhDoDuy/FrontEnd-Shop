import React from 'react'
import styles from './Footer.module.scss';
import {AiFillCheckCircle} from 'react-icons/ai'

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      <AiFillCheckCircle size={20}/> {year} All rights Reserved
    </div>
  )
}

export default Footer