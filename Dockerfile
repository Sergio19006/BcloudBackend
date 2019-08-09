FROM node:10-alpine

RUN mkdir /home/node/app

#Esto deberia ir conectado al /data del droplet crear un volumen entonces

RUN mkdir /data/images/

RUN mkdir /data/epub/

WORKDIR /home/node/app

RUN cd /home/node/app

COPY --chown=node:node . /home/node/app

USER node

VOLUME ["/data/db"]

RUN npm install

EXPOSE 8081

CMD [ "npm", "run" "dev" ]
