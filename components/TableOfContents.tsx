import Link from 'next/link'

const TableOfContexts = ({ toc, depth = 2 }) => {
    return (
        <div>
            {toc.filter((entry) => entry.depth <= depth)
                .map(entry => {
                    return (
                        <div key={`#${entry.url}`}>
                            <Link href={entry.url} data-level={entry.depth} className="mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                {entry.value}
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}

export default TableOfContexts
