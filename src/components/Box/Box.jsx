import React, {useRef} from 'react';
import styles from './Box.module.css'
import {findAllByDisplayValue} from "@testing-library/react";

const Box = ({children, animateTime, active}) => {

    const boxRef = useRef()
   //Дальнейшая логика:
   //  при нажатии кнопки старт
   //  Взять через реф координаты 1 элемента и 2ого
   //  в useEffect присвоить кругу первоначальные координаты через реф 1ого блока
   //  и transform в 2 секунды отправить второму


    return (
        <>
            <div className={`${styles.wrapper}  ${active ? styles.activeAnimate : null}` }
                 ref={boxRef}
            >
                {children}
            </div>
            {active && <div className={styles.curcle}></div>}

        </>


    );
};

export default Box;