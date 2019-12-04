FROM alpine

WORKDIR app

COPY package.json /app

CMD ["npm","install"]

COPY . /app

EXPOSE 80

MAINTAINER Joshua Johnson

ENV name=e


