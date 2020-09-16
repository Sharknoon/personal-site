FROM node as build-stage
WORKDIR /app
COPY ./ .
RUN npm install
RUN npm run build

FROM nginx as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
