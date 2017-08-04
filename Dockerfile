FROM node:latest
MAINTAINER caronaboard-native

#This is installing each time our docker runs, this could be cached
RUN apt-get update
RUN apt-get install ruby-full --yes
RUN gem install bundler

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "start" ]
