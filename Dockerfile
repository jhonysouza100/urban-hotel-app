# FROM node:18-alpine

FROM node:18-bullseye-slim

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

# Instalar libssl1.1 (si está disponible para tu distribución)
#RUN apt-get update && apt-get install -y libssl1.1

COPY . .

# Define las variables de entorno
ARG BREVO_API_KEY
ENV BREVO_API_KEY=$BREVO_API_KEY

ARG CLOUDINARY_CLOUD_NAME
ENV CLOUDINARY_CLOUD_NAME=$CLOUDINARY_CLOUD_NAME

ARG CLOUDINARY_API_KEY
ENV CLOUDINARY_API_KEY=$CLOUDINARY_API_KEY

ARG CLOUDINARY_API_SECRET
ENV CLOUDINARY_API_SECRET=$CLOUDINARY_API_SECRET

ARG JWT_SECRET
ENV JWT_SECRET=$JWT_SECRET

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

ENV NODE_ENV=production

EXPOSE 3000

CMD npm run deploy