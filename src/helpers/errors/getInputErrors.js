export function getInputErrors(error) {
  if (!error || !error.graphQLErrors || !error.graphQLErrors.length) {
    return [['Internal Server Error'], {}];
  }

  let inputErrors;
  const messages = [];

  error.graphQLErrors.forEach(({ extensions, message }) => {
    if (message) {
      messages.push(message);
    }

    if (
      extensions &&
      extensions.code === 'BAD_USER_INPUT' &&
      extensions.exception.inputErrors
    ) {
      inputErrors = {
        ...inputErrors,
        ...extensions.exception.inputErrors
      };
    }
  });

  return [messages, inputErrors || {}];
}
