import logger from './config/logger';
import app from './config/express';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server running at ${PORT}`);
});
