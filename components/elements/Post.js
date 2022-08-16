import Image from "next/image";

function Post({name, address, photo, caption, rating, reviews}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>{address}</p>
                <div className="image-container">
                    <Image src={photo} alt={caption} placeholder="blur" blurDataURL={photo} layout="fill" />
                </div>
                <p className="card-text">
                    {caption}
                    <br/>
                    {rating} ({reviews})
                    <br/>
                    <a href="#">Get Directions</a>
                </p>
            </div>
        </div>
    )
}

export default Post