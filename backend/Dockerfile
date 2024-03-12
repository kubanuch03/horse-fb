# Use an official Python runtime as the base image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install libcrypt
RUN apt-get update && apt-get install -y libcrypt1

# Установить Node.js
RUN apt-get update && \
    apt-get install -y libcrypt1 && 

# Set the working directory in the container
WORKDIR /backend/app

# Copy the requirements file
COPY requirement.txt /app/

# Install dependencies
RUN pip install gunicorn --no-cache-dir \
    pip install --no-cache-dir -r requirement.txt

# Run the entrypoint script when the container starts
CMD ["bash", "entrypoint.sh"]


