import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import Card from './Card'

export const components: MDXComponents = {
  Image,
  TOCInline,
  Card,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
}
