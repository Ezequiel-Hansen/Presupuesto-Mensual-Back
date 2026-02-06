FROM node:22-slim
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json .
RUN pnpm install
COPY . .
COPY app.js .
EXPOSE 4000
CMD ["node","app.js"]