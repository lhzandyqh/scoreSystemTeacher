import { asyncRoutes, constantRoutes } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routes: constantRoutes, // []
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
      console.log('检查set_router')
      console.log(state.addRoutes)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        // const { roles } = data
        // let accessedRoutes
        // if (roles.includes('admin')) {
        //   accessedRoutes = asyncRoutes
        // } else {
        //   accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        // }
        // commit('SET_ROUTES', accessedRoutes)
        // resolve(accessedRoutes)
        // const { roles } = data
        let accessedRouters
        const role = window.localStorage.getItem('userRole')
        // eslint-disable-next-line prefer-const
        accessedRouters = filterAsyncRoutes(asyncRoutes, [role])
        console.log('输出GenerateRoutes中的role看一看')
        console.log(role)
        console.log('输出accessedRouters')
        console.log(accessedRouters)
        // } else {
        // accessedRouters = filterAsyncRouter(asyncRouterMapGrow, [role])
        // }
        // }
        commit('SET_ROUTES', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
