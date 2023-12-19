import { useEffect, useState } from 'react'

const useFetcher = (url) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const getData = await resp.json()
        setData(getData)
      } catch (error) {
        setIsError(true)
        // console.log(error);
      }
      // hide loading
      setIsLoading(false)
    }
    fetchData()
  }, [])
  return { isLoading, isError, data }
}
export default useFetcher
