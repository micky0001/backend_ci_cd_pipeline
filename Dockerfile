FROM node:24-alpine

WORKDIR /app

COPY pakage*.json ./

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]




