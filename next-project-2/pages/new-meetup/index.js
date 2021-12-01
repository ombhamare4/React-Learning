import NewMeetupForm from '../../components/meetups/NewMeetupForm';
const NewMeetupFormPage = ()=>{
    const addMeetupHandler =(enterMeetUpData)=>{
        console.log(enterMeetUpData);
    }
    return(
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
};


export default NewMeetupFormPage;