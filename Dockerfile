FROM ubuntu:18.04
MAINTAINER choiseunghwan.tech@gmail.com

ENV HOMEDIR=/home
ENV PROJECTDIR=/home/blog
ENV FRONTENDDIR=/home/blog/frontend

RUN apt-get update && apt-get install -y nginx

RUN rm -v /etc/nginx/sites-enabled/default
RUN rm -v /etc/nginx/nginx.conf

COPY frontend_nginx.conf /etc/nginx/nginx.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.comf

WORKDIR $FRONTENDDIR
COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]