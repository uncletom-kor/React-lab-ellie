import React from 'react';

// postCss 형태의 css를 import할 경우 아래와 같은 서식으로 기술한다.
import styles from './Button1.module.css';

export default function Button1() {
    return <button className={styles.button}>Button1</button>;
}
