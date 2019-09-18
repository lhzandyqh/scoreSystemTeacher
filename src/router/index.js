import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import treeTableRouter from './modules/tree-table'
// import nestedRouter from './modules/nested'

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  // 旧的首页
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: 'dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
  //     }
  //   ]
  // }
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/teacherHomePage/homeIndex'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },

  {
    path: '/gradereport',
    component: Layout,
    redirect: '',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '成绩分析',
      icon: 'chart',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: '/gradereport/classAnalysis',
        component: () => import('@/views/teacherGradeReport/classAnalyze/index'),
        name: 'classAnalysis',
        meta: {
          title: '班级分析',
          roles: ['admin'] // or you can only set roles in sub nav
        },
        children: [
          { path: '/gradereport/classAnalysis/xingzheng', component: () => import('@/views/teacherGradeReport/classAnalyze/xingzhengban/xingzheng'), name: 'xingzhengban', meta: { title: '行政班' }},
          { path: '/gradereport/classAnalysis/jiaoxue', component: () => import('@/views/teacherGradeReport/classAnalyze/jiaoxueban/jiaoxue'), name: 'jiaoxueban', meta: { title: '教学班' }}
        ]
        // children: [
        //   {
        //     path: 'xingzhenban',
        //     component: () => import('@/views/teacherGradeReport/test'),
        //     name: 'xinzheng',
        //     meta: {
        //       title: '行政班',
        //       roles: ['admin'] // or you can only set roles in sub nav
        //     }
        //   },
        //   {
        //     path: 'jiaoxueban',
        //     component: () => import('@/views/teacherGradeReport/test'),
        //     name: 'jiaoxue',
        //     meta: {
        //       title: '教学班',
        //       roles: ['admin'] // or you can only set roles in sub nav
        //     }
        //   }
        // ]
      },
      {
        path: '/gradereport/classCompare',
        component: () => import('@/views/teacherGradeReport/classComparsion/index'),
        name: 'classCompare',
        meta: {
          title: '班级对比'
          // if do not set roles, means: this page does not require permission
        },
        children: [
          { path: '/gradereport/classCompare/xingzheng', component: () => import('@/views/teacherGradeReport/classComparsion/xingzhenban/xingzhenCompare'), name: 'xingzhenban', meta: { title: '行政班' }},
          { path: '/gradereport/classCompare/jiaoxue', component: () => import('@/views/teacherGradeReport/classComparsion/jiaoxueban/jiaoxueCompare'), name: 'jiaoxueban', meta: { title: '教学班' }}
        ]
      },
      {
        path: '/gradereport/subjectAnalysis',
        component: () => import('@/views/teacherGradeReport/subjectAnalysis/index'),
        name: 'subjectAnalysis',
        meta: {
          title: '科目分析',
          roles: ['admin']
        },
        children: [
          { path: '/gradereport/subjectAnalysis/yuwen', component: () => import('@/views/teacherGradeReport/subjectAnalysis/yuwen/yuwenAnalysis'), name: 'yuwen', meta: { title: '语文' }},
          { path: '/gradereport/subjectAnalysis/shuxue', component: () => import('@/views/teacherGradeReport/subjectAnalysis/shuxue/shuxueAnalysis'), name: 'shuxue', meta: { title: '数学' }},
          { path: '/gradereport/subjectAnalysis/yingyu', component: () => import('@/views/teacherGradeReport/subjectAnalysis/yingyu/yingyuAnalysis'), name: 'yingyu', meta: { title: '英语' }},
          { path: '/gradereport/subjectAnalysis/wuli', component: () => import('@/views/teacherGradeReport/subjectAnalysis/wuli/wuliAnalysis'), name: 'wuli', meta: { title: '物理' }},
          { path: '/gradereport/subjectAnalysis/huaxue', component: () => import('@/views/teacherGradeReport/subjectAnalysis/huaxue/huaxueAnalysis'), name: 'huaxue', meta: { title: '化学' }},
          { path: '/gradereport/subjectAnalysis/shengwu', component: () => import('@/views/teacherGradeReport/subjectAnalysis/shengwu/shengwuAnalysis'), name: 'shengwu', meta: { title: '生物' }},
          { path: '/gradereport/subjectAnalysis/lishi', component: () => import('@/views/teacherGradeReport/subjectAnalysis/lishi/lishiAnalysis'), name: 'lishi', meta: { title: '历史' }},
          { path: '/gradereport/subjectAnalysis/zhengzhi', component: () => import('@/views/teacherGradeReport/subjectAnalysis/zhengzhi/zhengzhiAnalysis'), name: 'zhengzhi', meta: { title: '政治' }},
          { path: '/gradereport/subjectAnalysis/dili', component: () => import('@/views/teacherGradeReport/subjectAnalysis/dili/diliAnalysis'), name: 'dili', meta: { title: '地理' }}
        ]
      },
      {
        path: '/gradereport/subjectCompare',
        component: () => import('@/views/teacherGradeReport/subjectCompare/index'),
        name: 'subjectCompare',
        meta: {
          title: '科目对比',
          roles: ['admin']
        },
        children: [
          { path: '/gradereport/subjectCompare/yuwen', component: () => import('@/views/teacherGradeReport/subjectCompare/yuwen/yuwenCompare'), name: 'yuwen', meta: { title: '语文' }},
          { path: '/gradereport/subjectCompare/shuxue', component: () => import('@/views/teacherGradeReport/subjectCompare/shuxue/shuxueCompare'), name: 'shuxue', meta: { title: '数学' }},
          { path: '/gradereport/subjectCompare/yingyu', component: () => import('@/views/teacherGradeReport/subjectCompare/yingyu/yingyuCompare'), name: 'yingyu', meta: { title: '英语' }},
          { path: '/gradereport/subjectCompare/wuli', component: () => import('@/views/teacherGradeReport/subjectCompare/wuli/wuliCompare'), name: 'wuli', meta: { title: '物理' }},
          { path: '/gradereport/subjectCompare/huaxue', component: () => import('@/views/teacherGradeReport/subjectCompare/huaxue/huaxueCompare'), name: 'huaxue', meta: { title: '化学' }},
          { path: '/gradereport/subjectCompare/shengwu', component: () => import('@/views/teacherGradeReport/subjectCompare/shengwu/shengwuCompare'), name: 'shengwu', meta: { title: '生物' }},
          { path: '/gradereport/subjectCompare/lishi', component: () => import('@/views/teacherGradeReport/subjectCompare/lishi/lishiCompare'), name: 'lishi', meta: { title: '历史' }},
          { path: '/gradereport/subjectCompare/zhengzhi', component: () => import('@/views/teacherGradeReport/subjectCompare/zhengzhi/zhengzhiCompare'), name: 'zhengzhi', meta: { title: '政治' }},
          { path: '/gradereport/subjectCompare/dili', component: () => import('@/views/teacherGradeReport/subjectCompare/dili/diliCompare'), name: 'dili', meta: { title: '地理' }}
        ]
      },
      {
        path: 'gradeprofiles',
        component: () => import('@/views/teacherGradeReport/gradeProfiles/index'),
        name: 'd',
        meta: {
          title: '年级概况',
          roles: ['admin']
        },
        children: [
          { path: 'gradeScore', component: () => import('@/views/teacherGradeReport/gradeProfiles/gradeScoreReport/gradeScore'), name: 'gradeScore', meta: { title: '年级成绩单' }},
          { path: 'singleSubject', component: () => import('@/views/teacherGradeReport/gradeProfiles/singleSubjectReport/singleSubject'), name: 'singleSubject', meta: { title: '单科成绩单' }}
        ]
      },
      {
        path: 'gradeanalysis',
        component: () => import('@/views/teacherGradeReport/gradeAnalysis/index'),
        name: 'e',
        meta: {
          title: '年级分析',
          roles: ['admin']
        },
        children: [
          { path: 'gradeSixRates', component: () => import('@/views/teacherGradeReport/gradeAnalysis/gradeSixRates/gradeRates'), name: 'gradeSixRates', meta: { title: '年级六率' }},
          { path: 'allPreviousGrade', component: () => import('@/views/teacherGradeReport/gradeAnalysis/allPreviousGrade/allPrevious'), name: 'allPreviousGrade', meta: { title: '历次成绩' }}
        ]
      }
    ]
  },

  {
    path: '/record',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/svg-icons/index'),
        name: 'jilu',
        meta: { title: '考试分析', icon: 'form', noCache: true }
      }
    ]
  },

  {
    path: '/summary',
    component: Layout,
    children: [
      {
        path: 'zongjie',
        component: () => import('@/views/svg-icons/index'),
        name: 'Icons',
        meta: { title: '考试总结', icon: 'documentation', noCache: true }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/svg-icons/index'),
        name: 'Icons',
        meta: { title: 'icons', icon: 'icon', noCache: true }
      }
    ]
  },
  //
  // /** When your routing table is too long, you can split it into small modules**/
  // // componentsRouter,
  // // chartsRouter,
  // // nestedRouter,
  // // tableRouter,
  // // treeTableRouter,
  //
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', icon: 'tab' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/exportExcel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/selectExcel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/mergeHeader'),
  //       name: 'MergeHeader',
  //       meta: { title: 'mergeHeader' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/uploadExcel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'pdf', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },
  //
  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]
