import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Spotlight from "../components/Spotlight";
import Feed from "../components/Feed";

function Home({posts}) {

    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setSearchResults(posts)
    }, [])

    return (
        <>
            <Navbar setSearchResults={setSearchResults} setIsLoading={setIsLoading} />
            <div className="container">
                <div className="row">
                    <Spotlight setSearchResults={setSearchResults} setIsLoading={setIsLoading} />
                    <Feed posts={searchResults} isLoading={isLoading}/>
                </div>
            </div>
        </>
    )
}

export default Home

export async function getServerSideProps() {

    let posts

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
            query: 'world',
            limit: '30',
            offset: '0',
            units: 'km',
            location_id: '1',
            currency: 'USD',
            sort: 'relevance',
            lang: 'en_US'
        },
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options)
        posts = response.data.data.filter(post => post.result_type === "things_to_do")
    } catch (e) {
        posts = e
    }


    return{
        props: {
            posts
        }
    }
}