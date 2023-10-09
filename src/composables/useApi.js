/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dattebayo-api.onrender.com',
})

const useApi = () => {
  return { instance }
}

export default useApi
