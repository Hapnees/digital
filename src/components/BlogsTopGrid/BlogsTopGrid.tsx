import { IBlog } from '@/types/blogs.interface'
import { FC } from 'react'
import cl from './BlogsTopGrid.module.scss'

interface IProps {
	blogs: IBlog[]
	onClickUsername: (username: string) => void
}

const BlogsTopGrid: FC<IProps> = ({ blogs, onClickUsername }) => {
	return (
		<ul className={cl.grid}>
			{blogs.map(blog => (
				<li key={blog.id}>
					<img src={blog.avatar} alt='' />
					<p onClick={() => onClickUsername(blog.username)}>{blog.username}</p>
				</li>
			))}
		</ul>
	)
}

export default BlogsTopGrid
