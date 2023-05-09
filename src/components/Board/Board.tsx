import { IPost } from '@/types/post.interface'
import { FC } from 'react'
import cl from './Board.module.scss'
import { useNavigate } from 'react-router'
import { formatCategory } from '@/formatters/category.format'

interface IProps {
  titleBoard: string
  posts: IPost[]
}

const Board: FC<IProps> = ({ titleBoard, posts }) => {
  const navigate = useNavigate()

  const onClickNewsTitle = (post: IPost) => () => {
    navigate(`/category/${post.category}/${post.id}`)
  }

  const onClickNewsCategory = (post: IPost) => () => {
    const formattedCategory = formatCategory(post.category)
    navigate(`/category/${formattedCategory}`)
  }

  return (
    <article className={cl.wrapper}>
      <h1 className={cl.title}>{titleBoard}</h1>
      <ul className={cl.news}>
        {posts.map(post => (
          <li key={post.id}>
            <div className={cl.header}>
              {post.category && (
                <p className={cl.category} onClick={onClickNewsCategory(post)}>
                  #{post.category}
                </p>
              )}
              <p className={cl.date}>{post.date}</p>
            </div>

            <p className={cl.newsTitle} onClick={onClickNewsTitle(post)}>
              {post.title}
            </p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Board
