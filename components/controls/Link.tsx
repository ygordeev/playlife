import NextLink from 'next/link'
import MaterialLink, { LinkProps } from '@mui/material/Link'

type CustomLinkProps = LinkProps & {
  label: string,
  href: string,
}

const Link = ({ label, href, ...props }: CustomLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <MaterialLink {...props}>
        {label}
      </MaterialLink>
    </NextLink>
  )
}

export default Link