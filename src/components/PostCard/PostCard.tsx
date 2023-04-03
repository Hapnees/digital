import { IBreadCrumbs } from '@/types/breadCrumbs.interface'
import { IPost } from '@/types/post.interface'
import { FC } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import cl from './PostCard.module.scss'

interface IProps {
	post: IPost
}

const PostCard: FC<IProps> = ({ post }) => {
	const breadCrumbs: IBreadCrumbs = {
		main: { title: 'Новости', href: '/' },
		specific: { title: post.category, href: `/category/${post.id}` },
	}

	return (
		<article>
			<div className={cl.header}>
				<BreadCrumbs main={breadCrumbs.main} specific={breadCrumbs.specific} />

				<p className={cl.date}>{post.date}</p>
			</div>
			<h1 className={cl.title}>{post.title}</h1>
			<h2 className={cl.subtitle}>{post.subtitle}</h2>

			<img src={post.img} alt='' className={cl.img} />

			<div className={cl.body}>{post.body()}</div>
		</article>
	)
}

export default PostCard
