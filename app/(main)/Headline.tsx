'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >

        <span className="block handwrite-animation">
          親身經歷后才知我們，
        </span>
        <span className="block handwrite-animation delay-[1s]">
          活在巨大差距裏
        </span>
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
        Hi~ 我係Villode，😆哇！竟然有咁有眼光嘅你嚟到我嘅Blog！
          <PeekabooLink href="https://002777.xyz">[博客]</PeekabooLink>
          飲杯☕咖啡放鬆下啦！而家我正努力喺學習編程嘅路上邁進，致力於持續創造出優秀嘅作品，目前專注於前端同移動端開發。
          我熱愛生活，鍾意討論技術，站喺巨人嘅肩膀上，不斷提升自己。如果你有興趣，我哋可以一齊交流，共同成長！🚀
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://cali.so/twitter"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://cali.so/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://cali.so/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://cali.so/github"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://cali.so/tg"
          aria-label="我的 Telegram"
          platform="telegram"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:hi@cali.so"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
