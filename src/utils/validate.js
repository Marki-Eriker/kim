import * as yup from 'yup'

const questionValidateSchema = yup.object().shape({
  name: yup.string().required('Введите имя'),
  email: yup.string().required('Введите email').email('Введите корректный email'),
  question: yup.string().required('Введите Ваш вопрос'),
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
