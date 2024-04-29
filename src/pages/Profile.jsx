import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import { db } from "../services/firebase";
import { createImageUrl } from '../services/movieServices'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'


const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth()

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) {
          setMovies(doc.data().favShows)
        }
      })
    }
  }, [user?.email])

  const slide = (offSet) => {
    const slider = document.getElementById(`slider`);
    slider.scrollLeft = slider.scrollLeft + offSet
  }

  const handleUnlinkShow = async (movie) => {
    const userDoc = doc(db, 'users', user.email)
    await updateDoc(userDoc, {
      favShows: arrayRemove(movie)
    })
  }

  const favList = movies.map(movie => (
    <div
      key={movie.id}
      className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
    >
      <img
        className="w-full h-40 block object-cover object-top"
        src={createImageUrl(movie.backdrop_path ?? movie.poster_path, 'w500')}
        alt={movie.title}
      />
      <div className=" absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
        <p
          className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-Nsans-bold">
          {movie.title}
        </p>
        <p>
          <AiOutlineClose
            size={30}
            className="absolute top-2 right-2"
            onClick={() => handleUnlinkShow(movie)}
          />
        </p>

      </div>
    </div>
  )

  )



  if (!user) {
    return (
      <>
        <p>fetching moivies....</p>
      </>
    )
  }

  return (
    <>
      <div>
        <div>
          <img className="block  w-full h-[500px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="///"
          />
          <div className="bg-black/40 fixed w-full top-0 h-[500px]" />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-Nsans-bold my-2">
              my shows
            </h1>
            <p className="font-Nsans-bold text-gray-400 text-lg">{user.email} </p>
          </div>
        </div>

        {/** movie row */}

        <h2 className="font-Nsans-bold md:text-xl p-4 capitalize">fav shows</h2>
        <div className="relative flex items-center group">
          {favList.length > 4 && <MdChevronLeft onClick={() => slide(-500)} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-20 hidden group-hover:block cursor-pointer" size={40} />}

          <div
            id={`slider`}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {favList}
          </div>

          {favList.length > 4 && <MdChevronRight onClick={() => slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-20 hidden group-hover:block cursor-pointer" size={40} />}

        </div>
      </div>
    </>
  )
}

export default Profile;