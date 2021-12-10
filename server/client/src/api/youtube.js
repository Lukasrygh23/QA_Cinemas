import axios from 'axios';

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

const KEY = `${REACT_APP_YOUTUBE_API_KEY}`;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 1,
    key: KEY,
    type: 'video',
  },
});
