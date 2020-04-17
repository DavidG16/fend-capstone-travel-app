import {addHandleSubmit} from './handleSubmit'

describe('Test, the function "addHandleSubmit()" should exist' , () => {
    test('It should return true', async () => {
        expect(addHandleSubmit).toBeDefined();
    });
});