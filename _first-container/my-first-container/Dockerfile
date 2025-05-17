# Use an official Node.js runtime as a parent image
FROM node:14-alpine
# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app
# Copy the current directory contents into the container at /usr/src/app
COPY package*.json ./
# Install any needed packages specified in package.json
RUN npm install
# Copy the rest of the application code into the container at /usr/src/app
COPY . .
# Make port 3000 available to the world outside this container
EXPOSE 3000
CMD ["npm", "start"] # Run the application
