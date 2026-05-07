import {test, expect} from '@playwright/test'
import { ApiHelper } from '../../utils/api.helper';

test.describe('Auth api scenarios', ()=>{
    test('should login successfully and return token', async()=>{
         const apiObject = new ApiHelper();
         await apiObject.init();
        const resp =  await apiObject.login(
            'eve.holt@reqres.in',
            'pistol'
         );
         
         expect(resp.status()).toBe(200);
         const body = await resp.json();
         expect(body.token).toBeDefined();
         await apiObject.dispose();
    });

    test('should fail login when password is missing', async()=>{
     const apiObject = new ApiHelper();
         await apiObject.init();
        const resp =  await apiObject.login(
            'eve.holt@reqres.in',
            ''
         );
       const body = await resp.json();
       expect (body.error).toContain('Missing password');
       await apiObject.dispose();
       
    });
})