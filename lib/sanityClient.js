import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'mnh232sx',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skQ3wI5qPLB4HvQvseVKHzyFQ58TcdJi80f010lb5eUHnThaAjIJ35lH2YPvAfzpuBUHjICXPt4TqWJAF2KI866s9WIDZc9tLxjva65OrABiEEmgEKOT8GGYxD8S6rQlpitqk8k08WXF3C6h8LRm0p38lHRPqiQV3UV7LJTmD1sET7jUp9xU',
  useCdn: false,
})
