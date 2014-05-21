# get-avatar

## Install

```sh
npm install --save get-avatar
```


## Usage

```js
var ga = require('get-avatar')

//...

ga.facebook(user.facebookAccessToken, function(err, url){
  if(err)
    return next(err)
  console.log(url)
})

ga.vkontakte(user.vkontakteAccessToken, function(err, url){
  if(err)
    return next(err)
  console.log(url)
})
```

