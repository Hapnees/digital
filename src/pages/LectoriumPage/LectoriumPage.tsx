import ReactPlayer from 'react-player'
import style from './LectoriumPage.module.scss'
import { lectoriumData } from '@/data/lectorium.data'

const LectoriumPage = () => {
  return (
    <ul className={style.list}>
      {lectoriumData.map(data => (
        <li key={data.id}>
          <p className={style.date}>{data.date}</p>
          <p className={style.title}>{data.title}</p>
          <div>
            <div className={style.content}>
              <ReactPlayer url={data.url} controls width={462} height={260} />
              <div className={style.info}>
                <p className={style.info__body}>{data.body}</p>
                <a href={data.url} className={style.info__url}>
                  {data.url}
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default LectoriumPage
