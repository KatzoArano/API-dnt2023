const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const DB = require('../db.config')
const User = DB.User

const should = chai.should();

chai.use(chaiHttp)

describe('/GET users not found', () => {
    it('it should Get all users not found', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/GET users', () => {
    it('it should Get all users', (done) => {
        chai.request(app)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});


// describe('/POST user', () => {
//     it('it sould post the user info', (done) => {
//         chai.request(app)
//             .post('/users')
//             .send({ nom: "Aa", prenom: "aaaaaaa", email: "aaaaaaa@wanadoo.fr", password: "orkatz", adresse: "test", ville: "test", cp: "6464", role: "client" })
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 done();
//             });
//     });
// });

// describe('/POST user', () => {
//     it('it sould the user already exists !` ', (done) => {
//         chai.request(app)
//             .post('/users')
//             .send({ nom: "A", prenom: "12345", email: "aa@wanadoo.fr", password: "orkatz", adresse: "test", ville: "test", cp: "6464", role: "client" })
//             .end((err, res) => {
//                 res.should.have.status(409);
//                 done();
//             });
//     });
// });

// describe('/POST user', () => {
//     it('it sould mssing data !` ', (done) => {
//         chai.request(app)
//             .post('/users')
//             .send({ nom: "A", prenom: "12345", email: "aa@wanadoo.fr", password: "orkatz", adresse: "test", ville: "test" })
//             .end((err, res) => {
//                 res.should.have.status(400);
//                 done();
//             });
//     });
// });

// describe('/PUT user', () => {
//     it("should update the user info", (done) => {
//         const userId = 12;

//         chai.request(app)
//             .put(`/users/${userId}`)
//             .send({
//                 nom: "Kaosa",
//                 prenom: "Kaos",
//                 email: "kaos@wanadoo.fraaa",
//             })
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 done();
//             });
//     });
// });

// describe('/DELETE user', () => {
//     it('it sould delete user !` ', (done) => {
//         const userId = 1;
//         chai.request(app)
//             .delete(`/users/${userId}`)
//             .send({ nom: "A", prenom: "12345", email: "aa@wanadoo.fr", password: "orkatz", adresse: "test", ville: "test" })
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 done();
//             });
//     });
// });

