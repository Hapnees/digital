import { useForm, SubmitHandler } from 'react-hook-form'
import BlackButton from '../UI/BlackButton/BlackButton'
import Input from '../UI/Input/Input'
import cl from './AuthForm.module.scss'
import { IAuth } from '@/types/auth.interface'
import { useActions } from '@/hooks/useActions'
import { IoMdClose } from 'react-icons/io'
import { FC, MouseEvent, useState } from 'react'

interface IProps {
  closeFunc: () => void
}

const AuthForm: FC<IProps> = ({ closeFunc }) => {
  const [isLoginForm, setIsLoginForm] = useState(true)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuth>({ mode: 'onBlur' })

  const { setEmail } = useActions()

  const onSubmit: SubmitHandler<IAuth> = async data => {
    setEmail(data.email)
    closeFunc()
  }

  const onClickRegisterButton = (event: MouseEvent) => {
    if (isLoginForm) {
      event.preventDefault()
      setIsLoginForm(false)
      return
    }
  }

  const onClickLoginButton = (event: MouseEvent) => {
    if (!isLoginForm) {
      event.preventDefault()
      setIsLoginForm(true)
      return
    }
  }

  const titleText = isLoginForm ? 'Вход' : 'Регистрация'

  return (
    <article className={cl.wrapper}>
      <IoMdClose className={cl.close} onClick={closeFunc} />
      <h1 className={cl.title}>{titleText}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cl.inputs}>
          <Input
            type='email'
            placeholder='Email'
            {...register('email', { required: 'Обязательное поле' })}
            error={errors.email}
          />
          <Input
            type='password'
            placeholder='Пароль'
            {...register('password', {
              required: 'Обязательное поле',
              minLength: { value: 6, message: 'Минимум 6 символов' },
            })}
            error={errors.password}
          />
        </div>

        <div className={cl.buttons}>
          <BlackButton onClick={event => onClickLoginButton(event)}>
            Войти
          </BlackButton>
          <BlackButton onClick={event => onClickRegisterButton(event)}>
            Регистрация
          </BlackButton>
        </div>
      </form>
    </article>
  )
}

export default AuthForm
