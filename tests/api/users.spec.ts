import {test,expect} from '@playwright/test';
import { ApiHelper } from '../../utils/api.helper';
import { USERS } from '../../utils/test.data';

test.describe('validating users related scenarios',()=>{
    let apihelperObj:ApiHelper;

    test.beforeEach(async()=>{
        apihelperObj = new ApiHelper();
         await apihelperObj.init();
    });

    test.afterEach(async()=>{
     await apihelperObj.dispose();
    });

    test('should fetch user list',async()=>{
 const response = await apihelperObj.getUser(1);
  expect(response.status()).toBe(200);
        const body = await response.json();
        console.log(body);
         expect(body.page).toBe(1);
        });


    test('should fetch single user', async()=>{
        const response = await apihelperObj.getSingleUser(4)
        expect(response.status()).toBe(200);
        const body = await response.json();
         expect(body.data.id).toBe(4);
    });

    test('should create user',async()=>{
      const response = await apihelperObj.createUser(USERS.CREATE_USER.email,USERS.CREATE_USER.password);
        expect (response.status()).toBe(200);
        const body = await response.json();
        console.log(body);
        expect.soft(body.data.id).toBeDefined();
    });

    test('should update user', async()=>{
        const response = await apihelperObj.updateUser(4, USERS.UPDATE_USER.name, USERS.UPDATE_USER.job);
        expect (response.status()).toBe(200);
        const body = await response.json();
        console.log(body);
        expect(body.name).toBe(USERS.UPDATE_USER.name);
        expect(body.job).toBe(USERS.UPDATE_USER.job)

    });
    test('should delete user', async()=>{
          const response = await apihelperObj.deleteUser(4)
        expect((await response).status()).toBe(204);
    });
});