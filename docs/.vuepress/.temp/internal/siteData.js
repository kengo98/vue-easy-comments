export const siteData = JSON.parse("{\"base\":\"/vue-easy-comments/\",\"lang\":\"en-US\",\"title\":\"Easy Comments Doc V1.0\",\"description\":\"The easiest way to add comment functionality in your VUE application\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
