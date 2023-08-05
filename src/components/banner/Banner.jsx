import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import {Apikey,Imageurl} from '../../constants/Constants'
import {Carousel} from 'react-responsive-carousel'

function Banner() {

  const [movie, setmovie] = useState([])

  useEffect(()=>{
   axios.get(`/trending/all/week?api_key=${Apikey}&language=en-US`).then((response)=>{
    // console.log(response.data.results[0])
    setmovie(response.data.results)
   })
  },[])
  return (
    <>
    <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false} >
      {
       movie.map(obj => (
        <div style={{backgroundImage:`url(${movie ? Imageurl+obj.backdrop_path : ""})`}}  className='banner' key={obj.id}>
          <div className='content'>
            <h1 className="title">{movie ? obj.title : ""}</h1>
            <div className="banner_button">
              <button className='button'>Play</button>
              <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? obj.overview : ""}</h1>
          </div>
          <div className='fade'></div>
        </div>
      ))
      
      }

    </Carousel>
    </>
  )
}

export default Banner