import { useEffect, useState } from "react"

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export function useFetchPost(url: string){
    const [post, setPost] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string|null>(null)
    const [refreshCounter, setRefreshCounter] = useState(0)

    useEffect(() => {
        if(!url) return

        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url);
                if(!response.ok) throw new Error('Failed to fetch data.....');
                const data = await response.json()
                setPost(data);
            } catch (err) {
                setPost([])
                setError(err instanceof Error? err.message: 'Unknow error.....')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url, refreshCounter])
        
    return {post, loading, error, refetch: () => setRefreshCounter(c => c + 1)}
}
