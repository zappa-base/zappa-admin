export function inputErrorsToFormErrors(state, network) {
  if (state.errors && state.errors.form) {
    return {
      header: 'Invalid User Input',
      list: state.errors.form ? [state.errors.form] : null
    };
  }

  if (network && Array.isArray(network)) {
    const list = Object.values(network[1]).map(item =>
      Array.isArray(item) ? item[0] : item
    );
    return {
      header: network[0],
      list: list.length ? list : null
    };
  }

  return [null, null];
}
