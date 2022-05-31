---
title: "localでmisskeyを起動する方法(Docker)"
date: 2022-04-11T19:58:23+09:00
draft: false
---

1. `.config/docker-compose.yml` を下のに変更

```yaml
version: "3"

services:
  redis:
    restart: always
    image: redis:4.0-alpine
    networks:
      - internal_network
      - external_network
    ports:
      - "6379:6379"
    volumes:
      - ./redis:/data

  db:
    restart: always
    image: postgres:12.2-alpine
    networks:
      - internal_network
      - external_network
    ports:
      - "5432:5432"
    env_file:
      - .config/docker.env
    volumes:
      - ./db:/var/lib/postgresql/data

networks:
  internal_network:
    internal: true
  external_network:
```

2. `.config/default.yml` と `.config/example.yml` を下のに変更

アクセスするURLと指定するURLが違うと画像が正しく表示されなくなってしまうのでここでは`https://localhost:3000`を指定する

```yaml
url: http://localhost:3000

port: 3000

db:
  host: localhost
  port: 5432
  db: misskey

  user: example-misskey-user
  pass: example-misskey-pass

redis:
  host: localhost
  port: 6379

id: 'aid'

```

3. `docker-compose up -d && yarn && yarn build && yarn migrate && yarn dev` で起動
4. [http://localhost:3000](http://localhost:3000) で確認
