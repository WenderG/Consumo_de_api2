import { useEffect, useState } from 'react'
import { APIKey } from '../config/Key'

function Home() {

    const [ artigo, setArtigo ] =  useState({})

    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${APIKey}
        `)
        .then(response => response.json())
        .then(data => {

            setArtigo(artigo)
        })
    })
}