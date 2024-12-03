FROM dbeaver/base-java as base

MAINTAINER DBeaver Corp, devops@dbeaver.com

ENV DBEAVER_GID=8978
ENV DBEAVER_UID=8978

RUN apt-get update && \
    apt-get upgrade -y

RUN groupadd -g $DBEAVER_GID dbeaver && \
    useradd -g $DBEAVER_GID -M -u $DBEAVER_UID -s /bin/bash dbeaver

COPY cloudbeaver /opt/cloudbeaver
COPY scripts/launch-product.sh /opt/cloudbeaver/launch-product.sh

RUN chown -R $DBEAVER_UID:$DBEAVER_GID /opt/cloudbeaver

EXPOSE 8978
RUN find /opt/cloudbeaver -type d -exec chmod 775 {} \;
WORKDIR /opt/cloudbeaver/

RUN chmod +x "run-server.sh" "/opt/cloudbeaver/launch-product.sh"

# ENTRYPOINT ["./launch-product.sh"]


FROM alpine:latest

# Install bash and other dependencies
RUN apk update && apk add bash

# Set up Java
ENV JAVA_HOME=/opt/java/openjdk
COPY --from=eclipse-temurin:17-alpine $JAVA_HOME $JAVA_HOME
ENV PATH="${JAVA_HOME}/bin:${PATH}"

# Set up CloudBeaver
ENV CLOUDBEAVER_HOME="/opt/cloudbeaver"
COPY --from=base $CLOUDBEAVER_HOME $CLOUDBEAVER_HOME

# Switch back to the main CloudBeaver directory
WORKDIR $CLOUDBEAVER_HOME

# Ensure scripts are executable
RUN chmod +x run-server.sh

# Entry point to start the server
ENTRYPOINT ["./run-server.sh"]
