import { ButtonHTMLAttributes } from "react";
import styles from './styles.module.css';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { type = 'button', ...buttonProps } = props;

  return <button {...buttonProps} className={styles.button} type={type} />;
}