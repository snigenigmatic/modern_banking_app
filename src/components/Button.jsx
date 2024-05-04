import React from 'react'
import styles from '../styles'

const Button = () => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient rounded-lg font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[10px]`}>
      Get started
    </button>
  )
}

export default Button
