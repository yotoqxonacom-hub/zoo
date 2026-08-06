import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return 'Wouf-wouf World!';
    }

    public introduce(): string {
        return 'My name is Buddy, I am a dog!';
    }
}
