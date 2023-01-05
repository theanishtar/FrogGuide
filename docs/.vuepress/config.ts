import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default {

    // url

    title: 'Frog Guide',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Frog Guide',
            description:
                'Môi trường học tập lý tưởng cho sinh viên Công Nghệ Thông Tin',
        },
    },
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: 'Tiếng việt',

            },

        },
        logo: 'https://raw.githubusercontent.com/echhoclaptrinh/Image/main/frog/hero.png',
        navbar: [
            {
                text: 'Home',
                link: 'README.md'
            }, {
                text: 'Guide',
                link: '/guide.md'
            },
            // nested group - max depth is 2
            {
                text: 'Lập trình',
                children: [
                    {
                        text: 'Java',
                        children: [
                            {
                                text: 'Java cơ bản',
                                link: '/course/java/Java-Basic/Readme.md',
                            },
                            {
                                text: 'Hướng đối tượng trong java',
                                link: '/not-foo/',
                                // this item will be active when current route path starts with /foo/
                                // regular expression is supported

                            },
                        ],
                    },
                ],
            },
            // control when should the item be active
            {
                text: 'Group 2',
                children: [
                    {
                        text: 'Always active',
                        link: './course/java/Java Basic/1.GioiThieu.html',
                    },
                    {
                        text: 'Active on /foo/',
                        link: '/not-foo/',
                    },
                ],
            },
            {
                text: 'Github',
                link: 'https://github.com/TheanIshtar'
            },
        ],
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search     ',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
        }),
    ],
}