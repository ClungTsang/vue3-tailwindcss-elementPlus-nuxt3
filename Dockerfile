# 使用 Node.js 18 作为基础镜像
FROM node:18.20.4-alpine AS builder

# 设置工作目录
WORKDIR /3dcardml

# 复制 package.json 和 pnpm-lock.yaml（如果存在）到工作目录
COPY package.json pnpm-lock.yaml* ./

# 设置 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com

# 安装依赖
RUN npm install -g pnpm

RUN pnpm install

# 复制应用程序的所有代码到工作目录
COPY . .

# 构建应用程序
RUN pnpm build

# 使用一个新的镜像阶段
FROM node:18.20.4-alpine

# 设置工作目录
WORKDIR /3dcardml

# 复制构建后的文件到最终的工作目录
COPY --from=builder /3dcardml/.output /3dcardml/.output
COPY --from=builder /3dcardml/node_modules /3dcardml/node_modules
COPY --from=builder /3dcardml/package.json /3dcardml/package.json
COPY --from=builder /3dcardml/ecosystem.config.js /3dcardml/ecosystem.config.js

# 设置环境变量 NODE_ENV 为生产环境
ENV NODE_ENV=production

# 设置 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com

# 安装 pm2
RUN npm install -g pm2

# 暴露端口 3000
EXPOSE 3000

# 使用 PM2 启动应用程序
CMD ["pm2-runtime", "ecosystem.config.js"]

# 传统方式启动程序
# CMD ["node", "./.output/server/index.mjs"]
