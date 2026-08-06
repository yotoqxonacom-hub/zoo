import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return 'Myeow World!';
    }

    public introduce(): string {
        return 'My name is Tommy, I am a cat!';
    }


}
