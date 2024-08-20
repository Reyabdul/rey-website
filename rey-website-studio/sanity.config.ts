import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'rey-website-studio',
 
  projectId: "4lhd8m96",
  dataset: "production",
  apiVersion: "2024-08-02",
  useCdn: false, //ref : https://www.sanity.io/help/js-client-cdn-configuration

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
