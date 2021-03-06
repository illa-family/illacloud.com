import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)
const pagesUS = createPageList(
  require.context(`../pages/docs/en-US/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs/en-US'
)
const pagesCN = createPageList(
  require.context(`../pages/docs/zh-CN/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs/zh-CN'
)

export const documentationNav = {
  'Getting Started': [
    {
      title: 'Installation',
      href: '/docs/installation',
      match: /^\/docs\/installation/,
    },
    // {
    //   title: 'blog',
    //   href: '/blog',
    //   match: /^\/blog/
    // }
  ],
}

export const ILLADocumentationNav = (pathname) => {
  const cnReg = /\/zh-CN\//
  if (cnReg.test(pathname)) {
    return {
      'ILLA Builder': [
        pagesCN['overview'],
        pagesCN['quick-start']
      ],
      '安装ILLA Builder': [
        pagesCN['deploy-introduction'],
        pagesCN['illa-cli'],
        pagesCN['docker-compose'],
        pagesCN['k8s-helm'],
      ],
      '构建APPs': [
        pagesCN['create-resources']
      ]
    }
  } else {
    return {
      'ILLA Builder': [
        pagesUS['overview'],
        pagesUS['quick-start']
      ],
      'Install ILLA Builder': [
        pagesUS['deploy-introduction'],
        pagesUS['illa-cli'],
        pagesUS['docker-compose'],
        pagesUS['k8s-helm'],
      ],
      'ILLA University': [
        pagesUS['create-resources']
      ]
    }
  }
}
