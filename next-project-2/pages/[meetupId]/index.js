import { Fragment } from 'react';
import MeetupDetails from '../../components/meetups/MeetupDetail'
const MeetupDetailsPage = () => {
    return (
        <Fragment>
            {/* <img src="https://c4.wallpaperflare.com/wallpaper/382/472/58/night-the-city-lights-spring-wallpaper-preview.jpg" alt="..."/> */}
            <MeetupDetails
                image="https://c4.wallpaperflare.com/wallpaper/382/472/58/night-the-city-lights-spring-wallpaper-preview.jpg"
                title="Reunion"
                address="Tokyo"
                description="Runion 2022"
            />
        </Fragment>
    )
};


//Specify dynamic routes to pre-render pages based on data.
export async function getStaticPaths() {
    return {

        paths: [
            {
                params: {
                    meetupId: "1"
                }
            }
        ],
        fallback: false,
        /* 
        1] If you set fall back to false, you say that your paths contains all supported meetup ID values.
        That means that if the user enters anything that's not supported here, for example, M3
        he or she would see a 404 error.
        
        2]If you set fall back to true on the other hand, NextJS would try to generate a page
        for this meetup ID dynamically on the server for the incoming request.

        3]Fall back is a nice feature because it allows you to pre-generate 
        some of your pages for specific meetup ID values.
        */

    }
}

export async function getStaticProps(context) {

    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            image: 'https://c4.wallpaperflare.com/wallpaper/382/472/58/night-the-city-lights-spring-wallpaper-preview.jpg',
            id: meetupId,
            title: 'Reunion',
            address: "Tokyo",
            description: "Runion 2022"

        }
    }
}

export default MeetupDetailsPage;