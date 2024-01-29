import React from 'react';
// postcss 형태의 css를 import할 경우 아래와 같은 서식으로 기술한다.
import styles from './Button2.module.css';

export default function Button2() {
    return <button className={styles.button}>Button2</button>;
}