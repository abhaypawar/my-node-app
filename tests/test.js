const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Make sure app.js exports the express app

chai.use(chaiHttp);
const should = chai.should();

describe('GET /', () => {
  it('should return Hello World!', (done) => {
    chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.equal('Hello World!');
          done();
        });
  });
});
