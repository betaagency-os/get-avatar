var request = require('request'),
    debug = require('debug')('get-avatar')

module.exports = {
  facebook: function(token, done){
    if(!token)
      return done(new Error('Need access token for facebook'))
    request('https://graph.facebook.com/me/picture?redirect=0&type=large&access_token='+token, function(err,res,body){
      debug('Response from facebook: ' + body)

      if(err)
        return done(err)
      if(res.statusCode != 200)
        return done(new Error('Something wrong with facebook (' + res.statusCode + ') ' + body))
      var json = JSON.parse(body)
      if(!json.data || !json.data.url)
        done(new Error('Invalid response from facebook: ' + body))
      done(null, json.data.url)
    });
  },

  vkontakte: function(token, done){
    if(!token)
      return done(new Error('Need access token for vkontakte'))
    request('https://api.vk.com/method/users.get?v=5.21&fields=photo_max_orig&access_token='+token, function(err,res,body){
      debug('Response from vkontakte: ' + body)

      if(err)
        return done(err)
      if(res.statusCode != 200)
        return done(new Error('Something wrong with vkontakte (' + res.statusCode + ') ' + body))
      var json = JSON.parse(body)
      if(!json.response || !json.response[0] || !json.response[0].photo_max_orig)
        done(new Error('Invalid response from vkontakte: ' + body))
      done(null, json.response[0].photo_max_orig)
    });
  }
}
