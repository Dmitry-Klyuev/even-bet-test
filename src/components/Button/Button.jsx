import React, {useEffect, useState} from 'react';
import styles from './Button.module.css'

export const Button = ({children, active, setActive}) => {
    const [time, setTime] = useState(5)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (time === 0) {
                setActive(true)
                setTime(5)
                return
            }
            if (!active) {
                setTime(prev => prev - 1)
            }
            return clearTimeout(timer)
        }, 1000)
    }, [time, active])


    console.log(active);
    return (
        <div className={`${styles.btn} ${active ? styles.activeBtn : styles.disabledBtn}`}
             onClick={() => setActive(false)}
        >
            {active ? children : time}
        </div>
    );
};