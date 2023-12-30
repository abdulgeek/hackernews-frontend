"use client";
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import Post from './components/Post';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface PostData {
  title: string;
  author: string;
  time: Date;
  url: string;
}

const Home: NextPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setPosts(response.data);
      } catch (error) {
        // Handle error
        if (axios.isAxiosError(error)) {
          setError('An error occurred while fetching the data.');
        } else {
          setError('Unable to connect to the server.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        {loading && <p>Loading...</p>}
        {!loading && error && <p className="error-message">{error}</p>}
        {!loading && !error && posts.map((post, index) => <Post key={index} {...post} />)}
      </main>
    </div>
  );
};

export default Home;