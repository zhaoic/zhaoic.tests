# Version 0.1

# 基础镜像
FROM ubuntu:latest

# 维护者信息
MAINTAINER zhaoic@163.com

# 镜像操作命令
RUN echo "deb http://mirrors.aliyun.com/ubuntu/ trusty main universe" > /etc/apt/sources.list
RUN apt-get -yqq update && apt-get install -yqq supervisor redis-server
RUN apt-get install -yqq openssh-server openssh-client

RUN mkdir /var/run/sshd
RUN echo 'root:maodou' | chpasswd
RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 6379 22

# 容器启动命令
CMD ["supervisord"]