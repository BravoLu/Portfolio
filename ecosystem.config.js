// ecosystem.config.js

module.exports = {
    apps: [
      {
        name: 'BravoLu',
        script: 'npm',
        args: 'run start:prod', // Assuming you have a custom npm script for production start
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production',
          PORT: 3000, // Change the port if needed
        },
      },
    ],
  };
  