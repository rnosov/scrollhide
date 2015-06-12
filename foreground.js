chrome.runtime.onMessage.addListener
(
  function(request, sender, sendResponse) 
  {
    if (request.command == "disable")
    {
    	window.removeEventListener("wheel", scrollPos);
    	show();
    }
  }
);