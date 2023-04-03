import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cl from './BlackButton.module.scss'

const BlackButton: FC<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
	return (
		<button className={cl.button} {...props}>
			{children}
		</button>
	)
}

export default BlackButton
