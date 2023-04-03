import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import cl from './NotFoundPage.module.scss'

const NotFoundPage = () => {
	return (
		<WrapperLayout>
			<h1 className={cl.title}>Страница не найдена</h1>
		</WrapperLayout>
	)
}

export default NotFoundPage
