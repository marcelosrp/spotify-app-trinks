import React from 'react'
import { NextSeo } from 'next-seo'

const Home = () => {
  return (
    <>
      <NextSeo
        title="Template"
        description="A simple nextjs template to start a new project from scratch"
        canonical="https://meusite.com.br/"
        openGraph={{
          url: 'https://meusite.com.br/',
          title: 'Template',
          description:
            'A simple nextjs template to start a new project from scratch',
          images: [
            {
              url: 'https://meusite.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <h1>Home</h1>
    </>
  )
}

export default Home
