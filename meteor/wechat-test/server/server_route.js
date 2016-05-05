// Picker.route( '/documents', function( params, request, response, next ) {
//   // Handle our request and response here.
// });


var bodyParser = Meteor.npmRequire('body-parser');
Picker.middleware(bodyParser.urlencoded({ extended: false }));
Picker.middleware(bodyParser.json());

var post = Picker.filter(function(req, res) {
  return req.method == "POST";
});

post.route('/post', function(params, req, res, next) {
  console.log(params);   // { query: {} }
  console.log(req.data); // undefined
  console.log(req.body); // {}
  res.end();
});
