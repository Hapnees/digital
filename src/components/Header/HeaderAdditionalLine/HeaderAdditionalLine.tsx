import { Link } from 'react-router-dom'
import cl from './HeaderAdditionalLine.module.scss'

const HeaderAdditionalLine = () => {
	return (
		<section className={cl.wrapper}>
			<nav className={cl.nav}>
				<Link to='/'>Интернет-маркетинг</Link>
				<Link to='/'>Киберспорт</Link>
				<Link to='/'>Digital-агенства</Link>
				<Link to='/'>Исследования</Link>
			</nav>
		</section>
	)
}

export default HeaderAdditionalLine
