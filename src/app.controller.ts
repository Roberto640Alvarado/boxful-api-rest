import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class AppController {

  //Controller para crear una orden
  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    try {
      //console.log('Datos recibidos y validados:', createOrderDto);
      return {
        status: HttpStatus.CREATED,
        message: 'Orden recibida y validada correctamente',
        data: createOrderDto,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error al procesar la orden. Verifique los datos e intente de nuevo.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

