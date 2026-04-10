import "./App.css";

export default function Posts(){
    return(
        <section className="space-y-4">
            <div className="flex flex-col gap-6">

                <div className="flex items-center justify-between gap-4 text-sm">
                    <div>
                        <h2 className="text-2xl font-bold">Post</h2>
                    </div>
                        
                    <div className="space-x-2">
                        <button className="border rounded px-3 py-1 disabled:opacity-30">Previous</button>
                        <span className="text-gray-500">1 of 100</span>
                        <button className="border rounded px-3 py-1 disabled:opacity-30">Next</button>
                    </div>   
                </div>

                <p className="text-start py-10">Loading post....</p>

                <div className="space-y-4">
                    <div className="border rounded-xl p-6 bg-white shadow-sm">
                        <h3 className="text-lg font-bold mb-1">Post title</h3>
                        <p className="text-sm text-gray-400 mb-4">Post ID</p>
                        <p className="text-gray-600 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolores non ad facilis maxime facere, dolorem aliquam vero suscipit illum dicta perferendis et ab cupiditate sit? Ratione sit autem quas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

