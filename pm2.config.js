module.exports = {
    apps: [
      {
        name: "weather-api",
        script: "dist/server.js",
        instances: "max",
        exec_mode: "cluster", 
        watch: false, 
        env: {
          NODE_ENV: "development",
          PORT: 5001,
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 8080,
        },
        max_memory_restart: "500M", 
        error_file: "logs/pm2-error.log",
        out_file: "logs/pm2-out.log",
        log_date_format: "YYYY-MM-DD HH:mm:ss",
      },
    ],
  };
  