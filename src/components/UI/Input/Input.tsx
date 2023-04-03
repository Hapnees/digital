import searchIcon from '@/assets/Input/search.svg'
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cl from './Input.module.scss'

const Input: FC<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...props }) => {
	return (
		<div className={`${cl.wrapper} ${className}`}>
			<input type='text' className={cl.input} {...props} />
			<img src={searchIcon} alt='' className={cl.searchIcon} />
		</div>
	)
}

export default Input
