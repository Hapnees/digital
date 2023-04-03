import Board from '@/components/Board/Board'
import PostsGrid from '@/components/PostsGrid/PostsGrid'
import { postsData } from '@/data/posts.data'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import cl from './HomePage.module.scss'

const HomePage = () => {
	const mainIndexes = [1, 3, 5, 7]
	const posts = postsData.filter(post => mainIndexes.includes(post.id))

	const boardPosts = postsData.filter(post => post.isPopular)

	return (
		<WrapperLayout classNameContainer={cl.container}>
			<PostsGrid posts={posts} />
			<Board titleBoard='ПОПУЛЯРНОЕ' posts={boardPosts} />
		</WrapperLayout>
	)
}

export default HomePage
