#First build image using -

Step 1 :

cmd
docker build -t {Image-Name} {Dockerfile-address}

Example :
docker build -t express-docker .

step 2:
Create docker-compose.yml

step 3:
Scale app using docker cmd

Example :
docker-compose up -d --scale app=5