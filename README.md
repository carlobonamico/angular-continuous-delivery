# angular-continuous-delivery
Please follow me on twitter @carlobonamico for last-minute updates...

# Prerequisites
In order to succesfully follow the lab, you will need to

* prepare your environment
* install required tools
* download some prerequisites from the Internet

And also, register a github.com account if you do not already have one.


## Environment
The lab is designed to work on recent Windows (7/8 and later), Linux and MacOS machines.
Node.js and particularly npm does have some issues on Windows machines, so we suggest using Linux / MacOS if possible.

## Install Editor / IDE

Any smart editor / IDE supporting HTML and JS editing, preferably with syntax highlighting will do. Effective tools include

* Github Atom (Open Source) http://atom.io
* Sublime (shareware) http://www.sublimetext.com/
* Adobe Brackets (Open Source) http://brackets.io/
* Visual Studio Code (free) https://code.visualstudio.com/
* Visual Studio Community + Web Essentials + js editor http://vswebessentials.com/
* IntelliJ / Web Storm https://www.jetbrains.com/
* NetBeans https://netbeans.org/
* Eclipse http://eclipse.org

## Install git
* https://git-scm.com/downloads

Or ``apt-get install git``

## Install required tools
### Download Java
Running the Jenkins or Go build servers requires Java 7 o Java 8.
Please ensure that you have JDK 1.7.0 or 1.8.0 installed. If needed, you can download it from

* http://www.oracle.com/technetwork/java/javase/downloads/index.html
* (for Ubuntu) http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html

To check the installation, please run
```
java -version
```
you should see something like
```
java version "1.8.0_31"
Java(TM) SE Runtime Environment (build 1.8.0_31-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.31-b07, mixed mode)

```

### Install node.js and npm
On Linux machines,


On Windows/MacOS machines, download the installer from
* https://nodejs.org/download/

Any release later than 0.10 is ok.

To check the installation, please run

```
node --version
```

you should see something on the lines of
```
v0.10.25
```

### Install javascript workflow tools
In an administrative shell (``sudo -s`` or ``Run as Administrator``) run the following commands to install node tools:

```
npm -g install npm

npm -g install bower

npm -g install gulp

```

To check that everything is fine, please run
```
bower
```

you should see something like
```
Usage:

    bower <command> [<args>] [<options>]
Commands:

    cache                   Manage bower cache
    help                    Display help information about Bower
    home                    Opens a package homepage into your favorite browser
    info                    Info of a particular package
    init                    Interactively create a bower.json file
    install                 Install a package locally
[...]
```

Then
```
gulp
```

you should see something like
```
[20:45:11] No gulpfile found
```
