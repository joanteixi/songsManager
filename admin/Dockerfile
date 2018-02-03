FROM node
WORKDIR /app
COPY package*.json ./
RUN yarn

COPY ./build .
EXPOSE 5000
CMD ["yarn", "serve", "-p 80",,"./"]
 
