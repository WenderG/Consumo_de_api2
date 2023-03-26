import { useEffect, useState } from 'react'
import { APIKey } from './assets/config/Key'
import './App.css'

const Home = () => {

  const [ artigos, setArtigo ] =  useState([])
  const [ termo, setTermo ] = useState('everything')
  const [ carregando, setCarregando ] = useState(true)

  useEffect(() => {
      const buscarArquivos = async () => {
          try {
                  const res =  await fetch(
                      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${termo}&api-key=${APIKey}`
                  )
                  const artigos =  await res.json()
                  setArtigo(artigos.response.docs)
          } catch (error) {
                  console.error(error)
          }
          
      }
      
      buscarArquivos()

  }, [])

  return (
      <>
        <div>
          {artigos.map((artigo) => {
            const {abstract, headline: {main}, byline: {original}, lead_paragraph, news_desk, section_name, web_url, _id, word_count} = artigo

            return(
              <article key={_id}>
                <h2>{main}</h2>
                <h4>{abstract}</h4>
                <a href={web_url} target="_blank">Web Resource</a>
                <p>{lead_paragraph}</p>

                <ul>
                  <li>{original}</li>
                  <li>{news_desk}</li>
                  <li>{section_name}</li>
                  <li>{word_count}</li>
                </ul>
              </article>
            )
          })}
        </div>
      </>
  )
}

export default Home
