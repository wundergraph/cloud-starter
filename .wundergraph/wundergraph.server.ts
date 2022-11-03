import { configureWunderGraphServer } from "@wundergraph/sdk";
import type { HooksConfig } from "./generated/wundergraph.hooks";
import type { InternalClient } from "./generated/wundergraph.internal.client";

export default configureWunderGraphServer<HooksConfig, InternalClient>(() => ({
  hooks: {
    queries: {
      Weather: {
        postResolve: async (hook) => {
          hook.log.info("postResolve hook for Weather");
        },
      },
    },
    mutations: {},
  },
  graphqlServers: [],
}));
