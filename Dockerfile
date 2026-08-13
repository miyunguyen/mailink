FROM node:22-alpine
LABEL MAINTAINER Minh Nguyen <minhnq224@gmail.com>

WORKDIR /usr/src/app
COPY package*.json ./

COPY . .

RUN npm ci --only=production

EXPOSE 8080

CMD ["npm", "start"]
