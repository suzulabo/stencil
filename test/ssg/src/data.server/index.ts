import type { MapParamData } from '../stencil-router';

export interface BlogData {
  id: string;
  title: string;
  content: string;
}

const blogs: BlogData[] = [];

export const getBlogs: MapParamData = () => {
  return {
    blogs: [
      {
        id: 'static-site-generation',
        title: 'What is SSG?',
        content:
          '# What is Static Site Generation (SSG)?\n\nOne of the best ways to build fast, interactive web sites and web apps is to utilize Static Site Generation instead of Server Side Rendering (known as SSR) or Client Side Rendering (known as Single Page Apps, or SPAs).\n\n[Read More](https: //stenciljs.com/docs/static-site-generation)',
      },
      {
        id: 'server-side-rendering',
        title: 'What is SSR?',
        content:
          '# What is Server Side Rendering (SSR)?\n\nStatic Site Generation and Server Side Rendering are often confused but are very different approaches to solve the same problem: providing already rendered content to the client before the client has loaded and rendered itself.\n\n[Read More](https: //stenciljs.com/docs/static-site-generation-server-side-rendering-ssr)',
      },
    ],
  };
};

export const getBlog: MapParamData = async ({ params }) => blogs.find(b => b.id === params.id);
