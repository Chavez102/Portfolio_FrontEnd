FROM openjdk:11
VOLUME /tmp
ADD  ./Portfolio_BackEnd/Portfolio_BackEnd/target/portfolio-aws-exe.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]