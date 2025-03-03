# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Expose the API port
EXPOSE 5001

# Build the TypeScript project
RUN npm run build

# Start the server using PM2
CMD ["pm2-runtime", "pm2.config.js"]
