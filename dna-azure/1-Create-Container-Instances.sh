# 2) Steps to login and create docker containers on Azure 
# References: 
# https://docs.microsoft.com/pt-br/azure/container-instances/container-instances-tutorial-prepare-acr
# https://stackoverflow.com/questions/41984399/denied-requested-access-to-the-resource-is-denied-docker

# 1. Open Docker Desktop

# 2. Switch do docker default context

docker context use default

# 3. Create Resource Group

az group create --name dna-resource-group --location brazilsouth

# 4. Create the container registries

az acr create --resource-group dna-resource-group --name dnapostgres --sku Basic
az acr create --resource-group dna-resource-group --name dnaredis --sku Basic
az acr create --resource-group dna-resource-group --name dnadirectus --sku Basic
az acr create --resource-group dna-resource-group --name dnanestjs --sku Basic

# 5. Login into the container registries

az acr login --name dnapostgres
az acr login --name dnaredis
az acr login --name dnadirectus
az acr login --name dnanestjs

# 6. Tag the local images with login server of the container registry created

docker tag postgres:14 dnapostgres.azurecr.io/postgres:14
docker tag redis:6 dnaredis.azurecr.io/redis:6
docker tag directus/directus:latest dnadirectus.azurecr.io/directus:latest
docker tag dnanestjs:v1 dnanestjs.azurecr.io/dnanestjs:v1

# 7. Push the images

docker push dnapostgres.azurecr.io/postgres:14
docker push dnaredis.azurecr.io/redis:6
docker push dnadirectus.azurecr.io/directus:latest
docker push dnanestjs.azurecr.io/dnanestjs:v1
