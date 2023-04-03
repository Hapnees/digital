import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import BlackButton from '@/components/UI/BlackButton/BlackButton'
import { blogsData } from '@/data/blogs.data'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import { IBreadCrumbs } from '@/types/breadCrumbs.interface'
import { useParams } from 'react-router'
import cl from './SpecificBlogsPage.module.scss'

const SpecificBlogsPage = () => {
	const { username } = useParams<{ username: string }>()

	if (!username) return <h1>Неверный адрес</h1>
	const blog = blogsData.find(blog => blog.username === username)

	if (!blog) return <h1>Блог на найден</h1>

	const breadCrumbs: IBreadCrumbs = {
		main: { title: 'Блоги', href: '/blogs' },
		specific: { title: username, href: `/blogs/${username}` },
	}
	return (
		<WrapperLayout classNameWrapper={cl.wrapper}>
			<BreadCrumbs
				main={breadCrumbs.main}
				specific={breadCrumbs.specific}
				className={cl.breadCrumbs}
			/>
			<section className={cl.header}>
				<div className={cl.userBlock}>
					<img src={blog.avatar} alt='' className={cl.avatar} />
					<div>
						<p className={cl.username}>{blog.username}</p>
						<div className={cl.buttons}>
							<BlackButton>Подписаться</BlackButton>
							<BlackButton>Пожаловаться</BlackButton>
						</div>
					</div>
				</div>

				<div className={cl.blogScontrols}>
					<input type='radio' name='blogControls' id='posts' defaultChecked />
					<label htmlFor='posts'>посты</label>
					<input type='radio' name='blogControls' id='subscribers' />
					<label htmlFor='subscribers'>подписчики</label>
					<input type='radio' name='blogControls' id='aboutBlog' />
					<label htmlFor='aboutBlog'>о блоге</label>
				</div>
			</section>

			<section>
				<ul className={cl.posts}>
					{blog.blogPosts.map(post => (
						<li key={post.id}>
							<div className={cl.postHeader}>
								<p>{blog.username}</p>
								<p className={cl.postDate}>{post.date}</p>
							</div>

							<div className={cl.postBody}>
								<img src={post.thumbnail} alt='' className={cl.postImage} />

								<div>
									<p className={cl.postTitle}>{post.title}</p>
									<p className={cl.postTags}>{post.tags.join(', ')}</p>
									<p className={cl.postText}>{post.body}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</WrapperLayout>
	)
}

export default SpecificBlogsPage
