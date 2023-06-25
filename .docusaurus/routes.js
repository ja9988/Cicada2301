import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Cicada2301/blog',
    component: ComponentCreator('/Cicada2301/blog', '1a0'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/archive',
    component: ComponentCreator('/Cicada2301/blog/archive', 'ab7'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/first-blog-post',
    component: ComponentCreator('/Cicada2301/blog/first-blog-post', 'dc9'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/long-blog-post',
    component: ComponentCreator('/Cicada2301/blog/long-blog-post', '293'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/mdx-blog-post',
    component: ComponentCreator('/Cicada2301/blog/mdx-blog-post', 'b30'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/tags',
    component: ComponentCreator('/Cicada2301/blog/tags', '4f6'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/tags/docusaurus',
    component: ComponentCreator('/Cicada2301/blog/tags/docusaurus', '8c6'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/tags/facebook',
    component: ComponentCreator('/Cicada2301/blog/tags/facebook', '0b6'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/tags/hello',
    component: ComponentCreator('/Cicada2301/blog/tags/hello', '972'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/tags/hola',
    component: ComponentCreator('/Cicada2301/blog/tags/hola', 'a8b'),
    exact: true
  },
  {
    path: '/Cicada2301/blog/welcome',
    component: ComponentCreator('/Cicada2301/blog/welcome', 'd79'),
    exact: true
  },
  {
    path: '/Cicada2301/markdown-page',
    component: ComponentCreator('/Cicada2301/markdown-page', '974'),
    exact: true
  },
  {
    path: '/Cicada2301/docs',
    component: ComponentCreator('/Cicada2301/docs', '359'),
    routes: [
      {
        path: '/Cicada2301/docs/category/tutorial---basics',
        component: ComponentCreator('/Cicada2301/docs/category/tutorial---basics', '8eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/category/tutorial---extras',
        component: ComponentCreator('/Cicada2301/docs/category/tutorial---extras', '6cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/cOSINT',
        component: ComponentCreator('/Cicada2301/docs/cOSINT', '9e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/intro',
        component: ComponentCreator('/Cicada2301/docs/intro', 'b6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/MaoMao/random',
        component: ComponentCreator('/Cicada2301/docs/MaoMao/random', '76d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/Morsa/rename',
        component: ComponentCreator('/Cicada2301/docs/Morsa/rename', '655'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/OSINT/people',
        component: ComponentCreator('/Cicada2301/docs/OSINT/people', 'b34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Cicada2301/docs/tutorial-basics/congratulations', '469'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Cicada2301/docs/tutorial-basics/create-a-blog-post', 'd6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Cicada2301/docs/tutorial-basics/create-a-document', '692'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Cicada2301/docs/tutorial-basics/create-a-page', '677'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Cicada2301/docs/tutorial-basics/deploy-your-site', 'fc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Cicada2301/docs/tutorial-basics/markdown-features', '82b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Cicada2301/docs/tutorial-extras/manage-docs-versions', 'f38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Cicada2301/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Cicada2301/docs/tutorial-extras/translate-your-site', '48d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Cicada2301/',
    component: ComponentCreator('/Cicada2301/', '90d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
