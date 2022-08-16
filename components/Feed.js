import Post from "./elements/Post";

function Feed({posts}) {

    const renderPosts = posts.map(
        post => {
            const {location_id ,name, address, photo, rating, num_reviews} = post.result_object
            return(
                <Post key={location_id} name={name} address={address} photo={photo.images.original.url} caption={post.review_snippet.snippet} rating={rating} reviews={num_reviews} />
            )
        }
    )

    return(
        <div className="col-9" id="feed">
            {renderPosts}
        </div>
    )
}

export default Feed