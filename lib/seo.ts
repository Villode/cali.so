export const seo = {
  title: 'Villode | 开发、编程、设计、Ai',
  description:
    '我係Villode，😆哇！竟然有咁有眼光嘅你嚟到我嘅Blog，而家我正努力喺學習編程嘅路上邁進，致力於持續創造出優秀嘅作品',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://002777.xyz'
      : 'http://localhost:3000'
  ),
} as const
