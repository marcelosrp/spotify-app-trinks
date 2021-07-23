import React from 'react'
import { NextSeo } from 'next-seo'

import HomeTemplate from '../Templates/Home'

const Home = () => {
  return (
    <>
      <NextSeo
        title="Spotify App Trinks"
        description="Teste front-end para a Tricks"
        canonical="https://spotify-app-tricks.vercel.app/"
        openGraph={{
          url: 'https://spotify-app-tricks.vercel.app/',
          title: 'Template',
          description: 'Teste front-end para a Tricks',
          images: [
            {
              url: 'https://spotify-app-tricks.vercel.app/img/band.png',
              width: 1280,
              height: 720,
              alt: 'Spotify App Trinks'
            }
          ],
          site_name: 'Spotify App Trinks'
        }}
      />
      <HomeTemplate />
    </>
  )
}

export default Home
