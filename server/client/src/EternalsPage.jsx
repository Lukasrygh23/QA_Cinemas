import React, { useState, useEffect } from 'react';
import axios from 'axios'
import VideoDetail from '../src/components/VideoDetail';
import useVideos from './hooks/useVideos';
import FilmCard from '../src/components/FilmCard'

const EternalsPage = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('Eternals Trailer');
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [videoLoading, setVideoLoading] = useState(true)
    const bookingFormURLParam = 'eternals'
    const screen = "Standard Screen"
    const showtime1 = "15:15 PM"
    const showtime2 = "18:45 PM"
    const showtime3 = "22:30 PM"

    const getData = async () => {
        const res = await axios.get(`http://localhost:5000/movieRoutes/getById/2`)
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

export default EternalsPage;