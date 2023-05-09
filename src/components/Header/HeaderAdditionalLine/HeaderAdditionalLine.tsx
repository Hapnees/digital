import { Link, useLocation } from 'react-router-dom'
import cl from './HeaderAdditionalLine.module.scss'
import parentCl from '../Header.module.scss'

const navs = [
  { title: 'Интернет-маркетинг', href: 'internetMarketing' },
  { title: 'Киберспорт', href: 'cybersport' },
  { title: 'Digital-агенства', href: 'digital' },
  { title: 'Исследования', href: 'researches' },
]

const HeaderAdditionalLine = () => {
  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <section className={cl.wrapper}>
      <nav className={cl.nav}>
        {navs.map(nav => (
          <Link
            key={nav.title}
            to={`/category/${nav.href}`}
            className={
              `/category/${nav.href}` === pathname ? parentCl.tab_active : ''
            }
          >
            {nav.title}
          </Link>
        ))}
      </nav>
    </section>
  )
}

export default HeaderAdditionalLine
