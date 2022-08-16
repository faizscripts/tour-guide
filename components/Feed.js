import Post from "./elements/Post";
import loader from "../public/images/loading.gif"

function Feed({posts, isLoading}) {

    const renderContent = () => {
        if (!isLoading) {
            return renderPosts()
        } else {
            return (
                <div className="alternate">
                    <img src="/images/loading.gif" alt="Loading..."/>
                </div>
            )
        }
    }

    const renderPosts = () => {
        if (posts) {
            return posts.map(
                post => {
                    const {
                        location_id,
                        name,
                        address,
                        photo,
                        rating,
                        num_reviews,
                        latitude,
                        longitude
                    } = post.result_object
                    return (
                        <Post key={location_id} name={name} address={address} photo={photo.images.original.url}
                              caption={post.review_snippet.snippet} rating={rating} reviews={num_reviews}
                              latitude={latitude} longitude={longitude}/>
                    )
                }
            )
        } else{
            return (
                <div className="alternate">
                    Nothing found, please try a different search term e.g. europe
                </div>
            )
        }
    }

    return (
        <div className="col-9" id="feed">
            {renderContent()}
        </div>
    )
}

export default Feed