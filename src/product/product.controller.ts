import { HttpCode, Body, Controller, Param, Delete, Patch, Post, Get } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product';

@Controller('product')
export class ProductController {

    //
    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {

    }

    //отправка по id 
    @Get(':id')
    async get(@Param('id') id: string) {

    }

    //удаления по id 
    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    //добавления 
    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: ProductModel) {

    }

    //поиск продукта 
    @HttpCode(200)
    @Post('')
    async find(@Param('id') id: string, @Body() dto: FindProductDto) {

    }
}
