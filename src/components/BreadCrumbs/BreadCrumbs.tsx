import { IBreadCrumbs } from '@/types/breadCrumbs.interface'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import cl from './BreadCrumbs.module.scss'

const BreadCrumbs: FC<
	IBreadCrumbs &
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ main, specific, className, ...props }) => {
	return (
		<div className={`${cl.wrapper} ${className}`} {...props}>
			<Link to={main.href}>{main.title}</Link> &gt;{' '}
			<Link to={specific.href}>{specific.title}</Link>
		</div>
	)
}

export default BreadCrumbs
