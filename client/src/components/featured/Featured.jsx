import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured">
    <div className="container">
        <div className="left">
            <h1>Find perfect freelance servives for your business</h1>
            <div className="search">
                <div className="searchInput">
                <img src="./img/search.png" alt=""/>
                    <input type="text" placeholder="Try making a missile"></input>
                </div>
                <button>Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Web Dev</button>
                <button>AI Dev</button>
                <button>Graphics</button>
                <button>Logo Design</button>
            </div>

        </div>
        <div className="right">
            <img src="./img/put.png" alt=""></img>
        </div>
    </div>
    </div>
  )
}

export default Featured
