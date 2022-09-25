import { ButtonHTMLAttributes } from "react";

import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...rest }: Props) {
  return (
    <button className={styles.button} type="submit" {...rest}>
      {children}
    </button>
  )
}