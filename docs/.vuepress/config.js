const {sidebarHelp} = require('./help');
console.log(JSON.stringify(sidebarHelp()), 'sidebarHelp')
module.exports = {
    title: 'hello ',
    description: 'blog',
    
    base: '/', // 站点基础路径
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
            // { text: '求索', link: '/FAQ/' },
        ],

        /**
         *        
         * {
                title: 'Group 1',   // 必要的
                path: '/day/',      // 可选的, 应该是一个绝对路径
                children: [
                    ['/day/', '/day/index'],
                    ['/day/Introduction']
                ]
            },
         */
        sidebar: sidebarHelp(),
    }

}