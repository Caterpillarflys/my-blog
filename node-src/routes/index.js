const router = require('koa-router')();
const ArticleController = require('../controllers/article');

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   });
// });
router.get('/article/:id', ArticleController.detail);
router.get('/list', ArticleController.list);
router.post('/send', ArticleController.create);

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string';
// });

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   };
// });

module.exports = router;
