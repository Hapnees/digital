import Logo from '@/components/Logo/Logo'
import Modal from '@/components/Modal/Modal'
import PlusWindow from '@/components/PlusWindow/PlusWindow'
import Input from '@/components/UI/Input/Input'
import LoginButton from '@/components/UI/LoginButton/LoginButton'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import cl from './HeaderMainLine.module.scss'
import parentCl from '../Header.module.scss'

type ITitleNav = 'Блоги' | 'Спец. проекты' | 'Лекториум' | 'Компании' | 'Законы'

interface INav {
  title: ITitleNav
  href: string
}

const HeaderMainLine = () => {
  const navigte = useNavigate()
  const [isShowModal, setIsShowModal] = useState(false)

  const { pathname } = useLocation()

  const onClickLogo = () => navigte('/')

  const onClickCross = () => setIsShowModal(true)
  const onClickClose = () => setIsShowModal(false)

  const navs: INav[] = [
    { title: 'Блоги', href: '/blogs' },
    { title: 'Спец. проекты', href: '/projects' },
    { title: 'Лекториум', href: '/lectorium' },
    { title: 'Компании', href: '/companies' },
    { title: 'Законы', href: '/category/laws' },
  ]

  return (
    <section className={cl.wrapper}>
      <article className={cl.container}>
        <Logo onClick={onClickLogo} />

        {/*CONTROLS*/}
        <article className={cl.controls}>
          {/*NAVBAR*/}
          <nav className={cl.navbar}>
            {navs.map(nav => (
              <Link
                key={nav.title}
                to={nav.href}
                className={
                  nav.href === pathname && pathname !== '/'
                    ? parentCl.tab_active
                    : ''
                }
              >
                {nav.title}
              </Link>
            ))}
          </nav>

          <div className={cl.cross} onClick={onClickCross}></div>

          <Input placeholder='Поиск...' />

          <LoginButton>Войти</LoginButton>
        </article>
      </article>
      {isShowModal && (
        <Modal close={onClickClose}>
          <PlusWindow />
        </Modal>
      )}
    </section>
  )
}

export default HeaderMainLine
