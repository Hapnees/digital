import PostsGrid from '@/components/PostsGrid/PostsGrid'
import { postsData } from '@/data/posts.data'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import { ECategory } from '@/types/category.interface'
import { useParams } from 'react-router'

const CategoryPage = () => {
	const { category } = useParams<{ category: string }>()
	const currentCategory = ECategory[category as keyof typeof ECategory]

	const posts = postsData.filter(post => post.category === currentCategory)

	return (
		<WrapperLayout>
			<PostsGrid posts={posts} columns={3} />
		</WrapperLayout>
	)
}

export default CategoryPage
