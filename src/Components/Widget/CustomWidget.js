import React from 'react'
import styles from './CustomWidget.module.css'

const CustomWidget = ({
    Title,
    Subtitle,
    Style,
    Size,
    className,
}) => {
    const checkClassName = className ? className : "";
    return (
        <div className={`${styles.myWidget} ${styles[Style]} ${styles[Size]} ${checkClassName}`}>
            <h5>{Title}</h5>
            <div className={`${styles[Style]===styles.outline ?  styles.borderOutline : styles.border}`}></div>
            <p>{Subtitle}</p>
        </div>
    )
}

export default CustomWidget
