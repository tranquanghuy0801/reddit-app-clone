import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path/posix";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.ts$/,
  },
  entities: [Post],
  dbName: 'lireddit',
  debug: !__prod__,
  type: 'postgresql',
  user: 'huytran',
} as Parameters<typeof MikroORM.init>[0];