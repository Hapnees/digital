import BlogsControls from '@/components/BlogsControls/BlogsControls'
import BlogsMaterialsGrid from '@/components/BlogsMaterialsGrid/BlogsMaterialsGrid'
import BlogsTopGrid from '@/components/BlogsTopGrid/BlogsTopGrid'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { blogsControlsBottom, blogsControlsTop } from './BlogsPage.data'
import { IBottomControls, ITopControls } from './BlogsPage.interface'
import cl from './BlogsPage.module.scss'
import { getBottomBlogsContent } from './utils/getBottomBlogsContent'
import { getTopBlogsContent } from './utils/getTopBlogsContent'

const BlogsPage = () => {
	const navigate = useNavigate()

	const [controlsTopValue, setControlsTopValue] = useState(
		blogsControlsTop.find(el => el.isDefaultChecked)?.title
	)
	const [controlsBottomValue, setControlsBottomValue] = useState(
		blogsControlsBottom.find(el => el.isDefaultChecked)?.title
	)

	const onChangeControlsTop = (value: ITopControls) =>
		setControlsTopValue(value)

	const onChangeControlsBottom = (value: IBottomControls) =>
		setControlsBottomValue(value)

	const topBlogsContent = getTopBlogsContent(controlsTopValue)
	const bottomBlogsContent = getBottomBlogsContent(controlsBottomValue)

	const onClickUsername = (username: string) => navigate(`/blogs/${username}`)

	return (
		<WrapperLayout>
			<section className={cl.header}>
				<BlogsControls
					controls={blogsControlsTop}
					setValue={onChangeControlsTop}
				/>
				<BlogsTopGrid
					blogs={topBlogsContent}
					onClickUsername={onClickUsername}
				/>
			</section>

			<section>
				<BlogsControls
					controls={blogsControlsBottom}
					setValue={onChangeControlsBottom}
				/>

				<BlogsMaterialsGrid
					blogs={bottomBlogsContent}
					onClickUsername={onClickUsername}
				/>
			</section>
		</WrapperLayout>
	)
}

export default BlogsPage
