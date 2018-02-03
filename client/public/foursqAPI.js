const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: 'XADZGDTKN25N4HNEHOTVRNKGBI0MR0KFMUYQQCTNT4S0B2MR',
    client_secret: 'HLZ35DGD3YIDWFXQZNSSAFSSBL42GL3IVWIQ1UO3KZUJXS5M',
    ll: '30.2672,-97.7431',
    section: 'topPicks',
    time: 'any',
    day: 'any',
    venuePhotos: 1,
    v: '20170801',
    limit: 3
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});