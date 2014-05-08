// You might have to change the spa.html file's script to point to this script

var spa = (function () {
  var initModule = function ( $container ) {
    $container.html(
      '<h1 style="display:inline-block; margin:25px;">'
        + 'hello world!'
      + '</h1>'
    );
  };
  
  return { initModule : initModule };
}());
