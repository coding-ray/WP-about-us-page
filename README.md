# About-us Page of 即時偵測異常消費 Group
This is the about-us page of the group NO.1 (即時偵測異常消費) of Social Web Research (SWR) and Web Programming (WP) courses in National Cheng-Kung University (NCKU).

## Getting Started
1. Install [Git](https://git-scm.com/downloads) and register an account.
1. Install [Node.js and npm](https://nodejs.org/en/download/).
1. Clone this repository into the `about-us` folder (for example)  
    ```
    git clone https://github.com/coding-ray/WP-about-us-page about-us
    ```
1. In `about-us`, install the required modules specified in `package.json`  
    ```
    npm i
    ```
1. Compile `pug/index.pug` into `pug/index.html`  
    1. In Linux,
        ```
        node_modules/.bin/pug3 ./pug/index.pug -o ./pug/ -P
        ```  
        or simply run  
        ```
        ./live_pug
        ```
    1. In Windows,  
        ```
        node_modules/.bin/pug3.cmd ./pug/index.pug -o ./pug/ -P
        ```
        or simply run  
        ```
        .\live_pug.cmd
        ```
1. Check the website named `index.html` in the `pug` folder.

P.s. the `index.html` file outside the `pug` folder is the original version of the website written without pug.
