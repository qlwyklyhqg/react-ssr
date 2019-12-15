## 总结

ssr前后端同构，是通过对包括路由和数据获取等环节进行改造，以使得后端可以在一定条件下提前渲染页面。

为达到这一效果，此次实践将路由和数据获取的部分改造后暴露，使得后端可以调取进行解析渲染。

前端异步获取数据的方式给后端渲染带来困难，实践中通过后端获取数据，注入页面window.__context对象的方式，实现了前后端同构异步数据获取