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

=================================
# Fast Blog

## Use of Link Tag.
<Link> allows client-side-navigation and allows props passing.

**Client-side navigation** means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser. [You can check this by changing the background color with browser tool and navigating with Link and observing the bg persists between transition. That means it didn't take full reload of the browser]

### Code Splitting
Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

### Prefetching
Next.js automatically prefetches the code for the linked page in the background.

## Use of Image Tag
Image allows lazy loading by default.

Images are always rendered in such a way as to avoid **Cumulative Layout Shift**, a Core Web Vital that Google is going to use in search ranking.

## Use of Head Tag
Head allows for change in metadata of individual pages. title can be custom made based on page.

## Use of Script Tag
Script tag allows for third party script to be added int the application. Some additional props can be used to optimize the the operation. Such as 'onLoad' and 'strategy'

## Module CSS
we can create comp.module.css to add the styling to any component.

## Global CSS
Global CSS can be imported in _app.js file. The file can be at any place. If the file is imported in the _app.js, the global styling of the application would change.