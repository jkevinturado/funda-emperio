import chai from 'chai';
import server from '../app.js';
import chaiHttp from 'chai-http';

chai.should();

chai.use(chaiHttp);

describe('Auth API', () => {
  describe('GET /api/user/list', () => {
    it('It should GET all the user', (done) => {
      chai
        .request(server)
        .get('/api/user/list')
        .end((err, response) => {
          response.shoud.have.status(200);
        });
    });
  });
});
