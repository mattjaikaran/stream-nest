import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';
import { MikroORM } from '@mikro-orm/core';
import config from '../mikro-orm.config'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  
  const config = new DocumentBuilder()
    .setTitle('Stream API')
    .setDescription('Nest API Swagger Docs')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const orm = await MikroORM.init(config);
  console.log('Discovered entities:', orm.getMetadata().getAll());

  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  
  await app.listen(3001);
}

bootstrap().catch(err => console.error(err));