import { onError } from "apollo-link-error";
import { Observable } from "apollo-link";
import { AuthLocalStorage } from "../../helpers/auth/localStorage";
import { getNewToken } from "../getNewToken";

export const onErrorLink = onError(
  // eslint-disable-next-line consistent-return
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
      for (let index = 0; index < graphQLErrors.length; index += 1) {
        switch (graphQLErrors[index].extensions.code) {
          case 'UNAUTHENTICATED': {
            const { token } = AuthLocalStorage;

            if (!token) {
              break;
            }

            return new Observable(observer => {
              getNewToken(token)
                .then(() => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                  };

                  // Retry last failed request
                  forward(operation).subscribe(subscriber);
                })
                .catch(error => {
                  // No refresh or client token available, we force user to login
                  console.error('Invalid creds, going to login screen', error);

                  AuthLocalStorage.remove();

                  observer.next(undefined);
                  observer.error(error);
                });
            });
          }
          default:
            console.log(
              `[GraphQL error]: Message: ${graphQLErrors[index].message}, Location: ${graphQLErrors[index].locations}, Path: ${graphQLErrors[index].path}`
            );
            break;
        }
      }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);