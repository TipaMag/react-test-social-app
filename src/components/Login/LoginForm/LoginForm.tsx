import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { inputField } from '../../common/FormsControls/FormsControls'
import { required, maxLength, email } from '../../utils/validators/validators'
import s from './LoginForm.module.css'
import Button from '../../../elements/Button'

const maxLength30 = maxLength(30)
const maxLength20 = maxLength(20)

interface Props {
    captchaUrl: string | null
    getCaptchaUrl: () => void
    onSubmit: (values: any) => void
}
const LoginForm: React.FC<Props & InjectedFormProps<{}, Props>> = ({ handleSubmit, pristine, submitting, error, captchaUrl, getCaptchaUrl }) => {
    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>
            <Field name='email' type='email' component={inputField}
                placeholder={'Email'}
                validate={[required, maxLength30, email]}
            />
            <Field name='password' type='password' component={inputField}
                placeholder={'Password'}
                validate={[required, maxLength20]}
            />
            <Field name='rememberMe' type='checkbox' component={inputField}
                label='Remember me'
            />
            {captchaUrl &&
                <div>
                    <img src={captchaUrl} alt="captcha" />
                    <Field name='captcha' type='text' component={inputField}
                        placeholder={'enter symbols'}
                        validate={[required]}
                    />
                    <button onClick={() => { getCaptchaUrl() }}>update</button>
                </div>
            }
            <Button className={s.loginBtn} type="submit" disabled={pristine || submitting}>sign in</Button>
            {error &&
                <div className={s.commonError}>{error}</div>
            }
        </form>
    )
}
export default reduxForm<{}, Props>({
    form: 'login'
})(LoginForm)