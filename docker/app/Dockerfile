FROM php:7-fpm

# ユーザーを作成
ARG UID=1000
ARG GID=1000
RUN useradd -m -u ${UID} docker

# composerをインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Node.jsをインストール
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs

# yarnをインストール
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
# RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/+sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

# Laravelに必要なパッケージをインストール
RUN apt-get update && apt-get install -y git zip unzip

RUN apt-get update \
    && docker-php-ext-install pdo_mysql

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

# 作成したユーザーに切り替える
USER ${UID}:${GID}

# 作業ディレクトリを変更
WORKDIR /var/www/html