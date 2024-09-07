FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

# Define las variables de entorno
ARG BACKEND_REVIEWS_URL
ENV BACKEND_REVIEWS_URL=$BACKEND_REVIEWS_URL

ENV NODE_ENV=production

EXPOSE 3000

CMD npm run deploy
