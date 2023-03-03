# Specify the base image
FROM node:14-alpine

# Create a working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD [ "npm", "run" ,"app1" ]
