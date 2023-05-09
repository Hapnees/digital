import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cl from './Logo.module.scss'

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  newsColor?: string
}

const Logo: FC<IProps> = ({ newsColor = '#eee3e3', className, ...props }) => {
  return (
    <div className={`${cl.wrapper} ${className}`} {...props}>
      <p>Диджитал</p>
      <p>NEWS</p>
    </div>
  )
}

export default Logo
