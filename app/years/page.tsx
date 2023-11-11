import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import yearData from 'app/year-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Years', description: 'Posts by Year' })

export default async function Page() {
  const yearCounts = yearData as Record<string, number>
  const yearKeys = Object.keys(yearCounts).sort((a, b) => (b > a ? 1 : -1))
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Years
          </h1>
        </div>
        <div className="flex max-w-xs flex-wrap">
          {yearKeys.length === 0 && 'No posts found.'}
          {yearKeys.map((year) => {
            return (
              <div key={year} className="mb-2 mr-5 mt-2">
                <Tag text={year} />
                <Link
                  href={`/years/${slug(year)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts from ${year}`}
                >
                  {` (${yearCounts[year]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
