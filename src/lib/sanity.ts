import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: '9mnm361m',
  dataset: 'production',
  apiVersion: '2025-05-20',
  useCdn: true,
})