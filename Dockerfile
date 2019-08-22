FROM node:10.16.0
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN npm install
COPY . /usr/src/app
COPY package.json /app/package.json
RUN npm install
CMD npm start

