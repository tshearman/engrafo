import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import PostCard from '@/components/PostCards/PostCard'
import PostCardMinimal from '@/components/PostCards/PostCardMinimal'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="pb-10">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div>
          {!posts.length && 'No posts found.'}
          {posts.length >= 1 && PostCard(posts[0])}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="col-span-3 lg:col-span-2 ">
          <div className="grid grid-cols-1 gap-6 pb-12 xl:grid-cols-2">
            {posts.length > 1 && posts.slice(1, MAX_DISPLAY).map(PostCardMinimal)}
          </div>
          {posts.length > MAX_DISPLAY && (
            <div className="col-span-2 flex justify-center text-base font-medium leading-6">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="All posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>
        <div className="col-span-2 lg:col-span-1 lg:pl-4">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            Highlights
          </h1>
        </div>
      </div>
    </>
  )
}
