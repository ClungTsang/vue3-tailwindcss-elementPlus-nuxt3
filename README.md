# 基于Nuxt3 + TailwindCSS + ElementPlus 的快速开发模板 

> - 查看[Nuxt3官方文档](https://nuxt.com/)
> - 查看[Tailwind文档](https://tailwindcss.com/)

## 安装依赖
``` bash 
pnpm i 
```

### 本地启动命令
``` bash
pnpm run
```

## 构建项目
```bash
pnpm run build
```

### 本地预览命令
``` bash
pnpm preview
```

## 部署项目使用pm2守护进程
> [pm2文档](https://ezdoc.cn/docs/pm2/quick-start)  

## 开启进程守护
```bash
pm2 start
```
## 查看进程守护列表
```bash
pm2 list 
```
## 清空进程守护
```bash
pm2 kill
```
## 删除指定进程
```bash
pm2 kill <项目名称>
```
## 重启进程守护：
```bash
pm2 restart <项目名称>
```


## git提交规范
- feat: 增加新功能
- fix: 修复问题/BUG
- style: 代码风格相关无影响运行结果的
- perf: 优化/性能提升
- refactor: 重构
- revert: 撤销修改
- test: 测试相关
- docs: 文档/注释
- chore: 依赖更新/脚手架配置修改等
- workflow: 工作流改进
- ci: 持续集成
- types: 类型定义文件更改
- wip: 开发中


## CodeReview 常用缩写
- PR（Pull Request）拉取请求，给其他项目提交代码
- LGTM（Looks Good To Me）代码已经过 review，可以合并
- SGTM（Sounds Good To Me）和上面那句意思差不多，也是已经通过了 - review 的意思
- WIP（Work In Progress）如果有个改动很大的 PR，可以在写了一部分的情- 况下先提交，但需在标题写上 WIP，以告诉项目维护者这个功能还未完成，方便- 维护者提前 review 部分提交的代码
- PTAL（Please Take A Look）提示别人来看一下
- TBR（To Be Reviewed）提示维护者进行 review
- TL;DR（Too Long; Didn't Read）太长懒得看
- TBD（To Be Done(or Defined/Discussed/Decided/Determined)） 一般表示还没搞定
