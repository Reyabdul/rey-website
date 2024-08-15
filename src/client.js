/*
    Embedding Sanity in React
        ref: https://www.sanity.io/guides/create-a-single-page-application-with-react-and-sanity
*/

import { SanityClient } from "@sanity/client";

export default SanityClient({
    projectId: '4lhd8m96',
    dataset: 'production',
})