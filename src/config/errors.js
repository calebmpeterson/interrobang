module.exports = {
  maybeThrowError(query, config) {
    if (query === "!!error/no-config") {
      throw new Error("Unable to find configuration");
    }

    if (query === "!!error/with-config") {
      const error = new Error("Unable to find configuration");
      error.config = config;
      throw error;
    }
  }
};
