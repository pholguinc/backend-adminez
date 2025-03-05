import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { createMysqlConnection, envs } from './config';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);
  const port = envs.port ?? 3000;

  app.setGlobalPrefix('api');

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  try {
    const connection = await createMysqlConnection();

    logger.log('Conexión a MySQL exitosa!'); 
    await connection.end(); 
  } catch (error) {
    logger.error('Error al conectar con MySQL', error); 
    process.exit(1); 
  }

  await app.listen(port);
  logger.log(`Backend corriendo en el puerto ${port}`);
}
bootstrap();