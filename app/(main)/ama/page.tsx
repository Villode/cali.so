import { useEffect, useState } from 'react';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Container } from '~/components/ui/Container';

const DATA_URL = 'https://json-ple.pages.dev/ssdata.json';

export default function AskMeAnythingPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          即刻短文
        </h1>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="relative bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
            <div className="absolute top-4 left-4 text-sm text-zinc-500 dark:text-zinc-400">
              <time>{post.date}</time>
              <div className="mt-2">
                {post.tags && post.tags.map((tag, i) => (
                  <span key={i} className="inline-block bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-800 dark:text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-12">
              {post.image && (
                <div className="mb-4">
                  <Image src={post.image} alt="" className="w-full h-auto rounded-lg" />
                </div>
              )}
              <p className="text-base text-zinc-800 dark:text-zinc-100">
                <Balancer>{post.content}</Balancer>
              </p>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}
