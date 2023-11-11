import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import yearData from 'app/year-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { year: string } }): Promise<Metadata> {
    const year = decodeURI(params.year)
    return genPageMetadata({
        title: year,
        description: `${siteMetadata.title} posts from ${year}`,
        alternates: {
            canonical: './',
            types: {
                'application/rss+xml': `${siteMetadata.siteUrl}/years/${year}/feed.xml`,
            },
        },
    })
}

export const generateStaticParams = async () => {
    const yearCounts = yearData as Record<string, number>
    const yearKeys = Object.keys(yearCounts)
    const paths = yearKeys.map((year) => ({
        year: year,
    }))
    return paths
}

export default function TagPage({ params }: { params: { year: string } }) {
    function toYear(s: string) {
        return (new Date(Date.parse(s))).getFullYear()
    }

    const year = params.year
    const filteredPosts = allCoreContent(
        sortPosts(allBlogs.filter((post) => post.date && `${toYear(post.date)}` == year))
    )
    return <ListLayout posts={filteredPosts} title={year} />
}
