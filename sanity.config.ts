/* eslint-disable prettier/prettier */
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import { projectDetails } from '~/sanity/projectDetails'
import schema from '~/sanity/schema'
import { defaultDocumentNode, structure } from '~/sanity/structure'


export const config = defineConfig({
  ...projectDetails(),
  name: 'sanity-remix',
  title: 'Sanity Remix!',
  plugins: [deskTool({ structure, defaultDocumentNode }), visionTool(), vercelDeployTool()],
  basePath: `/studio`,
  schema: {
    types: schema,
  },
})
