# demo1

> egg+mongo的小demo,只关于查询

> 应用插件 `egg-mongo`

> 目录介绍 
 
* model: 新增 就是mongodb的model

* service: 新增 按文档说,是处理数据的

* controller: 链接路由的最后一层

* public 发布静态文件的目录

> 数据库名叫test1,表名也叫test1 只有一个字段,叫name

> 关键在约定
----
## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/news
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org