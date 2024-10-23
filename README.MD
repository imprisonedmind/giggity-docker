# giggity-docker

This is the parent docker setup that pulls the respective repos and builds
their images. This is intended to be used on a VPS and easily deployable.

## Getting Started

1. Pull the Docker images:
   ```bash
   docker pull
   ```

## Sorting out MongoDB

1. Connect to Shell:
    ```bash
    docker exec -it mongodb mongosh gigs
    ```
2. Check events Collection:
    ```bash
    db.events.find()  
    db.events.countDocuments()
    ```
3. Backup just the gigs database:
   ```bash
   docker exec mongodb-test sh -c 'mongodump --db gigs --archive' > gigs_backup.archive
   ```

4. Restore just the gigs database:
   ```bash
   docker exec -i mongodb-test sh -c 'mongorestore --db gigs --archive' < gigs_backup. 
   archive
   ```

## Getting Certbot SSL certificates

1. Before starting the services, you'll need to get your initial SSL certificate:
   ```bash 
   docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot 
   -d giggity.co.za
   ```