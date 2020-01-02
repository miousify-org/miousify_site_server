#build file for docker image
#miousify store

owner=miousify
imageName=miousify_store_image

docker image  build -t $owner/$imageName:0.0.1 .

#push to heroku for testing



