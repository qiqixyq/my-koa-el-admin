import { LinRouter, NotFound, disableLoading } from 'lin-mizar';

// content 的红图实例
const contentApi = new LinRouter({
    prefix: '/v1/content'
});
contentApi.get('/', async ctx => {
    const test = {
        res: true,
    }
    return ctx.json(test)
})
module.exports = { contentApi }