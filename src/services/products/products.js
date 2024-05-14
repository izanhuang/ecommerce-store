import axios from "axios";

axios.defaults.baseURL = 'https://fakestoreapi.com'

export async function getProducts() {
  const response = await axios.get(
    '/products',
    {
      params: {
        limit: 25
      }
    }
  )

  return response
}