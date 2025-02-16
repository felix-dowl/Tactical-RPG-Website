import { Test, TestingModule } from '@nestjs/testing';
import { DateService } from './date.service';

describe.only('DateService', () => {
    let service: DateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DateService],
        }).compile();

        service = module.get<DateService>(DateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('currentTime should return the current time', () => {
        const fakeDateObj = new Date();
        const fakeDate = `${fakeDateObj.getFullYear()}/${fakeDateObj.getMonth() + 1}/${fakeDateObj.getDate()}`;
        jest.useFakeTimers().setSystemTime(fakeDateObj);
        expect(service.currentTime()).toEqual(fakeDate);
    });
});
