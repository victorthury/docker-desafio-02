# How to test it

In folder node, run:
> npm install
> docker build -t victorthury/node .

In folder nginx, run:
> docker build -t victorthury/nginx .

Then, run the built docker images within a network, in the following  example I named it "teste":
> docker run -d --network teste --name node victorthury/node
> docker run -d --network teste --name nginx -p 8080:80  victorthury/nginx

There is a `docker-compose.yaml` in the root of this repo, but I don't recommend using it now, it is a mess and not finished...

Then access http://localhost:8080/

Expect to see the message `502 Bad Gateway`
