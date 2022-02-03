import axios from 'axios'

const Api = async request => {
  try {
    const response = await axios.get(request)

    return response.data
  } catch (err) {
    console.log('Erro:', err)
    return null
  }
}

export default Api
