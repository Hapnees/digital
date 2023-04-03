import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cl from './Modal.module.scss'

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	children: JSX.Element
	close: () => void
}

const Modal: FC<IProps> = ({ children, close, ...props }) => {
	return (
		<section className={cl.wrapper} {...props}>
			<div className={cl.closeWrapper} onClick={close}>
				<div className={cl.close}></div>
			</div>
			{children}
		</section>
	)
}

export default Modal
