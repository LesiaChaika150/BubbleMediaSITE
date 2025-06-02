import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

// Посилання на сервер
const httpLink = createUploadLink({
  uri: "http://localhost:4000/graphql", // або заміни на адресу продакшен-сервера
}) as unknown as ReturnType<typeof createHttpLink>;

// Додаємо токен до запиту
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token"); // токен зберігається тут
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Ініціалізація клієнта Apollo
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
