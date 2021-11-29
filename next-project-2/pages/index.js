import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList'
const DUMMY_MEETUPS = [
    {
        id: 1,
        title: "InterView",
        image: "https://c4.wallpaperflare.com/wallpaper/952/824/961/makoto-shinkai-kimi-no-na-wa-wallpaper-preview.jpg",
        address: "Tokyo",
    },
    {
        id: 2,
        title: "Language School Admission",
        image: "https://c4.wallpaperflare.com/wallpaper/945/578/382/osaka-city-lights-wallpaper-preview.jpg",
        address: "Osaka",
    },
    {
        id: 3,
        title: "Weeding",
        image: "https://c4.wallpaperflare.com/wallpaper/382/472/58/night-the-city-lights-spring-wallpaper-preview.jpg",
        address: "Kyoto",
    },
    {
        id: 4,
        title: "Tour",
        image: "https://c4.wallpaperflare.com/wallpaper/994/253/68/japan-mountains-mount-fuji-asian-architecture-wallpaper-preview.jpg",
        address: "Kyoto",
    },


]

const HomePage = () => {

    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {

        setLoadedMeetups(DUMMY_MEETUPS);
    },[]);

    return (

        <MeetupList meetups={loadedMeetups} />

    )
};

export default HomePage;