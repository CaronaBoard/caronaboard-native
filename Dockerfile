#Code Fresh CI DockerFile
FROM node:latest
MAINTAINER caronaboard-native team

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

#Flow config
RUN apt-get update -qq
RUN apt-get install -qy libelf1 --force-yes --allow-unauthenticated

EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "start" ]
