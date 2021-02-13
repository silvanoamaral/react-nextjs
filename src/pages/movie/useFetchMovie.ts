import { useEffect, useState } from "react"
import axios from "axios"

export default function useFetchMovie() {
  const [data, setData] = useState(null)
  const [url, setUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)

    try {
      const result = await axios(url)

      setData(result.data)
    } catch (error) {
      setIsError(true)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return [data, isLoading,isError, setUrl]
}
