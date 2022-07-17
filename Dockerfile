# The following is what we a call a Docker image.
# A Docker image is a set of instructions for how we want to run our application in a container.
# To find out more on what a container is, please visit: https://www.docker.com/resources/what-container/.

# Install Node.js on this distribution.
FROM node:alpine

# Where we will store all of our files in the container.
WORKDIR '/app'

# Copy the package.json file into the root directory defined above.
COPY package.json .

# Install the dependencies in the container.
RUN npm install

# Copy everything from the current working directory into the container.
COPY . .

# Bundle a minified version of all the code & dependencies into static files.
# These are static assets can be served from a server.
RUN npm run build

# Define a server(image) to serve our static assets generated above.
FROM nginx
# '--from=0': Copy everything from the first build step, which is everything above.
# '/app/build': Pull everything from this directory, which is where the static assets where generated.
# '/usr/share/nginx/html': Then move these static assets into the location where nginx will serve our static assets.
COPY --from=0 /app/build /usr/share/nginx/html