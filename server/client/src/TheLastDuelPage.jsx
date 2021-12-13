import React, { useState, useEffect } from 'react';
import axios from 'axios'
import VideoDetail from '../src/components/VideoDetail';
import useVideos from './hooks/useVideos';
import FilmCard from '../src/components/FilmCard'

const TheLastDuelPage = () => {
    const bookingFormURLParam = 'the_last_duel'
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('The Last Duel Trailer');
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [videoLoading, setVideoLoading] = useState(true)

    const getData = async () => {
        const res = await axios.get(`http://localhost:5000/movieRoutes/getById/4`)
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
            <FilmCard data={data} bookingFormURLParam={bookingFormURLParam} />
        </div>
    );
    }
}

export default TheLastDuelPage;