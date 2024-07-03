FROM node:18-buster
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./
RUN npm install
EXPOSE 4000
CMD ["npm", "run","serve"]