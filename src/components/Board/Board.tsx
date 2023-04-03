import { IPost } from '@/types/post.interface'
import { FC } from 'react'
import cl from './Board.module.scss'

interface IProps {
	titleBoard: string
	posts: (IPost & Partial<{ category: string }>)[]
}

const Board: FC<IProps> = ({ titleBoard, posts }) => {
	return (
		<article className={cl.wrapper}>
			<h1 className={cl.title}>{titleBoard}</h1>
			<ul className={cl.news}>
				{posts.map(post => (
					<li key={post.id}>
						<div className={cl.header}>
							{post.category && <p className={cl.category}>#{post.category}</p>}
							<p className={cl.date}>{post.date}</p>
						</div>

						<p className={cl.newsTitle}>{post.title}</p>
					</li>
				))}
			</ul>
		</article>
	)
}

export default Board
