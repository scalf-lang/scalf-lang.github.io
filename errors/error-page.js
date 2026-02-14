window.addEventListener('DOMContentLoaded', () => {
  const code = document.body.dataset.code;
  const info = (window.ERROR_DOCS || {})[code];
  const codeNode = document.getElementById('code');
  const titleNode = document.getElementById('title');
  const problemNode = document.getElementById('problem');
  const fixNode = document.getElementById('fix');

  codeNode.textContent = code;

  if (!info) {
    titleNode.textContent = 'Unknown error code';
    problemNode.textContent = 'No specific documentation exists for this code yet.';
    fixNode.textContent = 'Check surrounding CLI diagnostics, stack trace, and release notes.';
    return;
  }

  titleNode.textContent = info.title;
  problemNode.textContent = info.problem;
  fixNode.textContent = info.fix;
});
