import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from '../dto/create-pago.dto';
import { UpdatePagoDto } from '../dto/update-pago.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PagosService {

  constructor(private readonly httpService: HttpService) {}

  async generateSessionToken(requestBody: any) {
    try {
      const newtransactionId = this.generateRandomTransactionId(9);
      const headers = {
        'transactionId': newtransactionId,
      };
      
  
      const response = await firstValueFrom(
        this.httpService.post(
          'https://api-pw.izipay.pe/security/v1/Token/Generate',
          requestBody,
          { headers }, 
        ),
      );

      const sessionToken = response.data.response.token;
      const newAmount = requestBody.amount;
      const newOrderNumber = requestBody.orderNumber;
      return {  transactionId: newtransactionId,token: sessionToken, amount: newAmount,orderNumber: newOrderNumber };
    } catch (error) {
      console.error('Error al generar token de sesión:', error);
      throw new Error('No se pudo generar el token de sesión');
    }
  }

  create(createPagoDto: CreatePagoDto) {
    return 'This action adds a new pago';
  }

  findAll() {
    return `This action returns all pagos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pago`;
  }

  update(id: number, updatePagoDto: UpdatePagoDto) {
    return `This action updates a #${id} pago`;
  }

  remove(id: number) {
    return `This action removes a #${id} pago`;
  }


  generateRandomTransactionId(length: number = 9): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }
  
}
