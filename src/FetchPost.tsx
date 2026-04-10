import "./App.css"
import Posts from "./DisplaySection.tsx"
import { FiRefreshCcw } from "react-icons/fi";

export default function FetchPost(){
    return(
        <div className="outerContainer">
            <header>
                <h1 className="font-bold text-3xl">Post Fetcher</h1>
                <p className="font-light text-gray-400">Enter a URL to fetch and display posts.</p>
            </header>

            <section className="innerContainer">
                <h2 className="font-bold">Fetch Post</h2>
                <p className="text-gray-600">Enter the API endpoint URL to fetch post from</p>

                <form action="" className="fetchingContainer">
                    <input 
                    placeholder="https://jsonplaceholder.typicode.com/posts"
                    className="inputField" 
                    type="text"
                    // value={}
                    />
                    <button
                    type="submit" 
                    className="Btn text-white bg-black">Fetch</button>
                    <button
                    type="button"
                    // onClick={}
                    className="Btn hover:bg-gray-50"><FiRefreshCcw /> <span>Retry</span></button>
                </form>
            </section>
            <Posts/>
        </div>
    )
}