# ExergyX Deployment Guide

This guide serves the purpose of explaning the steps to deploy a new version to production environment.

## Requirements

There are some assumptions that will not be covered on this guide such as:
 - The user has access to the ExergyX sigma repository
 - The user has a git account
 - It is recommended to use some application as WinSCP to delete and alter files, however is not mandatory.

 ## Deployment Steps

 ### Cloning Repository

 1. Access ExergyX sigma repository `/afs/.ist.utl.pt/groups/exergyx/web`
 2. Once in the said repository, go to `./VersionToDeploy` folder and delete all of its content
 3. When `./VersionToDeploy` is clean, run the git command `git clone <repositoryURL>`

 ### Installing Angular

 1. Move to the parent folder of `./src`
 2. Now we need to install angular in order to build the project via `npm install @angular/cli`. (Due to some sigma limitations, this step is required in every deployment)

### Building Solution

 1. When we have angular installed, on the same folder (`.src/` parent folder) run `npm build`. This will build the project.
 2. Next, access folder `./dist` - here is where all the compiled files are.

### Replacing Files

 1. Go to `/afs/.ist.utl.pt/groups/exergyx/web` and delete every file. (ATTENTION: do not delete any folder!) 
 2. Just copy all the content inside `./dist` and past it on the `/afs/.ist.utl.pt/groups/exergyx/web`


