FROM node:12
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
EXPOSE ${PORT:-8001}
CMD ["node", "server.js"]