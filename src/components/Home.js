import React, {useEffect, useState} from "react";
import './Home.css';
import axios from "axios";

const Home = () => {

    const [values, setValues] = useState({});


    useEffect(() => {
    
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
            
            axios.get(
                    'https://akademia108.pl/api/social-app/post/latest', 
                    JSON.stringify(),
                    { 'headers': headers })
                    .then((response) => {

                        setValues(response.data);    
                        
                        //     id: values.id,
                        //     user_id: values.user_id,
                        //     content: values.content,
                        //     created_at: values.created_at,
                        //     updated_at: null,
                         
                
                        console.log(response.data);  
                    }).catch((error) => {
                        console.error(error);
                    })
    }, [])



    useEffect(() => {
    
        const getFeed = () => {

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
            
            axios.get(
                    'https://akademia108.pl/api/social-app/post/latest', 
                    JSON.stringify(),
                    { 'headers': headers })
                    .then((response) => {

                        setValues(response.data);    
                        
                        //     id: values.id,
                        //     user_id: values.user_id,
                        //     content: values.content,
                        //     created_at: values.created_at,
                        //     updated_at: null,
                        
                
                        console.log(response.data);  
                    }).catch((error) => {
                        console.error(error);
                    })
        }
}, [])


    return(
        <div className="home-list">
            <h1>Feed</h1>
                <li>
                    <span className="feed-id">{values.id}</span>
                    <span className="feed-user_id">{values.user_id}</span>
                    <span className="feed-content">{values.content}</span>
                    <span className="feed-created_at">{values.created_at}</span>

                </li>
                <button onClick={getFeed}>Get Feed</button>    
        </div>
    );
    
}


export default Home;
