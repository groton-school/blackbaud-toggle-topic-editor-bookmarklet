chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      const url = new URL(tab.url);
      if (
        url.host.endsWith('.myschoolapp.com') &&
        url.hash.startsWith('#topicdetail')
      ) {
        chrome.tabs.sendMessage(tabId, { message: 'tabUpdated' });
      }
    }
  });
});
