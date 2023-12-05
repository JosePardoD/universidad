FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 6001
CMD ["node", "--experimental-specifier-resolution=node", "app.mjs"]
