const contentRouter = {
    route: null,
    name: null,
    title: '期刊管理',
    type: 'folder', // 类型: folder, tab, view
    icon: 'iconfont icon-tushuguanli',
    order: null,
    inNav: true,
    children: [{
            title: '内容管理',
            type: 'view',
            name: 'contentAdd',
            route: '/content/list',
            filePath: 'views/content/list.vue',
            inNav: true,
            icon: 'iconfont icon-tushuguanli',
        },

    ],
}

export default contentRouter