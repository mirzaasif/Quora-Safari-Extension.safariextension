function sendMessage(message, response)
{
	chrome.extension.sendRequest(message, response);
}

function updateBadgeText(text)
{
	chrome.browserAction.setBadgeText({"text": text})
}

function getPath(file)
{
	return (safari.extension.baseURI + file);
}

function openUrl(url)
{
	safari.application.activeBrowserWindow.openTab().url = url;
}
