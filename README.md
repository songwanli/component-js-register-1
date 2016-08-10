# 支持平台

|平台 | 是否支持 |
|-----|------|
|JS    | 支持 ~~不支持~~    |
# 依赖服务器/模拟数据

|平台 | 是否依赖 |
|-----|------|
|FO-Java    | ~~依赖~~ 不依赖   |
|FO-NodeJS    | ~~依赖~~   不依赖   |
|mockdata    | 依赖  ~~不依赖~~  |

# 依赖框架

|框架 | 是否依赖 |
|-----|------|
|pastry   | 依赖  ~~不依赖~~   |


# 组件依赖关系

|组件 | 版本号 | 地址|
|-----|------|----|
|无    |     |    |

# 功能介绍
1. 输入用户基本信息（用户名、密码、支付密码）并进行基本校验；
2. 对手机号通过验证码进行校验；

# 安装方法
cmd进入工程根目录路径下(例如:HelloWorld)，执行 pastry bake bower install component-js-register命令

# 使用方法
1. 由于暂时没有js的原生密码控件，将Registered.html里的Component.Phonecheck中的校验密码的部分注释掉，实际使用时需将以下代码放开：



  /* 
  else if(data.PASSWORD == "" || data.PASSWORD ==   undefined) { 
   Bridge.alert("密码不能为空!");
   
            .....
            
   Bridge.alert("支付密码为6位!");
            }
            
 */
 
 2.此组件暂时不能用js原生直接向前置发ajax请求，待以后完善。
# 作者
songwl