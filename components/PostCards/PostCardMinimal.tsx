import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

interface PostProps {
  path: string
  slug: string
  date: string
  title: string
  summary: string
  tags: string[]
  image?: string
}

export default function PostCardMinimal(post: PostProps) {
  console.log(post)
  return (
    <div>
      <div key={post.path} className="m-2">
        <article className="flex flex-col space-y-2 xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={post.date}>{formatDate(post.date, siteMetadata.locale)}</time>
            </dd>
          </dl>
          <div className="space-y-3">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <Link href={`/${post.path}`} className="text-gray-900 dark:text-gray-100">
                  {post.title}
                </Link>
              </h2>
              <div className="flex flex-wrap">
                {post.tags?.map((tag) => <Tag key={tag} text={tag} />)}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
