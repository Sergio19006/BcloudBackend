FROM node:10

RUN mkdir /home/node/app

#Esto deberia ir conectado al /data del droplet crear un volumen entonces

RUN mkdir -p /data/images

RUN mkdir -p /data/epub

WORKDIR /home/node/app

RUN cd /home/node/app

COPY --chown=node:node . /home/node/app

USER node

RUN npm install

EXPOSE 8081

CMD [ "bash" ]
