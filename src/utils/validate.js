import * as yup from 'yup'

const questionValidateSchema = yup.object().shape({
  name: yup.string().required('Введите имя'),
  email: yup.string().required('Введите email').email('Введите корректный email'),
  question: yup.string().required('Введите Ваш вопрос'),
})

const smallShipValidateSchema = yup.object().shape({
  ship: yup.string().required('Введите название судна'),
  sideNumber: yup.string().required('Введите бортовой номер'),
  width: yup.string().required('Введите длину'),
  height: yup.string().required('Введите ширину'),
  flag: yup.string().required('Введите флаг'),
  fio: yup.string().required('Введите ФИО'),
  phone: yup.string().required('Введите контактый телефон'),
  email: yup.string().required('Введите контактный email'),
})

export const validateQuestion = (state) => {

  const validate = questionValidateSchema.validate({
      name: state.name.value,
      email: state.email.value,
      question: state.question.value
    }, {abortEarly: false})
      .catch(err => err)

  return (validate)
}

export const validateSmallShip = (state) => {

  const validate = smallShipValidateSchema.validate({
    ship: state.ship.value,
    sideNumber: state.sideNumber.value,
    width: state.width.value,
    height: state.height.value,
    flag: state.flag.value,
    fio: state.fio.value,
    phone: state.phone.value,
    email: state.email.value,
  }, {abortEarly: false})
    .catch(err => err)

  return validate
}


