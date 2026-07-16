# Docker configuration for running Personal URL Shortener API
FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y python3 make g++

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]