#!/bin/bash
docker stop front_cont
docker rmi front
docker build . -t front
docker run  —name=front_cont -p 8000:8000 -d front
