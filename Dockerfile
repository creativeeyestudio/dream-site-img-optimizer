FROM node:20-alpine

WORKDIR /app

RUN mkdir -p /app/uploads

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]