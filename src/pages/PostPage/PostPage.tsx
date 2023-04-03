import Board from '@/components/Board/Board'
import PostCard from '@/components/PostCard/PostCard'
import { widths } from '@/data/css.vars'
import { postsData } from '@/data/posts.data'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import { ECategory } from '@/types/category.interface'
import { useParams } from 'react-router'
import cl from './PostPage.module.scss'

const PostPage = () => {
	const { category, id } = useParams<{ category: string; id: string }>()

	const boardPosts = postsData.filter(post => post.category === category)

	if (!id) return <h1>Неверный адрес</h1>

	const post = postsData.find(post => post.id === +id)

	return (
		<WrapperLayout
			width={widths.big}
			classNameWrapper={cl.wrapper}
			classNameContainer={cl.container}
		>
			{category && <Board titleBoard={category} posts={boardPosts} />}
			{post ? <PostCard post={post} /> : <h1>Пост не найден</h1>}
		</WrapperLayout>
	)
}

export default PostPage
