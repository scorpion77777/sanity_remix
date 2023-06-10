/* eslint-disable prettier/prettier */
import type { SanityImageObjectStub } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'


import { projectDetails } from '~/sanity/projectDetails'

type RecordCoverProps = {
  title?: string | null
  content?: string | null
  image?: SanityImageObjectStub
}

export function RecordCover(props: RecordCoverProps) {
  const { title, image, content } = props

  return (

    <div className="aspect-square light:bg-black">
      {image ? (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="h-auto w-full object-cover shadow-black transition-all duration-200 group-hover:shadow-2xl group-hover:shadow-cyan-200 bg-black"
            src={urlBuilder(projectDetails())
              // @ts-ignore
              .image(image.asset._ref)
              .height(800)
              .width(800)
              .fit('max')
              .auto('format')
              .url()}
            alt={String(title) ?? ``}
            loading="lazy" />


        </div>

      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500">
          {title ?? `Missing Record art`}
        </div>
      )}
    </div>
  )
}
