FROM node:16 as install-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli
RUN npm install

FROM install-stage as dev
EXPOSE 4200
RUN npm ci
COPY ./ /app/
CMD ["npm", "run", "start"]

FROM dev as test
CMD ["npm", "run", "test"]

FROM install-stage as build-stage
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration --base-href "BASE_HREF_PLACEHOLDER" --deploy-url="DEPLOY_URL_PLACEHOLDER"
FROM nginx:1.21 as prod
COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./configs/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD [ "/entrypoint.sh" ]
COPY --from=build-stage /app/dist/out /usr/share/nginx/html
