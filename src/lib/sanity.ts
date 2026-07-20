import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'fn4esp4z',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
})