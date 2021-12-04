#!/bin/sh
start=`date +%s.%N`

SRC_CONNECTION_STRING="postgresql://directus:directus@database:5432/directus"
DST_CONNECTION_STRING="postgresql://postgres:destinypassword@host.docker.internal/directus"

rm src_schema.sql
rm src_data.sql
rm dst_data.sql

TIMESTAMP=`date +%Y-%m-%d_%H-%M-%S`

#Dump source schema
pg_dump --dbname=$SRC_CONNECTION_STRING --schema-only > src_schema.sql

#Dump data of selected tables from source 
#	directus_collections
#	directus_fields
#	directus_permissions
#	directus_relations
#	directus_roles
pg_dump --dbname=$SRC_CONNECTION_STRING --data-only --table directus_collections  --table directus_fields  --table directus_permissions  --table directus_relations  --table directus_roles > src_data.sql

#Dump full destination for backup (will not be deleted automatically, for safe keeping)
pg_dump --dbname=$DST_CONNECTION_STRING > dst_full_$TIMESTAMP.sql

# #Dump data of all tables other than selected tables from destination
pg_dump --dbname=$DST_CONNECTION_STRING --data-only --exclude-table directus_collections  --exclude-table directus_fields  --exclude-table directus_permissions  --exclude-table directus_relations  --exclude-table directus_roles > dst_data.sql

# #Remove all tables from dst
psql $DST_CONNECTION_STRING --command="drop schema public cascade"
psql $DST_CONNECTION_STRING --command="create schema public"

# #Restore schema to destination
cat src_schema.sql | psql $DST_CONNECTION_STRING

# #Restore data of selected tables to destination
cat src_data.sql | psql $DST_CONNECTION_STRING

# #Restore data of remaining tables to destination
cat dst_data.sql | psql $DST_CONNECTION_STRING

# end=`date +%s.%N`
runtime=$( echo "$end - $start" | bc -l )

echo "Total time of execution "$runtime "Seconds"