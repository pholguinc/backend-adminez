/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
    constructor(
        @Inject('MYSQL_CONNECTION') private connection: Connection,
      ) {}
    
      async query(query: string, params: any[]): Promise<any> {
        const [rows] = await this.connection.execute(query, params);
        return rows; 
      }
}
