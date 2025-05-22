// import React from 'react'

import { useQuery } from "@tanstack/react-query"
import { client } from "../lib/sanity"


export const Home = () => {

/*
  ========================================
  DATA
  ======================================== */

  //'Home page' data
  const {
    data: homeData,
    error: homeError,
    isLoading: homeLoading,
  } = useQuery({
    queryKey: ['home'],
    queryFn: () => client.fetch('*[_type == "home"][0]')
  })

  console.log(homeData)
  if (homeLoading) return 'Loading...'
  if (homeError) return 'An error has occurred: ' + homeError.message


  return (
    <section 
      className={`h-full w-screen overflow-x-hidden p-8 md:p-20 duration-500`}
      id="home-page"    
      >
      Home
    </section>
  )
}
