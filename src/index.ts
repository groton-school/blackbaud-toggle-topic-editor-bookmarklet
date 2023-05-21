(() => {
  const a = document.location.href;
  if (a.match(/.*#topicdetail\/.*\/0\/0/)) {
    document.location.href = a.replace(
      /(.*)#topicdetail(\/.*)\/0/,
      '$1#topicdetailedit$2'
    );
  } else if (a.match(/(.*)#topicdetailedit(\/.*)/)) {
    document.location.href = a.replace(
      /(.*)#topicdetailedit(\/.*)/,
      '$1#topicdetail$2/0'
    );
  } else {
    alert('Not on a MyGroton topic page!');
  }
})();
