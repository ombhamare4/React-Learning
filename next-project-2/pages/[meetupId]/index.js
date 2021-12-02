import { Fragment } from 'react';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetails from '../../components/meetups/MeetupDetail'
const MeetupDetailsPage = (props) => {
    return (
        <Fragment>
            {/* <img src="https://c4.wallpaperflare.com/wallpaper/382/472/58/night-the-city-lights-spring-wallpaper-preview.jpg" alt="..."/> */}
            <MeetupDetails
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    )
};


//Specify dynamic routes to pre-render pages based on data.
export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://webRubik:test'OR'a'='a'@web-db.qjovo.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({/*filtter*/ }, { _id: 1 }).toArray();
    client.close();
    return {

        fallback: false,
        paths: meetups.map((meetups) => ({
            params: { meetupId: meetups._id.toString() },
        }))
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

    const meetupId = context.params.meetupId;
    // fetch data for a single meetup
    const client = await MongoClient.connect("mongodb+srv://webRubik:test'OR'a'='a'@web-db.qjovo.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const newMeetipId = new ObjectId(meetupId);

    const selectMeetup = await meetupsCollection.findOne({ _id: newMeetipId })


    console.log(selectMeetup.address);
    client.close();
    return {
        props: {
            meetupData: {
                id: selectMeetup._id.toString(),
                title: selectMeetup.title,
                image: selectMeetup.image,  
                address: selectMeetup.address,
                description: selectMeetup.description

            },
        },
    }
}

export default MeetupDetailsPage;