chrome.action.onClicked.addListener((tab) => {
  let url;
  if (/.*#topicdetail\/.*\/0\/0/.test(tab.url)) {
    url = tab.url.replace(/(.*)#topicdetail(\/.*)\/0/, '$1#topicdetailedit$2');
  } else if (/.*#topicdetailedit\/.*/.test(tab.url)) {
    url = tab.url.replace(/(.*)#topicdetailedit(\/.*)/, '$1#topicdetail$2/0');
  }
  chrome.tabs.update({ url });
});
