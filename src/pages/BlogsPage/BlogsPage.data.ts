import { blogsData } from '@/data/blogs.data'
import { IBlog, IBlogControl, IBlogPost } from '@/types/blogs.interface'
import { IBottomControls, ITopControls } from './BlogsPage.interface'

export const allMaterials = blogsData.reduce(
	(accum: (IBlogPost & Pick<IBlog, 'username' | 'avatar'>)[], item) => {
		const result = item.blogPosts.map(post => ({
			...post,
			username: item.username,
			avatar: item.avatar,
		}))

		accum.push(...result)
		return accum
	},
	[]
)

export const popularMaterials = allMaterials.filter(post => post.isPopular)

export const blogsControlsTop: IBlogControl<ITopControls>[] = [
	{ id: 'blogsPopular', title: 'Популярные блоги', isDefaultChecked: true },
	{ id: 'blogsApp', title: 'Все' },
]

export const blogsControlsBottom: IBlogControl<IBottomControls>[] = [
	{
		id: 'materialPopulars',
		title: 'Популярные материалы',
		isDefaultChecked: true,
	},
	{ id: 'materialAll', title: 'Все' },
]

export const popularBlogs = blogsData.filter(blog => blog.isPopular)
