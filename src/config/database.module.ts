import { DatabaseService } from './database.service';
import { Module, Global } from '@nestjs/common';
import { createMysqlConnection } from './database.config';

@Global()
@Module({
  providers: [
    DatabaseService,
    {
      provide: 'MYSQL_CONNECTION',
      useFactory: async () => {
        const connection = await createMysqlConnection();
        return connection;
      },
    },
  ],
  exports: ['MYSQL_CONNECTION', DatabaseService],
})
export class DatabaseModule {}
