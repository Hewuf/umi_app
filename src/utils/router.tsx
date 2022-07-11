// 路由跳转
export function router(path = '') {
  const url = window.location.origin + path;
  window.location.href = url;
  console.log('url>>>', url);
}
