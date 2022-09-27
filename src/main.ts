import app from "./app/app";
import logger from "./app/utils/logger";
import { PORT } from "./config";
import { db } from "./infra/db";

(async () => {
  try {
    await db
      .sync()
      .then(() => {
        logger.info("Connected to Database!");
      })
      .catch((error: any) => {
        logger.error(error);
        process.exit(1);
      });
    app.listen(PORT, () => {
      logger.info(`Server running at http://localhost:${PORT}/api/v1/`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
})();
