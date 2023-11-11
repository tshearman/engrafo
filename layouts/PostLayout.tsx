import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import TableOfContexts from '@/components/TableOfContents'


const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags, toc } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] xl:grid xl:grid-cols-4 xl:gap-x-6">
            <div className="text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 pt-4">
              {tags && (
                <div className="py-4">
                  <details open>
                    <summary className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 cursor-pointer">
                      Tags
                    </summary>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </details>
                </div>
              )}
              {(toc.length > 0) && (
                <div className="py-4">
                  <div className="flex flex-wrap">
                    <details open>
                      <summary className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 cursor-pointer">
                        Contents
                      </summary>
                      <TableOfContexts toc={toc} />
                    </details>
                  </div>
                </div>
              )}
              <div className="py-4">
                <div className="flex flex-wrap">
                  <details open>
                    <summary className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 cursor-pointer">
                      Back
                    </summary>
                    <div>
                      <Link
                        href={"/blog"}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="Back to posts"
                      >
                        &larr; to Posts
                      </Link>
                    </div>
                    <div>
                      <Link
                        href={"/"}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="Back to home"
                      >
                        &larr; to Home
                      </Link>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-3 lg:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            <footer />
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
