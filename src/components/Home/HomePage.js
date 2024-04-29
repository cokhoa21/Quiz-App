import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <div>
                <video width="600px" height="600px" autoPlay muted loop>
                    <source
                        src={videoHomepage}
                        type="video/mp4"
                    >
                    </source>
                </video>
            </div>
            {/* <video width="600px" height="600px" autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                >
                </source>
            </video> */}
            <div className='homepage-content'>
                <div className='title-1'>Make forms worth filling out</div>
                <div className='title-2'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <div className='title-3'>
                    <button>Get's started-it's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;