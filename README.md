# webpack-serve-https-issue
Illustrates a problem with setting up https using devcert and webpack-serve.

# Environment
- MacOS 10.13.3
- Chrome 66.0.3359.139

# Setup
The following steps generate the necessary ssl certificate and key file using devcert-cli.  It then launches a webserver that serves up a "hello-world" page that illustrates the problem.
```
npm install
npm run keygen
npm start
```

# Results
Looking at the DevTools within Chrome will display the following error:
```
socket.js:18 Mixed Content: The page at 'https://webpackserve.local:56316/' was loaded over HTTPS, but attempted to connect to the insecure WebSocket endpoint 'ws://webpackserve.local:56315/'. This request has been blocked; this endpoint must be available over WSS.
connect @ socket.js:18
socket.js:18 Uncaught DOMException: Failed to construct 'WebSocket': An insecure WebSocket connection may not be initiated from a page loaded over HTTPS.
    at connect (webpack:///(webpack)-hot-client/client/socket.js?:18:16)
    at hotClientEntry (webpack:///(webpack)-hot-client/client?:53:3)
    at eval (webpack:///(webpack)-hot-client/client?:101:3)
    at Object../node_modules/webpack-hot-client/client/index.js?335d6d19-514c-48dd-a4e9-87121b0cca6e (https://webpackserve.local:56316/bundle.js?ce58b4a38ec601a37b23:871:1)
    at __webpack_require__ (https://webpackserve.local:56316/bundle.js?ce58b4a38ec601a37b23:712:30)
    at fn (https://webpackserve.local:56316/bundle.js?ce58b4a38ec601a37b23:95:20)
    at eval (webpack:///multi_webpack-hot-client/client?:1:1)
    at Object.1 (https://webpackserve.local:56316/bundle.js?ce58b4a38ec601a37b23:950:1)
    at __webpack_require__ (https://webpackserve.local:56316/bundle.js?ce58b4a38ec601a37b23:712:30)
    at https://webpackserve.local:56316/bundle.js?ce58b4a38ec601a37b23:764:37
```