import { createConnection } from "typeorm";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "undefined",
      database: "typeorm",
    });
    console.log("Connected to Postgres");
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to Postgres db");
  }
};

main();
