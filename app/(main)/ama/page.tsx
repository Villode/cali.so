// import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { Container } from '~/components/ui/Container'

const posts = [
  {
    date: '2024-09-15',
    label: '前端开发',
    content: '最近在研究 React 18 的新特性，发现其中的 Concurrent Mode 非常有趣。你们有什么看法？',
    image: 'https://img02.anheyu.com/adminuploads/1/2022/11/17/637580acb12b3.webp',
  },
  {
    date: '2024-09-14',
    label: 'UI/UX 设计',
    content: '重新设计了一个用户界面，使用了新的颜色方案和排版风格。看起来效果不错！',
    image: 'https://img02.anheyu.com/adminuploads/1/2022/11/17/637580acb12b3.webp',
  },
  {
    date: '2024-09-13',
    label: '创业经验',
    content: '最近我们公司完成了一个重要的项目，感觉很有成就感。创业路上充满挑战，但也很有意义。',
    image: 'https://img02.anheyu.com/adminuploads/1/2022/11/17/637580acb12b3.webp',
  },
]

export default function PostPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的动态
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>欢迎来到我的动态页面。在这里，我会分享一些关于前端开发、UI/UX设计和创业经验的最新动态。</Balancer>
        </p>
      </header>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="p-6 bg-white dark:bg-zinc-800 shadow-lg rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{post.date}</span>
              <span className="ml-4 px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">{post.label}</span>
            </div>
            <p className="mb-4 text-base text-zinc-700 dark:text-zinc-300">{post.content}</p>
            {post.image && (
              <Image src={post.image} alt="" className="w-full h-auto rounded-lg" />
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}
