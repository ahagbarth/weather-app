import type { AxiosError } from 'axios'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import type {
  WeatherDataBody,
  WeatherQueryProps,
  WeatherQueryResponse,
} from './types'

export const retrieveWeatherData = async ({ city }: WeatherQueryProps) => {
  const apiKey = import.meta.env.VITE_API_KEY as string
  const response = await axios.get<WeatherDataBody>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`
  )
  return response.data
}

const useWeatherQuery = ({ city }: WeatherQueryProps): WeatherQueryResponse => {
  const { data, error } = useQuery<WeatherDataBody, AxiosError>({
    queryKey: ['weather', city],
    queryFn: () => retrieveWeatherData({ city }),
    enabled: !!city,
    retry: false,
  })

  return { data, error }
}

export default useWeatherQuery
