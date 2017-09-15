var test=test|| {};

test.path=(function() {
   var init=function(ctx) {
      test.session.init(ctx);
      alert('야야야야메타야' + test.path.js());
   };
   var ctx = function() {
      return test.session.getPath('ctx');
   };
   var js = function() {
      return test.session.getPath('js');
   };
   var img = function() {
      return test.session.getPath('img');
   };
   var css = function() {
      return test.session.getPath('css');
   };
   return {
      init : init,
      ctx : ctx,
      js : js,
      img : img,
      css : css
   };
})();

test.session=(function() {
   var init = function(ctx) {
      sessionStorage.setItem('ctx', ctx);
      sessionStorage.setItem('js', ctx+'/resources/js');
      sessionStorage.setItem('img', ctx+'/resources/img');
      sessionStorage.setItem('css', ctx+'/resources/css');
   };
   var getPath = function(ctx) {
      return sessionStorage.getItem(ctx);
   };
   return {
      init : init,
      getPath : getPath
   };

})();