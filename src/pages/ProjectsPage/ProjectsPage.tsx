import { projectsData } from '@/data/projects.data'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import style from './ProjectsPage.module.scss'

const ProjectsPage = () => {
	return (
		<WrapperLayout>
			<ul className={style.list}>
				{projectsData.map(project => (
					<li key={project.id}>
						<p className={`${style.title} ${style.topTitle}`}>
							{project.title}
						</p>
						<div className={style.topContent}>
							<div>
								<img src={project.img} alt='' />
							</div>
							<div className={style.mainNews}>
								<p className={style.date}>{project.news[0].date}</p>
								<p className={style.title}>{project.news[0].title}</p>
								<p className={style.description}>
									{project.news[0].description}
								</p>
							</div>
						</div>

						<ul className={style.newsList}>
							{project.news.slice(1).map(news => (
								<li key={news.id}>
									<p className={style.date}>{news.date}</p>
									<p className={style.title}>{news.title}</p>
									<p className={style.description}>{news.description}</p>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</WrapperLayout>
	)
}

export default ProjectsPage
