FROM node:4-onbuild

MAINTAINER nestor.otondo@fundacion-jala.org

WORKDIR /usr/src/app

COPY package.json package-lock.json .

RUN npm install

COPY . .

EXPOSE 4100

CMD [ "npm", "start" ]