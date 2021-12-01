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

const HomePage = (props) => {

    // const [loadedMeetups, setLoadedMeetups] = useState([]);

    // useEffect(() => {

    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, []);

    return (
        <>
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
    return {
        //Set Props poerty here. it is necessary and that props hold other object
        //Which will received props in your component function
        props: {
            meetups: DUMMY_MEETUPS
        },
        //It referse the page 
        revalidate: 1
    };
};

export default HomePage;