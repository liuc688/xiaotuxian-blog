import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '小兔鲜儿小程序',
  description: 'A VitePress Site',
  ignoreDeadLinks: true, // ✅ 禁用死链接检查
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '小兔鲜儿小程序', link: '/notes/0010-uni-app基础' },
    ],
    search: {
      provider: 'local',
    },

    sidebar: [
      {
        text: '小兔鲜儿小程序',
        items: [
          { text: '0010-uni-app基础', link: '/notes/0010-uni-app基础' },
          { text: '0020-项目起步', link: '/notes/0020-项目起步' },
          { text: '0030-首页模块', link: '/notes/0030-首页模块' },
          { text: '0040-推荐模块', link: '/notes/0040-推荐模块' },
          { text: '0050-分类模块', link: '/notes/0050-分类模块' },
          { text: '0060-详情模块', link: '/notes/0060-详情模块' },
          { text: '0070-登录模块', link: '/notes/0070-登录模块' },
          { text: '0080-用户模块', link: '/notes/0080-用户模块' },
          { text: '0090-地址模块', link: '/notes/0090-地址模块' },
          { text: '0100-SKU模块', link: '/notes/0100-SKU模块' },
          { text: '0110-购物车模块', link: '/notes/0110-购物车模块' },
          { text: '0120-订单模块', link: '/notes/0120-订单模块' },
          { text: '0130-项目打包', link: '/notes/0130-项目打包' },
          { text: '0140-解决方案', link: '/notes/0140-解决方案' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
