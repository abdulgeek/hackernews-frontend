import React from 'react';

interface PostProps {
    title: string;
    author: string;
    time: Date;
    url: string;
}

const Post: React.FC<PostProps> = ({ title, author, time, url }) => {
    return (
        <div className="border-b border-gray-300 p-4">
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold">{title}</a>
            <div className="text-sm text-gray-600">Posted by {author} on {new Date(time).toLocaleDateString()}</div>
        </div>
    );
};

export default Post;
