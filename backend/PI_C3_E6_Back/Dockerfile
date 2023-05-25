# Imagen base con JDK de Java
FROM adoptopenjdk:17-jdk-hotspot

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo pom.xml para resolver las dependencias
COPY pom.xml .

# Descargar las dependencias de Maven en caché
RUN ["mvn", "dependency:go-offline", "-B"]

# Copiar el código fuente al contenedor
COPY src ./src

# Empaquetar la aplicación usando Maven
RUN ["mvn", "package", "-DskipTests"]

# Puerto en el que se ejecutará la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["java", "-jar", "target/PI_C3_E6_BACK-0.0.1-SNAPSHOT.jar"]