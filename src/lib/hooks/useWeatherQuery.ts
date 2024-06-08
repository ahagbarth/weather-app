import axios from 'axios'
import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { WeatherDataResponse, WeatherQueryProps } from './types'

const retrieveWeatherData = async ({ city }: WeatherQueryProps) => {
  const apiKey = import.meta.env.VITE_API_KEY as string
  const response = await axios.get<WeatherDataResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
`
  )
  return response.data
}

const useWeatherQuery = ({
  city,
}: WeatherQueryProps): UseQueryResult<WeatherDataResponse> =>
  useQuery({
    queryKey: ['users'],
    queryFn: () => retrieveWeatherData({ city }),
  })

export default useWeatherQuery
