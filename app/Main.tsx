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
      <div>
        <div className="flex sm:space-x-24">
          <div className='flex flex-auto flex-wrap overflow-auto'>
            <div className="grid grid-cols-2 gap-6">
              {posts.length > 1 && posts.slice(1, MAX_DISPLAY).map(PostCardMinimal)}
            </div>
          </div>
          <div className="hidden h-full min-w-[280px] max-w-[280px] flex-wrap overflow-auto sm:flex">
            Highlights
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
