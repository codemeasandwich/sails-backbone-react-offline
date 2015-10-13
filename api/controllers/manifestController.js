module.exports = {
	
  index:function(req,res){
    
   // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  //  res.header('Expires', '-1');
  //  res.header('Pragma', 'no-cache');
    res.type('text/cache-manifest');
    
    var manifest = "CACHE MANIFEST \n\n";
    manifest += "main.js \n"
    
    manifest += "vendor/requirejs/require.js \n"
    manifest += "vendor/jquery/dist/jquery.js \n"
    manifest += "vendor/lodash-amd/modern/main.js \n"
    manifest += "vendor/backbone/backbone.js \n"
    manifest += "vendor/requirejs-react-jsx/jsx.js \n"
    manifest += "vendor/burry/burry.js \n"
    manifest += "vendor/requirejs-text/text.js \n"
    manifest += "vendor/react/react-with-addons.js \n"
    manifest += "vendor/Backbone.cachingSync/backbone.cachingsync.js \n"
    manifest += "js/JSXTransformer.js \n"
    
    manifest += "styles/importer.css \n"
    manifest += "css/normalize.css \n"
    manifest += "css/reactLoader.css \n"
    
    manifest += "js/config/routes.js \n"
    manifest += "js/models/user.js \n"
    manifest += "js/collections/users.js \n"
    
    manifest += "js/views/index.jsx \n"
    manifest += "js/views/user.jsx \n"
    
    
    manifest += "\n"
    manifest += "NETWORK: \n"
    manifest += "* \n"
    manifest += "http://* \n"
    manifest += "https://* \n"
    manifest += "\n"
    manifest += "FALLBACK: \n"
    manifest += "js/views/components/reactLoader.jsx \n"
    manifest += "js/views/user.jsx \n"
    manifest += "js/collections/users.js \n"
    manifest += "js/models/user.js \n"
    
    res.ok(manifest);
  }
  
}