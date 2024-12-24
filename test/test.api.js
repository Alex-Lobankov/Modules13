import { expect } from 'chai';
import sinon from 'sinon';
import { fetchUsers } from '../api.js';

describe('fetchUsers', () => {
    let fetchStub;

    beforeEach(() => {
        fetchStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchStub.restore();
    });

    it('should log user names', async () => {
        const mockResponse = {
            json: () => Promise.resolve([
                { id: 1, name: "Alexandr Lobankov" },
                { id: 2, name: "Petr Ivanov" },
                { id: 3, name: "Sonya Evsina" }
            ])
        };
        fetchStub.returns(Promise.resolve(mockResponse));
        const logSpy = sinon.spy(console, 'log');
        await fetchUsers();
        expect(logSpy.calledWith("Alexandr Lobankov")).to.be.true;
        expect(logSpy.calledWith("Petr Ivanov")).to.be.true;
        expect(logSpy.calledWith("Sonya Evsina")).to.be.true;
        logSpy.restore();
    });
});