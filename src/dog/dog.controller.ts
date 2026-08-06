import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { DogService } from './dog.service';




@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) { }

    @Get()
    public getHello(): string {
        return this.dogService.getHello();
    }

    @Get('greet/:id/')
    public introduce(@Param() params: any, @Query() query: any): string {
        console.log('Params:', params);
        console.log('Query:', query);
        return this.dogService.introduce();
    }

    @Post('edit')
    public modifyDetails(@Body() body: any): string {
        console.log('Body:', body);
        return this.dogService.modifyDetails();
    }
}
