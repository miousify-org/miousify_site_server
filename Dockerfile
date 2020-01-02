FROM node

MAINTAINER Joshua Johnson

WORKDIR app

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 80

ENTRYPOINT ['./entrypoint.sh']




