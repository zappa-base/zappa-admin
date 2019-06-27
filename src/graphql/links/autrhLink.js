import { setContext } from "apollo-link-context";

import { AuthLocalStorage } from "../../helpers/auth/localStorage";

export const authLink = setContext((_, { headers }) => {
  const { token } = AuthLocalStorage;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});