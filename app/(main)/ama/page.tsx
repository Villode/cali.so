import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { Container } from '~/components/ui/Container'

// import PlaceholderImage from './placeholder-image.jpg'

const title = '假文章标题'
const description =
  '这是一个假文章描述，用于展示如何将页面转换成推特文章卡片格式。'

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
}

export default function TwitterCardPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <article className="bg-white shadow-md rounded-lg overflow-hidden max-w-xl mx-auto">
        <header className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">
            {title}
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            <Balancer>{description}</Balancer>
          </p>
        </header>

        <div className="p-4">
          <Image
            src={PlaceholderImage}
            alt="Placeholder"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <footer className="p-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            @username • 2h
          </p>
        </footer>
      </article>
    </Container>
  )
}
