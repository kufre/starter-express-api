FROM node:18-slim as base
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci \
    && npm cache clean --force
ENV PATH /app/node_modules/.bin:$PATH

# a dev and build-only stage. we don't need to 
# copy in code since we bind-mount it
FROM base as dev
ENV NODE_ENV=development
RUN npm install
CMD ["/app/node_modules/.bin/nodemon"]

FROM dev as build
COPY . .
RUN tsc
# you would also run your tests here

# this only has minimal deps and files
FROM base as prod
COPY --from=build /app/dist/ .
CMD ["node", "./dist/index.js"]


