import { IPost } from '@/types/post.interface'
import { FC } from 'react'
import cl from './Board.module.scss'
import { useNavigate } from 'react-router'

interface IProps {
  titleBoard: string
  posts: IPost[]
}

const Board: FC<IProps> = ({ titleBoard, posts }) => {
  const navigate = useNavigate()

  const onClickNews = (post: IPost) => () => {
    navigate(`/category/${post.category}/${post.id}`)
  }

  return (
    <article className={cl.wrapper}>
      <h1 className={cl.title}>{titleBoard}</h1>
      <ul className={cl.news}>
        {posts.map(post => (
          <li key={post.id} onClick={onClickNews(post)}>
            <div className={cl.header}>
              {post.category && <p className={cl.category}>#{post.category}</p>}
              <p className={cl.date}>{post.date}</p>
            </div>

            <p className={cl.newsTitle}>{post.title}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Board
