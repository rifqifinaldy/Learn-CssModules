import React from 'react'
import styles from './CustomButton.module.css'; 

export const CustomButton = ({
    children, 
    type, 
    onClick, 
    Style, 
    Shape,
    Size,
    className
}) => {

        const checkClassName = className ? className : "";

    return (
        <button className={`${styles.myBtn} ${styles[Style]} ${styles[Shape]} ${styles[Size]} ${checkClassName}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
