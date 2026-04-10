import "./App.css"

export default function FetchPost(){
    return(
        <div className="outerContainer">
            <header>
                <h1>Post Fetcher</h1>
                <p>Enter a URL to fetch and display posts.</p>
            </header>

            <div className="innerContainer">
                <h2>Fetch Post</h2>
                <p>Enter the API endpoint URL to fetch post from</p>
                <input type="text" />
                <button>Fetch</button>
            </div>
        </div>
    )
}