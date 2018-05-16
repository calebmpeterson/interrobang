class ConfigParsingError extends Error {
  constructor(params) {
    super(params.message);
    this.message = params.message;
    this.config = params.config;
  }
}

module.exports = ConfigParsingError;
