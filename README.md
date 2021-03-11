# Nginx with Node.js

## What is it?

This repo is the submission to the following task: build a node.js app that 
access a  MYSQL Database and writes some names to the table People. Then the 
app should return a HTML page with `<h1>Full Cycle Rocks!</h1>` followed by all
names in table people. To access the app, you must use Nginx as a reverse-proxy
to the application.

## Pre-requisites

You must have docker installed, to do so, access the following 
[site](https://www.docker.com/).

## Usage

In the root of the project, run:
> docker-compose up -d --build

When the containers are up, access it via http://localhost:8080