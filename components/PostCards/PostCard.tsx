import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

interface PostProps {
  slug: string
  date: string
  title: string
  summary: string
  tags: string[]
  image?: string
}

export default function PostCard(post: PostProps) {
  return (
    <article>
      <div className="gap-4 xl:grid xl:grid-cols-4">
        {!post.image && (
          <div className="mb-4 min-h-[300px] border-2 border-black bg-[url('/static/images/canada/mountains.jpg')] bg-cover bg-center shadow-md shadow-black xl:col-span-1 xl:min-h-[200px]" />
        )}
        <div className="xl:col-span-3">
          <div>
            <div>
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>{formatDate(post.date, siteMetadata.locale)}</time>
                </dd>
              </dl>
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <Link href={`/blog/${post.slug}`} className="text-gray-900 dark:text-gray-100">
                  {post.title}
                </Link>
              </h2>
              <div className="flex flex-wrap">
                {post.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">{post.summary}</div>
          </div>
          <div className="text-base font-medium leading-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Read more: "${post.title}"`}
            >
              Read more &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
