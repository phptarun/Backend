# Backend
The user endpoint returns the list of all users in JSON format. All the entities will be imported to this repository as a library.

 ## Prerequisite

   - NodeJS - Node v18.17.1

 ## Clone codebase
  
   - Run > git clone  [path](https://github.com/phptarun/Backend.git)

   - Run > git checkout main

  

 ## Update package.json, add [Shared-orm-library](https://github.com/phptarun/Shared-orm-library.git) as dependencies
  ```JSON
    {  
        "dependencies": {
            "Shared-orm-library":"relative paths to Shared-orm-library"
        }
    }
  ```
  - Ex:- c:/Users/Shared-orm-library

 ## Once clone is successful and package.json updated, to install required modules

   - Run > npm install 

   - Run > npm start

## To verify backend

   URL: http://localhost:4000

## To verify the APIs 

   URL: http://localhost:4000/api-docs/

 

