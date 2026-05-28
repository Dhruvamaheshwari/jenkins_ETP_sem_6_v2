FROM node:22-alpine

WORKDIR /app

COPY package.json ./

RUN run install

COPY . . 

EXPOSE 4000

CMD ["npm" , "start"]