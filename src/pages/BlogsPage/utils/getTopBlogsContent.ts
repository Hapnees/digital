import { blogsData } from '@/data/blogs.data'
import { popularBlogs } from '../BlogsPage.data'
import { ITopControls } from '../BlogsPage.interface'

export const getTopBlogsContent = (
	controlsTopValue: ITopControls | undefined
) => {
	switch (controlsTopValue) {
		case 'Популярные блоги':
			return popularBlogs
		case 'Все':
			return blogsData
		default:
			return []
	}
}
