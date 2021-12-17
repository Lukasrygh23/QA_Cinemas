import React, { useState, useEffect } from 'react';
import axios from 'axios'
import VideoDetail from '../src/components/VideoDetail';
import useVideos from './hooks/useVideos';
import FilmCard from '../src/components/FilmCard'

const TheMatrixResurrectionsPage = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('The Matrix Resurrections Trailer');
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [videoLoading, setVideoLoading] = useState(true)
    const bookingFormURLParam = 'the_matrix_resurrections'
    const screen = "Deluxe Screen"
    const showtime1 = "06:00 AM"
    const showtime2 = "09:00 AM"
    const showtime3 = "12:00 PM"

    const getData = async () => {
        const res = await axios.get(`http://localhost:5000/movieRoutes/getById/6`)
        const data = res.data;
        setData(data);
        setLoading(false)
    }

    useEffect(() => {
        setSelectedVideo(videos[0]);
        setVideoLoading(false)
        getData()
    }, [videos]);

    if (loading) {
        return (
            <h2>Loading</h2>
        )
    } else {
    return (
        <div>
            <VideoDetail video={selectedVideo} />
             <FilmCard data={data} bookingFormURLParam={bookingFormURLParam} screen={screen} showtime1={showtime1} showtime2={showtime2} showtime3={showtime3} />
        </div>
    );
    }
}

export default TheMatrixResurrectionsPage;