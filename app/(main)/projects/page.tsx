import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '友链'
const description =
  '每一个独立博客都是一个信息孤岛,通过友链把孤岛连接起来！'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          朋友圈
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        <b>每一个独立博客都是一个信息孤岛,通过友链把孤岛连接起来！</b>
        想和我交换友链的，没啥特别需求，只是希望你的博客有<b>原创</b>、有<b>意义</b>的内容，并且建站<b>已满半年</b>。那种塞满了转载文章的采集站点还是绕道吧。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
