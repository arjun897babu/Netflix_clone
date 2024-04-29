import React, { useDebugValue, useEffect, useState } from "react";
import YouTube from 'react-youtube'
import endPoints, { createImageUrl } from "../services/movieServices";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";

const MovieDetail = () => {
  const [videoId, setVideoId] = useState('');
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false)
  const { id } = useParams()
  const videoGet = async () => {
    try {
      const videoData = await axios.get(endPoints.video(id));
      setVideoId(videoData.data.results?.[videoData.data.results.length - 1].key);
    } catch (error) {
      console.error(error)
    }
  }

  const movieDetail = async () => {
    try {
      const { data } = await axios.get(endPoints.detail(id));
      console.log('movie data', data)
      setMovie(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    videoGet();
    movieDetail();
  }, [id])

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
    },
  }

  const convertTime = (min) => {

    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours} h ${minutes} m`;
  }


  return (
    <>

      <div className="relative">
        <div className="  w-full h-full">
          <div className=" w-full h-[550px] lg:h-[850px] " >
            <img
              className=" w-full h-full object-cover object-top"
              src={createImageUrl(movie?.backdrop_path ?? movie?.poster_path, 'original')}
              alt={movie?.title}
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black" />

          </div>


        </div>
        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-Nsans-bold ">{movie?.title}</h1>
          <div className="mt-8 mb-4 flex items-center">
            <button className="capitalize border bg-gray-300 py-2 px-5 text-black" onClick={() => setShowVideo(!showVideo)}>play trailer</button>
            <span className="mx-3" >{movie?.vote_average.toFixed(1)}</span>
            <FaStar size={20} color="yellow" />
          </div>
          <p className="text-gray-400 text-sm ">{new Date(movie?.release_date).getFullYear()} | {convertTime(movie?.runtime)} | {movie?.genres[0]?.name}</p>
          <p className="max-w-2xl leading-8">{movie?.overview}</p>
        </div>
        {showVideo && (
          <div className="fixed top-0 left-0 w-full h-full z-50">
            <YouTube videoId={videoId} opts={opts} style={{ height: '100%', width: '100%' }} />
            <span onClick={() => setShowVideo(false)} className="absolute top-20 left-20 cursor-pointer z-50 text-white text-3xl">
              <IoMdClose size={50} />
            </span>

          </div>
        )}
      </div>


    </>
  )
}

export default MovieDetail