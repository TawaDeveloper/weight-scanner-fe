# bo-mall-platform

---

> bo-mall-platform (商城平台运营管理相关)

## Development Guide

- 鉴权、菜单、标题 等公共部分由基座应用负责
- DEPLOY_ENV 由基座挂载在 window 下
- token 需要使用 SwitchHost 进行 host 配置或 copy 对应环境 token 到 localStorage
- getContainer、getPopupContainer 指定 Antd 组件 挂载的节点，但依旧为全局展示，false 为挂载在当前位置

## Back Office 系统划分

bo-main-framework

- 登录、注册
- 权限管理
- 应用管理
- ...

bo-marketing (营促销相关)

- 注册会员管理
- 积分明细查询
- 积分规则配置
- 邀请海报配置
- 会员等级配置
- 前台我的广告位配置
- 注销会员信息
- ...

bo-cms (内容管理相关)

- 评论审核管理
- 平台内容分类
- 平台内容发布
- 帮助中心管理
- 简体中文
- 食谱内容发布
- 意见反馈管理
- ...

bo-mall-platform (商城平台运营管理相关)

- 登录配置
- 首页配置
- 商品
- ...
