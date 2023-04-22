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

-----------------------------------------------------------
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

## Pre rendering
If you disable the javascript in the browser and try to browse a React.js application it won't load. But the same is not true for the nextJS Application. Because by default nextJS pre renders all the page. And make the pages interactive after initial js load. [for example Link components will be clickable after JS load]

# Two Form of Pre-Rendering and Data Fetching
There are two forms of pre rendering
1. Static Generation
2. Server Side Rendering

For SG it is built at the built time. For the SSR it is built on every request. So it is better to do as much as we can SG. But if the data frequently changes in the alpplication it is preferable to do SSR and even CR.

**This can be decided per page basis. So you may decide to SG one page, SSR one page and CSR another page.**

## Static Generation with and without Data
We can use SG in almost all pages. The rule of thumb is ask ourselves, "Can I pre render this page in advance?" If the answer is true then it should use SG.

But Sometimes it has some data dependecy. In this case we need to first fetch the data with `async getStaticProps = () => {}` and use that data as prop to our page.

### use of `getStaticProps`

```js
export default function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
```
### use of `getServerSideProps`

Because getServerSideProps is called at request time, its parameter (context) contains request specific parameters.

```js
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```

`Pro Tip: Statically Generate the part of the page that doesn't require the data and client side render what needs the data.`

## SWR
It handles caching, revalidation, focus tracking, refetching on interval, and more.

``` js
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

# Dynamic Routing