import { MongoClient } from 'mongodb';
import Head from 'next/head';


import MeetupList from '../components/meetups/MeetupList'


const HomePage = (props) => {

    return (
        <>
            <Head>
                <title>Next.js Meetups</title>
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res; 
//     // Fetch data on from API on server not on client side
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//         //Here not required revalidate because every request come in this function automatically revalidate
//     };

// };

export async function getStaticProps() {
    // This function return something which is not visible to any client 
    //It use to fetch API 
    //It returns an Object

    const client = await MongoClient.connect("mongodb+srv://webRubik:test'OR'a'='a'@web-db.qjovo.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const Meetups_Data = await meetupsCollection.find().toArray(); //Find will find all meetups from collection


    return {
        //Set Props poerty here. it is necessary and that props hold other object
        //Which will received props in your component function
        props: {
            meetups: Meetups_Data.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()
            }))
        },
        //It referse the page 
        revalidate: 1
    };
};

export default HomePage;