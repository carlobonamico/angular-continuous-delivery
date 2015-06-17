

#Enter jenkins

## Download Jenkins

## Install ?
Not initially required, can later be configured to run as a service.

Suggestions:
* run as a dedicated user
* Security IS relevant
  * Jenkins accesses all of your code and environments

Out of scope in this lab. See

## Start Jenkins
Jenkins is a "prehistoric" microservice - self contained (although it can also run in a container).

```
java -DJENKINS_HOME=...  -jar jenkins.war --httpPort=9000
```

## Validate installation
Open

```
firefox http://localhost:9000
```
or
```
chrome http://localhost:9000
```

You should see this


## Configure basic settings


## Install plugins
All vs incremental list?


## References
Continuous Integration
http://www.slideshare.net/carlo.bonamico/continuous-integration-with-hudson

