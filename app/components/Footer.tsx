/* eslint-disable prettier/prettier */
import { Logo } from '~/components/Logo'

export function Footer() {
  return (
    <header className="border-t border-gray-100 transition-colors duration-200 ease-in-out dark:border-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-12 text-xs lg:text-1xl md:text-base font-bold">
        &copy; 2023. All rights reserved.
      </div>
    </header>
  )
}
