import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cl from './LoginButton.module.scss'

const LoginButton: FC<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
	return (
		<button className={cl.button} {...props}>
			{children}
		</button>
	)
}

export default LoginButton
