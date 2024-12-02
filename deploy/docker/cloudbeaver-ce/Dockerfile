# Stage 1: Base Setup with Java and CloudBeaver
FROM eclipse-temurin:17-alpine as base

# Set up Java environment
ENV JAVA_HOME=/opt/java/openjdk
ENV PATH="${JAVA_HOME}/bin:${PATH}"

# Set up CloudBeaver
ENV CLOUDBEAVER_HOME="/opt/cloudbeaver"

# Copy CloudBeaver files
COPY cloudbeaver $CLOUDBEAVER_HOME
COPY scripts/launch-product.sh $CLOUDBEAVER_HOME/launch-product.sh

# Ensure scripts are executable
RUN chmod +x "$CLOUDBEAVER_HOME/run-server.sh" "$CLOUDBEAVER_HOME/launch-product.sh"

# Stage 2: Lightweight Final Image
FROM alpine:latest

# Install dependencies
RUN apk update && apk add --no-cache bash

# Create user and group
ENV DBEAVER_GID=8978
ENV DBEAVER_UID=8978
RUN addgroup -g $DBEAVER_GID dbeaver && \
    adduser -D -H -u $DBEAVER_UID -G dbeaver -s /bin/bash dbeaver

# Set up CloudBeaver directory
ENV CLOUDBEAVER_HOME="/opt/cloudbeaver"

# Copy from base image
COPY --from=base $CLOUDBEAVER_HOME $CLOUDBEAVER_HOME
COPY --from=base /opt/java/openjdk /opt/java/openjdk

# Set permissions for CloudBeaver files
RUN chown -R dbeaver:dbeaver $CLOUDBEAVER_HOME && \
    find $CLOUDBEAVER_HOME -type d -exec chmod 775 {} \;

# Expose the server port
EXPOSE 8978

# Switch to non-root user
USER dbeaver

# Set working directory
WORKDIR $CLOUDBEAVER_HOME

# Entry point to start the server
ENTRYPOINT ["./launch-product.sh"]
