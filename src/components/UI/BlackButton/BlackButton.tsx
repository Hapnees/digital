import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cl from './BlackButton.module.scss'

const BlackButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className = '', ...props }) => {
  return (
    <button className={`${cl.button} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default BlackButton
