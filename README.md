# 基于Nuxt3 + TailwindCSS + ElementPlus 的快速开发模板框架

> - 查看[Nuxt3官方文档](https://nuxt.com/)
> - 查看[Tailwind文档](https://tailwindcss.com/)

## 要求
- Node.js >= `18.x` lts（长期支持）版本
- pnpm >= `9.x`版本

## 切换国内镜像源
``` bash 
npm config set registry https://registry.npmmirror.com
```

## 安装pnpm包管理器
如果安装了pnpm请跳过该步骤
``` bash 
npm i pnpm@9.x -g
```

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
[查看](https://ezdoc.cn/docs/pm2/quick-start)pm2文档  

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
pm2 kill nuxt3-template
```
## 重启进程守护：
```bash
pm2 restart nuxt3-template
```
