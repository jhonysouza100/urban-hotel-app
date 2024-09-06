FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

# Define las variables de entorno
ARG REDIS_PASSWORD
ENV REDIS_PASSWORD=$REDIS_PASSWORD

ENV NODE_ENV=production

EXPOSE 3000

CMD npm run start
