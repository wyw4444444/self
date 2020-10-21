
'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const views = require('koa-views');
const serve = require('koa-static');

 
const app = new Koa();
const router = new Router();

app.use(serve(__dirname));
//配置模板引擎
app.use(views(__dirname + '/views/',{
    extension: 'html'
}))
//使用koa-router
app.use(koaBody()).use(router.routes());

app.listen(3000);
 
console.log('app started at port 3000...');
//设置路由
router.get('/task1', async(ctx, next) => {
    await ctx.render("task01/index",{
        title:"nodeWeb 首页"
    })
});