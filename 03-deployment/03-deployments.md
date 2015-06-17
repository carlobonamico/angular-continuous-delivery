# Deployment

## Ideal Deployments
The ideal Infrastructure management process is 
* Automatic
* Repeatable and consistent
* Recreate as many time as needed
* Across environments (DEV → TEST → PROD) 
* Across hosts (clusters - cloud)
* Versionable
Robust and resilient to
* network failures
* hardware failures
* Self-checking

AND “easy”
* In addition to that, lightweight, EASY to setup, use and learn
* with limited or no additional effort with respect to manual approaches
* by both Developers and Operations
* lending itself to incremental introduction

What if infrastructure management was easier than hacking with keyboard and shell scripts?
* Think Ansible...
 https://github.com/ansible/ansible/
 
#QA as a local server
Choose a root folder

Create child folders for 
* QA
* PREPROD
* PROD
## Install http-server
``npm -g install http-server``

## Run one or more of 
```
http-server
```
In the root folder

Self-check with browser

#Deploying to QA
For now, simply unzip to a folder on a local/remote server where the http daemon is running

## Smoke-test
minimal self-test
* wget of home page

Possibly, 
* wget of main REST endpoints
* screen capture of home page with PhantomJS

## Ta-dah!
Here you are!


# Deploying to PREPROD
