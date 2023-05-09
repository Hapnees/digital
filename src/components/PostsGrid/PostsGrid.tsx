import { IPost } from '@/types/post.interface'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import cl from './PostsGrid.module.scss'
import emptyImage from '@/assets/empty_image.jpg'

interface IProps {
  posts: IPost[]

  columns?: number
  columnWidth?: number
}

const PostsGrid: FC<IProps> = ({ posts, columns = 2, columnWidth = 480 }) => {
  const navigate = useNavigate()

  const onClickPost = (id: number, category: string) =>
    navigate(`/category/${category}/${id}`)

  return (
    <ul
      className={cl.grid}
      style={{ gridTemplateColumns: `repeat(${columns}, ${columnWidth}px)` }}
    >
      {posts.map(post => (
        <li key={post.id} onClick={() => onClickPost(post.id, post.category)}>
          <div className={cl.header}>
            <p className={cl.category}>#{post.category}</p>
            <p className={cl.date}>{post.date}</p>
          </div>
          <img
            src={post.img || emptyImage}
            alt='Изображение не найдено'
            className={cl.image}
          />
          <h1 className={cl.title}>{post.title}</h1>
          <h2 className={cl.subtitle}>{post.subtitle}</h2>
        </li>
      ))}
    </ul>
  )
}

export default PostsGrid
