import { IBlog, IBlogPost } from '@/types/blogs.interface'
import { FC } from 'react'
import cl from './BlogsMaterialsGrid.module.scss'

interface IProps {
	blogs: (IBlogPost & Pick<IBlog, 'username' | 'avatar'>)[]
	onClickUsername: (username: string) => void
}

const BlogsMaterialsGrid: FC<IProps> = ({ blogs, onClickUsername }) => {
	return (
		<ul className={cl.grid}>
			{blogs.map(blog => (
				<li key={blog.id}>
					<div className={cl.header}>
						<img src={blog.avatar} alt='' />
						<p
							className={cl.username}
							onClick={() => onClickUsername(blog.username)}
						>
							{blog.username}
						</p>
						<p className={cl.date}>{blog.date}</p>
					</div>

					<div className={cl.content}>
						<img src={blog.thumbnail} alt='' className={cl.thumbnail} />

						<div>
							<h1 className={cl.title}>{blog.title}</h1>
							<p className={cl.body}>{blog.body}</p>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}

export default BlogsMaterialsGrid
