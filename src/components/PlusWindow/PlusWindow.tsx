import Logo from '../Logo/Logo'
import cl from './PlusWindow.module.scss'

const PlusWindow = () => {
	return (
		<article>
			<div className={cl.logoWrapper}>
				<Logo newsColor='#000' />
			</div>

			<div className={cl.grid}>
				<div>
					<h1 className={cl.title}>Новости</h1>
					<ul className={cl.list}>
						<li>Диджитал</li>
						<li>СМИ</li>
						<li>Творчество</li>
						<li>Маркетинг</li>
						<li>Бизнес</li>
						<li>Общество</li>
					</ul>
				</div>

				<div>
					<h1 className={cl.title}>Спец проекты</h1>
					<ul className={cl.list}>
						<li>Итоги Интервью по шкале эффективности рекламы за 2022 год</li>
						<li>Hate.FM</li>
						<li>Блокчейн</li>
						<li>Мнение рынка</li>
					</ul>
				</div>

				<div>
					<h1 className={cl.title}>Выбор редактора</h1>
					<ul className={cl.list}>
						<li>Рейтинг медиаагентств 2022</li>
						<li>ТОП-30 крупнейших рекламодателей России 2022 г</li>
						<li>Подкасты</li>
						<li>Видео</li>
					</ul>
				</div>

				<div>
					<h1 className={cl.title}>Блоги</h1>
					<ul className={cl.extraList}>
						<li>
							<h2>Светлана Майбродская</h2>
							<p>Как продать слово, которое ничего не значит?</p>
						</li>
						<li>
							<h2>КТС</h2>
							<p>Как разработать приложение в ВК для бизнеса?</p>
						</li>
						<li>
							<h2>Продакт-кэмп</h2>
							<p>
								Как проверить идею стартапа: руководство для амбициозных
								начинающих предпринимателей
							</p>
						</li>
					</ul>
				</div>

				<ul className={cl.miniList}>
					<li>Реклама на сайте</li>
					<li>Контакты</li>
					<li>Руководящие указания</li>
					<li>Каталог компаний</li>
					<li>Рейтинги</li>
					<li>Бизнес-блоги</li>
					<li>Форум</li>
				</ul>
			</div>
		</article>
	)
}

export default PlusWindow
