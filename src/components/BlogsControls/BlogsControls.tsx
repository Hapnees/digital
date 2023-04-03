import { IBlogControl } from '@/types/blogs.interface'
import { FC } from 'react'
import cl from './BlogsControls.module.scss'

interface IProps {
	// FIXME: убрать any
	setValue: (value: any) => void
	controls: IBlogControl[]
}

const BlogsControls: FC<IProps> = ({ controls, setValue }) => {
	const name = Date.now().toString()

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
