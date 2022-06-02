const env = process.env;

// console.log('config');

export const nodeEnv = env.NODE_ENV || 'development'

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0', // 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`
    // return `http://localhost:8080/`
  }
};
