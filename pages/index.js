import Navbar from "../components/Navbar";
import Spotlight from "../components/Spotlight";
import Feed from "../components/Feed";

function Home() {
    return(
        <>
          <Navbar/>
            <div className="container">
                <div className="row">
                    <Spotlight/>
                    <Feed />
                </div>
            </div>
        </>
    )
}

export default Home