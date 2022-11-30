import { ReactNode } from 'react'
import NextLink from 'next/link'
import MaterialLink, { LinkProps } from '@mui/material/Link'

type CustomLinkProps = LinkProps & {
  href: string,
  children: ReactNode,
}

const Link = ({ href, children, ...props }: CustomLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <MaterialLink {...props}>
        {children}
      </MaterialLink>
    </NextLink>
  )
}

export default Link