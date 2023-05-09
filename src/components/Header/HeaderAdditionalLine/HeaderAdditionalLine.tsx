import { Link } from 'react-router-dom'
import cl from './HeaderAdditionalLine.module.scss'

const HeaderAdditionalLine = () => {
  return (
    <section className={cl.wrapper}>
      <nav className={cl.nav}>
        <Link to='/category/internetMarketing'>Интернет-маркетинг</Link>
        <Link to='/category/cybersport'>Киберспорт</Link>
        <Link to='/category/digital'>Digital-агенства</Link>
        <Link to='/category/researches'>Исследования</Link>
      </nav>
    </section>
  )
}

export default HeaderAdditionalLine
