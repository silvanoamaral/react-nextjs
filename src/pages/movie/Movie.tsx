import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';

import useFetchMovie from './useFetchMovie'

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=e2c70d159f475c3cf6bd625fd21f2312&language=pt-BR'

const BoxMovie = styled.div`
  padding: 20px;
  font-size: 17px;
  list-style: none;
`

function Movie () {
  const [pageCurrent, setPageCurrent] = useState(1)

  const [data, isLoading, isError, setUrl] = useFetchMovie()

  useEffect(() => {
    setUrl(`${baseUrl}&page=${pageCurrent}`)
  }, [])

  return (
    <BoxMovie>
      <h1 data-testid="title">Vídeos</h1>
      {isError && (
        <p>Error</p>
      )}
      {isLoading && (
        <p>Loading...</p>
      )}
      {data?.results?.map((movie: any) => {
        return <li key={movie.id}>
          {movie.original_title}
        </li>
      })}
    </BoxMovie>
  )
}

export default Movie
