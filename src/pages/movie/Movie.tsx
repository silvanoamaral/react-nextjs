import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=e2c70d159f475c3cf6bd625fd21f2312&language=pt-BR'

const BoxMovie = styled.div`
  padding: 20px;
  font-size: 17px;
  list-style: none;
`

function Movie () {
  const [pageCurrent, setPageCurrent] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState<any>([])

  const getMovies = () => {
    if(!isLoading) {
      setIsLoading(true)
      axios({
        method: 'get',
        url: `${baseUrl}&page=${pageCurrent}`,
        responseType: 'stream'
      }).then(result => {
        setMovies(result.data)

        setIsLoading(false)
        setPageCurrent((page) => page + 1)
      })
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <BoxMovie>
      {movies?.results?.map((movie: any) => {
        return <li key={movie.id}>
        {movie.original_title}
      </li>
      })}
    </BoxMovie>
  )
}

export default Movie
