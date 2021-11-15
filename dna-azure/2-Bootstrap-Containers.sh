# 2) Steps to login and run docker containers via docker compose on Azure 
# Reference: https://docs.microsoft.com/pt-br/azure/container-instances/tutorial-docker-compose

# 1. Open Docker Desktop

# 2. Login into Azure Container Registries

az acr login --name dnapostgres
az acr login --name dnaredis
az acr login --name dnadirectus
az acr login --name dnanestjs

# 3. Use default context (Obs: Remove comment if first run)

# docker context use default 

# 4. Build images (Obs: Remove comment if first run)

# docker-compose up --build -d

# docker-compose down

# 5. Push images to Azure Contaneirs (Obs: Remove comment if first run)

# docker-compose push

# 6. Create and switch to Azure Context (Obs: Remove comment if first run)

# docker context create aci dnacontext

docker context use dnacontext

# 7. Bootstrap Dna

docker compose --file docker-compose-azure.yml up