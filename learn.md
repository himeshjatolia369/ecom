
 npm init -y

 npm i express mongoose bcryptjs jsonwebtoken cookie-parser multer

 git init 

PS D:\Diwali\mini-ecom> git add .
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it

PS D:\Diwali\mini-ecom> git config core.autocrlf true

git commit -m "Initial commit"

D:\Diwali\mini-ecom>git add .

git credential-manager github list

git credential-manager github logout HimeshJatolia

git credential-manager github login

>git push -u origin main

$env:DEBUG="development:*" 

$env:NODE_ENV="development"

npm i express-session connect-flash
this for flash card


below is for multter image
“I implemented dynamic image serving using Express routes and MongoDB buffers, with proper content-type headers.”
URL → route → DB → buffer → browser



MongoDB (orders collection)
        ↓
Express API (/api/orders)
        ↓
React useEffect (fetch)
        ↓
useState (orders)
        ↓
UI renders orders


