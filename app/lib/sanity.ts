import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: '2024-02-12',
    dataset: 'production',
    projectId: 'yxrnevlm',
    useCdn: false,
})