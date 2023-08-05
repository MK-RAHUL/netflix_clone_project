import React, {useEffect,useState} from 'react'
import axios from '../../Axios'
import {Imageurl} from '../../constants/Constants'
import './Rowpost.css'
import Youtube from 'react-youtube'
import {Apikey} from '../../constants/Constants'

function Rowpost(props) {
  const [movies,setmovies] = useState([])
  const [urlid,seturlid] =useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setmovies(response.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '1210',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handletrailer = (id) =>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${Apikey}&language=en-US`).then(response=>{
      if(response.data.results.length!=0){
        seturlid(response.data.results[0])
      }   else{
        alert("Trailer Not Available")
      }   
    })
  }
  return (
    <div className='rowpost'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            movies.map((obj)=>
              <img  onClick={()=>handletrailer(obj.id)} className={props.isSmall ? 'smallposter':'rowimage'} src={`${Imageurl+obj.backdrop_path}`}alt="poster" />
 
            )}
        </div>
      { urlid && <Youtube  style={{marginTop:'20px'}} videoId={urlid.key} opts={opts}/>}
    </div>
  )
}

export default Rowpost
