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
  images?: string[]
}

export default function PostCard(post: PostProps) {
  const i = post.images != null && post.images.length > 0 && post.images[0]

  return (
    <article>
      <div className="gap-4 xl:grid xl:grid-cols-4">
        {i && (
          <div
            className="mb-4 min-h-[300px] border-2 border-black bg-cover bg-center shadow-md shadow-black dark:border-gray-400 xl:col-span-1 xl:min-h-[200px]"
            style={{
              backgroundImage: `url(${i})`,
            }}
          />
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
