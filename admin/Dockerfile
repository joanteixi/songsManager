FROM node
WORKDIR /app
COPY package*.json ./
RUN yarn

COPY ./build .
EXPOSE 80
CMD ["yarn", "serve", "-p 80","./"]
 
