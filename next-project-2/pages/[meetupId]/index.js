import {Fragment} from 'react';
import MeetupDetails from '../../components/meetups/MeetupDetail'
const MeetupDetailsPage = () =>{
    return(
        <Fragment>
            {/* <img src="https://c4.wallpaperflare.com/wallpaper/382/472/58/night-the-city-lights-spring-wallpaper-preview.jpg" alt="..."/> */}
            <MeetupDetails image="https://c4.wallpaperflare.com/wallpaper/382/472/58/night-the-city-lights-spring-wallpaper-preview.jpg" title="Reunion" address="Tokyo"/>
        </Fragment>
    )
};
export default MeetupDetailsPage;