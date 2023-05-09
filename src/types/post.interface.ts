export interface IPost {
  id: number
  category: string
  img: string
  title: string
  subtitle: string
  body?: React.ReactNode
  isPopular: boolean
  date: string
}
