/* eslint-disable prettier/prettier */
import { Logo } from '~/components/Logo'
import { ThemeToggle } from '~/components/ThemeToggle'
import { Example } from '~/components/Framer'

type HeaderProps = {
  siteTitle?: string | null
}

export function Header(props: HeaderProps) {


  return (
    <header className="border-b border-gray-100 transition-colors duration-200 ease-in-out dark:border-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-12 z-auto">
        <Example />
        <Logo siteTitle={props.siteTitle} />
        <ThemeToggle />
      </div>
    </header>

  )
}
