require('dotenv').config()
//Synchronous
const express =require('express')
const app = express()
const port = 3000
//Synchronous registration
const data= {
  "login": "Manav7603",
  "id": 118759375,
  "node_id": "U_kgDOBxQfzw",
  "avatar_url": "https://avatars.githubusercontent.com/u/118759375?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Manav7603",
  "html_url": "https://github.com/Manav7603",
  "followers_url": "https://api.github.com/users/Manav7603/followers",
  "following_url": "https://api.github.com/users/Manav7603/following{/other_user}",
  "gists_url": "https://api.github.com/users/Manav7603/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Manav7603/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Manav7603/subscriptions",
  "organizations_url": "https://api.github.com/users/Manav7603/orgs",
  "repos_url": "https://api.github.com/users/Manav7603/repos",
  "events_url": "https://api.github.com/users/Manav7603/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Manav7603/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Manav Pandya",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 33,
  "public_gists": 0,
  "followers": 3,
  "following": 10,
  "created_at": "2022-11-21T16:57:17Z",
  "updated_at": "2026-01-03T18:37:58Z"
}
app.get('/',(req,res) => {
    res.send('Hello World Manav!!')
})

app.get('/manav', (req,res) => {
    res.send('Manav is here!!')
})

app.get('/login', (req,res) => {
    console.log("Hii")
    res.send('<h1> Login properly </h1>')
})

app.get('/hello',(req,res)=>{
    res.send('<h2>hello brothers</h2> ')
})

app.get('/github', (req,res) => {
    res.json(data)
})
//async
// Node tells the OS:
// “Start a server and let me know when it’s ready”

// The callback is placed in the event loop

// Node does NOT wait here.
app.listen(process.env.PORT,() => {
    console.log(`App listening on port ${process.env.PORT}`)
})

console.log("Hello, World!");