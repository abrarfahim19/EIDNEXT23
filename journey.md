# Development And Production

The underlying concepts that makes NEXTJS so efficient are:

1. Compiling - transforming the code into something parsable by browser
2. Minifying - removing unneccessary spaces and code redability parts and making the file smaller
3. Bundling - resolving application dependency graph and reducing the number of files
4. Code Splitting - Splitting the pages by loading only required code so that the initial loading is minimized.
   - Pre Loading the code.
   - Dynamic imports.

## Build Time

## Runtime

## Server and Client

## Rendering

Rendering can happer either ahead of time at build time or on every request at runtime.
Next.JS has three types of rendering method available:

1. Server-Side Rendering (Pre-Rendering) [getServerSideProps]
2. Static Site Generation (Pre-Rendering) [getStaticProps]
3. Client-Site Rendering

So there are two types of pre-rendering and that involves `Hydration`.

## ISR - Incremental Static Regeneration.

Data Fetching [https://nextjs.org/docs/basic-features/data-fetching/overview]

# Network

It can be distributed to

1. Origin Servers
2. CDN
3. The Edge
