import { searchPlugin } from '@vuepress/plugin-search'

export default {
    plugins: [
      searchPlugin({
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      }),
    ],
}