"use client";

import React from 'react';

export default function SubReddit({ params: paramsPromise }: { params: Promise<{ postId: string }>}){
    const [postId, setPostId] = React.useState<string | null >(null);
    React.useEffect(() => {
        paramsPromise.then(({ postId }) => setPostId(postId));
    }, [paramsPromise]);

    if (!postId){
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Post {postId}</h1>
            <p>This is the subreddit view for post {postId}</p>
            <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    )
}