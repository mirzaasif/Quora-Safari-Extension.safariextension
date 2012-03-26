function sendMessage(message, response)
{
	chrome.extension.sendRequest(message, response);
}

function updateBadgeText(text)
{
	var views = safari.extension.toolbarItems;
    for (var corey = 0; corey < views.length; corey++) 
    {
    	if(views[corey].identifier == "toolbar1")
		{
			views[corey].badge = text;	
		}																	
    }
}

function getPath(file)
{
	return (safari.extension.baseURI + file);
}

function openUrl(url)
{
	safari.application.activeBrowserWindow.openTab().url = url;
}
