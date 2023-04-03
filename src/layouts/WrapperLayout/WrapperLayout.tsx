import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react'
import cl from './WrapperLayout.module.scss'

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	classNameContainer?: string
	classNameWrapper?: string
	width?: number
}

const WrapperLayout: FC<IProps> = ({
	children,
	width = 1680,
	classNameContainer,
	classNameWrapper,
	...props
}) => {
	return (
		<main className={`${cl.wrapper} ${classNameWrapper}`}>
			<section
				className={`${cl.container} ${classNameContainer}`}
				style={{ maxWidth: `${width}px` }}
				{...props}
			>
				{children}
			</section>
		</main>
	)
}

export default WrapperLayout
