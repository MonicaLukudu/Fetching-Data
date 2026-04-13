import "./App.css"
import { useState } from 'react';
import { IoChevronBackOutline} from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { FiRefreshCcw } from "react-icons/fi";
import {useFetchPost} from './FetchPostHook.ts'

const postsPerPage = 10;

export default function FetchPost(){
    const [inputVal,  setInputVal] = useState('');
    const [activeUrl, setActiveUrl] = useState('')
    const [currPage, setCurrPage] = useState(1);

    const {post, loading, error, refetch} = useFetchPost(activeUrl)

    function handleFetch(e: React.FormEvent){
        e.preventDefault();
        setActiveUrl(inputVal);
        setCurrPage(1);
    }

    //pagination logic
    const totalPage = Math.ceil(post.length / postsPerPage)
    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currPost = post.slice(firstPost, lastPost)


    return(
        <div className="outerContainer">
            <header>
                <h1 className="font-bold text-3xl">Post Fetcher</h1>
                <p className="font-light text-gray-400">Enter a URL to fetch and display posts.</p>
            </header>

            <section className="innerContainer">
                <h2 className="font-bold">Fetch Post</h2>
                <p className="text-gray-600">Enter the API endpoint URL to fetch post from</p>

                <form onSubmit={handleFetch} className="fetchingContainer">
                    <input 
                    placeholder="https://jsonplaceholder.typicode.com/posts"
                    className="inputField" 
                    type="text"
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    />
                    <button
                    type="submit" 
                    className="Btn text-white bg-black">Fetch</button>
                    <button
                    type="button"
                    onClick={ () => refetch()}
                    className="Btn hover:bg-gray-50"><FiRefreshCcw /> <span>Retry</span></button>
                </form>
            </section>
            
            <section className="space-y-4">
            <div className="flex flex-col gap-6">

                <div className="flex items-center justify-between gap-4 text-sm">
                    <div>
                        <h2 className="text-2xl font-bold">Post ({post.length})</h2>
                    </div>
                        
                    {post.length > 0 && (
                        <div className="flex items-center space-x-2">
                            <button 
                            className="Btn disabled:opacity-30" 
                            disabled={currPage === 1} 
                            onClick={() => setCurrPage(p => p - 1)}><IoChevronBackOutline /><span>Previous</span></button>
                            <span className="text-gray-500"> Page {currPage} of {totalPage}</span>
                            <button 
                            className="Btn disabled:opacity-30"
                            disabled={currPage === totalPage}
                            onClick={() => setCurrPage(p => p + 1)}><span>Next</span><FaAngleRight /></button>
                        </div>   
                    )}
                </div>

                {loading && <p className="text-start py-10">Loading post....</p>}
                {error && <p className="error">{error}</p>}

                <div className="space-y-4">
                    {currPost.map(post => (
                        <div key={post.id} className="border rounded-xl p-6 bg-white shadow-sm">
                        <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">Post ID: {post.id} | User ID: {post.id}</p>
                        <p className="text-gray-600 leading-relaxed">{post.body}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>


        </div>
    )
}