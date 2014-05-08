  /* jslint browser : true, continue : true, 
  devel : true, indent : 2, maxerr : 50, 
  newcap : true, nomen : true, plusplus : true, 
  regexp : true, sloppy : true, vars : true, 
  white : true
  */
  
  // sources of errors:
  // using '=' instead of ':'
  // using 'config' instead of 'configMap'
  // using 'entended' instead of 'extended'
  // using ':' instead of ','
  // using ',' instead of ':'
  // using ';' in the midst of chained calls

  // how to avoid errors:
  // check spelling
  // check symbols (, : ; =)
  // check function call parameters

  // how to avoid errors (basic): 
  // know what you're doing at all times

  var spa = (function ( $ ) {
    var 
      configMap = {
        extended_height : 434,
        extended_title : 'Click to retract',
        retracted_height : 16,
        retracted_title : 'Click to extend',
        template_html : '<div class="spa-slider"><\/div>'
      },
      $chatSlider,
      toggleSlider, onClickSlider, initModule;
    
    toggleSlider = function () {
      var slider_height = $chatSlider.height();
      if ( slider_height === configMap.retracted_height ) {
        $chatSlider
          .animate({ 'height' : configMap.extended_height })
          //.css({ 'height' : configMap.extended_height })
          .attr( 'title', configMap.extended_title );
        return true;
      }
      else if ( slider_height === configMap.extended_height ) {
        $chatSlider
          .animate({ 'height' : configMap.retracted_height })
          //.css({ 'height' : configMap.retracted_height})
          .attr( 'title', configMap.retracted_title );
        return true;
      }
      return false;
    };
    
    onClickSlider = function ( event ) {
      toggleSlider();
      return false;
    };
    
    initModule = function ( $container ) {
      $container.html( configMap.template_html );
      $chatSlider = $container.find( '.spa-slider' );
      $chatSlider
        .attr( 'title', configMap.retracted_title )
        .click( onClickSlider );
      return true;
    };
    
    return { initModule : initModule };
  }( jQuery ));
  
  /*jQuery( document ).ready(
    function () { spa.initModule( jQuery( '#spa' ) ); }
  );*/
