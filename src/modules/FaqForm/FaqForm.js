import React, {useState} from 'react'
import './FaqForm.scss'
import {validateQuestion} from '../../utils/validate'

const FaqForm = (props) => {

  const [state, setState] = useState({
    name: {
      value: '',
      error: ''
    },
    email: {
      value: '',
      error: ''
    },
    question: {
      value: '',
      error: ''
    },
  })

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const validate = await validateQuestion({...state})
    let updateState = {...state}

    if (validate.name === 'ValidationError') {
      validate.inner.map(item => (
        updateState = {
          ...updateState,
          [item.path]: {
            ...updateState[item.path],
            error: item.message
          }
        }
      ))
      return setState(updateState)
    }

    console.log(state.name, state.email, state.question, 'Прикрутить отправку формы')
  }

  const inputChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: { value: e.target.value }
    })
  }

  return (
    <div className='faq-form'>
      <form className='faq-form__content'>

        <div className='faq-form__inputs'>
          <h2>Остались вопросы ?</h2>
          <label className='faq-form__inputs-label'>
            {state.name.error && <span className='faq-form__error faq-form__error--input'>{state.name.error}</span>}
            <input type='text' placeholder='Имя' name='name' onChange={inputChangeHandler}/>
          </label>
          <label className='faq-form__inputs-label'>
            {state.email.error && <span className='faq-form__error faq-form__error--input'>{state.email.error}</span>}
            <input type='text' placeholder='E-mail' name='email' onChange={inputChangeHandler}/>
          </label>
          <a onClick={onFormSubmit}>Задать вопрос</a>
        </div>
        <div className='faq-form__area'>
          {state.question.error && <span className='faq-form__error faq-form__error--text'>{state.question.error}</span>}
          <textarea className='faq-form__area-text' placeholder='Ваш вопрос...'
                    name='question' rows={12} cols={45} onChange={inputChangeHandler}/>
        </div>

      </form>
    </div>
  )
}

export default FaqForm