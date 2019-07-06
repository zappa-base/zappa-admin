const excludedPaths = ['/logout', '/login'];

function isExcludedPath(path) {
  return excludedPaths.indexOf(path.toLowerCase()) > -1;
}

export function postLoginRedirect(fromState, history) {
  if (fromState && fromState.pathname && !isExcludedPath(fromState.pathname)) {
    history.push(fromState.pathname);
  }
}
