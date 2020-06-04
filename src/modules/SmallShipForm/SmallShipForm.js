import React, {useState} from 'react'
import './SmallShipForm.scss'
import {validateQuestion, validateSmallShip} from '../../utils/validate';

const SmallShipForm = () => {

  const [state, setState] = useState({
    ship: { value: '', error: '' },
    sideNumber: { value: '', error: '' },
    width: { value: '', error: '' },
    height: { value: '', error: '' },
    flag: { value: '', error: '' },
    fio: { value: '', error: '' },
    phone: { value: '', error: '' },
    email: { value: '', error: '' }
  })

  const inputChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: { value: e.target.value }
    })
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const validate = await validateSmallShip({...state})
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

    console.log(state, 'Прикрутить отправку формы')
  }

  return (
    <div className='small-ship-form'>
      <form className='small-ship-form__content'>
        <h2 className='small-ship-form__content-header'>Форма ввода данных о маломерных судах</h2>

        <label className='small-ship-form__inputs-label'>
          <span>Название судна</span>
          {state.ship.error && <span className='small-ship-form__error'>{state.ship.error}</span>}
          <input type='text' placeholder='' name='ship' onChange={inputChangeHandler}/>
        </label>

        <label className='small-ship-form__inputs-label'>
          <span>Бортовой<br/>(идентификационный)<br/>номер</span>
          {state.sideNumber.error && <span className='small-ship-form__error'>{state.sideNumber.error}</span>}
          <input type='text' placeholder='' name='sideNumber' onChange={inputChangeHandler}/>
        </label>

        <label className='small-ship-form__inputs-label'>
          <span>Габаритная длина, м</span>
          {state.width.error && <span className='small-ship-form__error'>{state.width.error}</span>}
          <input type='text' placeholder='0,00' name='width' onChange={inputChangeHandler}/>
        </label>

        <label className='small-ship-form__inputs-label'>
          <span>Габаритная ширина, м</span>
          {state.height.error && <span className='small-ship-form__error'>{state.height.error}</span>}
          <input type='text' placeholder='0,00' name='height' onChange={inputChangeHandler}/>
        </label>

        <label className='small-ship-form__inputs-label'>
          <span>Флаг государства</span>
          {state.flag.error && <span className='small-ship-form__error'>{state.flag.error}</span>}
          <input type='text' placeholder='' name='flag' onChange={inputChangeHandler}/>
        </label>

        <label className='small-ship-form__inputs-label'>
          <span>Полные ФИО<br/>судовладельца</span>
          {state.fio.error && <span className='small-ship-form__error'>{state.fio.error}</span>}
          <input type='text' placeholder='' name='fio' onChange={inputChangeHandler}/>
        </label>

        <label className='small-ship-form__inputs-label'>
          <span>Контактный телефон</span>
          {state.phone.error && <span className='small-ship-form__error'>{state.phone.error}</span>}
          <input type='text' placeholder='' name='phone' onChange={inputChangeHandler}/>
        </label>

        <label className='small-ship-form__inputs-label'>
          <span>E-mail</span>
          {state.email.error && <span className='small-ship-form__error'>{state.email.error}</span>}
          <input type='text' placeholder='' name='email' onChange={inputChangeHandler}/>
        </label>

        <a onClick={onFormSubmit} className='small-ship-form__button'>Отправить</a>

      </form>
    </div>
  )
}

export default SmallShipForm