function button(text, click) {
  const button = document.createElement('a');
  button.href = '#';
  button.classList.add('btn', 'btn-default', 'btn-sm', 'pull-right', 'bttece');
  button.innerHTML = text;
  button.addEventListener('click', click);
  return button;
}

function toggleToEdit(e) {
  e.preventDefault();
  window.location.href = window.location.href.replace(
    /(.*)#topicdetail(\/.*)\/0/,
    '$1#topicdetailedit$2'
  );
}

function toggleToView(e) {
  e.preventDefault();
  window.location.href = window.location.href.replace(
    /(.*)#topicdetailedit(\/.*)/,
    '$1#topicdetail$2/0'
  );
}

function waitForSelector(selector, callback) {
  const element = document.querySelector(selector);
  if (element) {
    callback(element);
  } else {
    setTimeout(() => waitForSelector(selector, callback));
  }
}

function addEditButton() {
  waitForSelector('.topic-back-btn', (back) =>
    back.insertAdjacentElement('afterend', button('Edit Topic', toggleToEdit))
  );
}

function addViewButton() {
  waitForSelector('.workspace-footer .btn-default', (preview) =>
    preview.insertAdjacentElement(
      'beforebegin',
      button('Return to Student View', toggleToView)
    )
  );
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.message === 'tabUpdated') {
    if (window.location.hash.startsWith('#topicdetailedit')) {
      addViewButton();
    } else if (window.location.hash.startsWith('#topicdetail')) {
      addEditButton();
    }
  }
});
