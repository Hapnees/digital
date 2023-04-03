import { IBlogControl } from '@/types/blogs.interface'
import { FC } from 'react'
import cl from './BlogsControls.module.scss'

interface IProps {
	// FIXME: убрать any
	setValue: (value: any) => void
	controls: IBlogControl[]
	name: string
}

const BlogsControls: FC<IProps> = ({ controls, name, setValue }) => {
	const onChangeRadio = (value: string) => setValue(value)

	return (
		<ul className={cl.blogsControls}>
			{controls.map(control => (
				<li key={control.id}>
					<input
						type='radio'
						name={name}
						id={control.id}
						defaultChecked={control.isDefaultChecked}
						onChange={() => onChangeRadio(control.title)}
					/>
					<label htmlFor={control.id}>{control.title}</label>
				</li>
			))}
		</ul>
	)
}

export default BlogsControls
