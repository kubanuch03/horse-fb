
FROM node:15.13-alpine
WORKDIR /frontend/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD ["npm","start"]