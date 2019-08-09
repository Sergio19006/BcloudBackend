FROM node:10-alpine

RUN mkdir /home/node/app

WORKDIR /home/node/app

RUN cd /home/node/app

COPY --chown=node:node . /home/node/app

USER node

VOLUME ["/data/db"]

RUN npm install

EXPOSE 8081

CMD [ "npm", "run" "dev" ]
