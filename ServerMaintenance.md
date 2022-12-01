# ExergyX Server Maintenance Guide

This guide provides basic steps to maintain the node server responsible interacting with database.

## Explanation

This server is deployed in a VM provided by IST. There is an admin panel where it is possible to manage some VM configurations.
The panel can be accessed via `https://vmcloud.tecnico.ulisboa.pt/` where the authorized users are able to login via IST ID.

Additionally there is a guide on how to configure and work with this platform `https://iaas.projects.dsi.tecnico.ulisboa.pt/user/gettingstarted.html`


## Known Issues

During the last year, the server crashed twice. Which requires a manual restart, explained in the next section.


## Maintenance

### Acessing VM 

In order to access the VM the recomendation is to use puTTY (`https://putty.org/`).
The configuration is the following: 
    - HostName(or IP address): 192.92.147.67
    - Port: 22
    - Connection Type: SSH - Telnet

However you should first double click on the private Key, in order to authenticate (exergyKey.ppk).

### VM Login 

Once the terminal window opens, you will be asked how do you want to login ("Login as:"). The username (default) is "ubuntu".
Then, if you have done every step correctly, you should be able to write any command. 
In order to have the server always running, we use "PM2" which is a process management system to keep certain processes a live.

### Working with PM2

If you ever need to restart the server you first need to know the process id corresponding to the server. You can obtain this information by running the following command `sudo pm2 list` then you can see a table containing the information about the procees you want. The next step to restart the server is to stop it and start it again by running the following commands. `sudo pm2 stop {id}` and then `sudo pm2 start {id}` where {id} is the process id showed before.

### Editing Node Server

In order to edit the node server, you must use any terminal-based text editor (ex: nano)
After any change you must perform a restart following the steps described on the previous section.


