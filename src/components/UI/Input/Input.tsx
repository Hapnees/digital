import searchIcon from '@/assets/Input/search.svg'
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'
import cl from './Input.module.scss'
import { FieldError } from 'react-hook-form'

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isSearch?: boolean
  error?: FieldError
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ className, isSearch, error, ...props }, ref) => {
    return (
      <div className={`${cl.wrapper} ${className}`}>
        <input type='text' className={cl.input} {...props} ref={ref} />
        {isSearch && <img src={searchIcon} alt='' className={cl.searchIcon} />}
        {error?.message && <p className={cl.error}>{error.message}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
