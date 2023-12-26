FROM node:current-alpine3.19

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]