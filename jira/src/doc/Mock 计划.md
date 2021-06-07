# REST API
一句话来概括：URI 代表资源 METHOD 代表行为

GET/tickets       //获取列表
GET/tickets/12    //详情
POST/tickets      //增加
PUT/tickets/12    //替换
PATCH/tickets/12  //修改
DELETE/tickets/12 //删除

# 环境变量
.env                线上环境变量
.env.development    开发环境变量

使用
process.env.REACT_APP_API_URL

webpack 在打包的过程中会区分环境变量，打包到bundle文件中。


# 测试
### msw/node
setupServer 用于 mock server 
