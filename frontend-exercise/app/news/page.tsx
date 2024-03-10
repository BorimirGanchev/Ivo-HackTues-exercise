'use client'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'


export default function News() {

    const [news,setNews] = useState('');

    axios.get('https://api.worldnewsapi.com/search-news?source-countries=de&entities=LOC:Italy', {
    params: {
        'source-countries': 'de',
        'entities': 'LOC:Italy',
    }
})
    .then(res =>{
        console.log(res.data.content);
        setNews(res.data.content);
    }).catch(err => {
        console.log(err);
    }) 

return(
    <>
      { news ? <p>{news}</p> : null}
    </>
  )
}