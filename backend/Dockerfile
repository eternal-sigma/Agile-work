FROM openjdk:8-jre-alpine
COPY /xidianProject/build/libs/xidianProject.jar /usr/src/app.jar
WORKDIR /usr/src
ENTRYPOINT ["java","-jar","app.jar"]