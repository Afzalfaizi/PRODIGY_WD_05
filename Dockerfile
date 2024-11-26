# Use an official Python runtime as a parent image
FROM node:latest

LABEL maintainer="Muhammad Afzal"
# Set the working directory in the container
WORKDIR /code

# Copy the current directory contents into the container at /code
COPY . /code/

RUN npm install

# Make port 8000 available to the world outside this container
EXPOSE 8000

CMD ["npm", "run", "dev"]
