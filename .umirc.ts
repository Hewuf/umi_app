import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {
  //   name: 'antd',
  //   locale: true,
  //   layout: 'side'
  // },
  routes: [
    { path: '/home', component: '@/pages/Home' },
    { path: '/menu', component: '@/pages/MenuTab',  },
    { path: '/menu/weight', component: '@/pages/Weight/weightRecords',  },
    
    

  ],
  fastRefresh: {},
});
