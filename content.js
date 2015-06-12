function hide()
{
  var i, elements = document.querySelectorAll('body *');
  var len = elements.length;
  for (i = 0; i < len; i++) 
    if(
        (getComputedStyle(elements[i]).position === 'fixed') &&
        (elements[i].offsetWidth > 0 || elements[i].offsetHeight > 0)
      )
      {
        elements[i].setAttribute( "scrollhidestyle", '');
        if (elements[i].getAttribute( "style"))
          elements[i].setAttribute( "scrollhidestyle", elements[i].getAttribute( "style"));
        elements[i].setAttribute( "style", "display: none!important");
        
      }
}

function show()
{
  var i, elements = document.querySelectorAll('[scrollhidestyle]');
  var len = elements.length;
  for (i = 0; i < len; i++) 
    elements[i].setAttribute( "style", elements[i].getAttribute( "scrollhidestyle"));
}

var scrolldown = false;
var timeoutId,ltimeoutId,stimeoutId;
var paused = false;
function scrollPos(event)
{
  if (paused && scrolldown ==(event.deltaY>0)) return;
  paused = true;
  if(timeoutId ) clearTimeout(timeoutId);  
  if(ltimeoutId ) clearTimeout(ltimeoutId);  
  if(stimeoutId ) clearTimeout(stimeoutId);  
  scrolldown =(event.deltaY>0);
  stimeoutId = setTimeout
  (
    function()
    {
      scrolldown?hide():show();
      timeoutId = setTimeout
      (
        function()
        {
          scrolldown?hide():show();
          ltimeoutId = setTimeout
          (
            function()
            {
              paused = false;
            }, 4000
          );
        }, 750
      );
    },30
  );
}
var regex = /vk\.com|google\.com/;
if (window.location.hostname.search(regex)===-1)
  window.addEventListener("wheel", scrollPos);

