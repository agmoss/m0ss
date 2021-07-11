

# `seven`

## Add User

```bash
curl 'http://localhost:3001/graphql' \
-X POST \
-H "Content-Type: application/json" \
--data '{
    "query": "mutation addUser($newUser:UserInput!){addUser(newUser:$newUser){email} } ",
     "variables": {
         "newUser":{
             "email":"sample",
             "password":"XXXXXXX"
        }
    }
}'
```

## REST Login

```bash
curl -X POST http://localhost:3001/auth/login -d '{"email": "sample", "password": "XXXXXXX"}' -H "Content-Type: application/json"
```

## GraphQL Login

```bash
curl 'http://localhost:3001/graphql' \
-X POST \
-H "Content-Type: application/json" \
--data '{
    "query": "mutation login($loginInput:LoginInput!){login(loginInput:$loginInput){accessToken} } ",
     "variables": {
         "loginInput":{
             "email":"sample",
             "password":"XXXXXXX"
        }
    }
}'
```

## Add Article

```bash
curl 'http://localhost:3001/graphql' \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBsZSIsInN1YiI6MSwiaWF0IjoxNjI2MDMzMDkyLCJleHAiOjE2MjYwMzMxNTJ9.S7yM43cBB1dMpdHg7uO4rSJRqST5pVu58tdthJj1PjA" \
--data '{
    "query": "mutation addArticle($newArticle:ArticleInput!){addArticle(newArticle:$newArticle){title} } ",
     "variables": {
         "newArticle":{
             "title":"sample",
             "description":"sample",
             "image":"sample.jpeg",
             "markdown":"sample.md",
             "internalLink":"/sample",
             "externalLink":"/sample"
        }
    }
}'
```

## Get Articles

```bash
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{"query": "query articles{articles{title}}" }' \
http://localhost:3001/graphql
```


