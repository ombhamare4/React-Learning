import {useRouter} from 'next/router'
const DetailPage = () =>{
  
  const route = useRouter();
  console.log(route.query.newsId);
    return(

      <h1>detail Page</h1>
    )
  };
  
  export default DetailPage;