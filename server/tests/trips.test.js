import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

describe('Testing the trip endpoints:', () => {
  it('It should create a create', (done) => {
    const trip = {
      id : 1,
      origin : "kampala",
      destination: "nairobi",
      seat_capacity: 60,
      bus_license_number: "HKI24l",
      trip_date: "19/07/2019",
      fare: 400.0,
      status : "active"
    };
    chai.request(app)
      .post('/api/v1/trips')
      .set('Accept', 'application/json')
      .send(book)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: 1,
          origin: trip.origin,
          destination: trip.destination,
          seat_capacity: trip.seat_capacity,
          bus_license_number: trip.bus_license_number,
          trip_date: trip.trip_date,
          fare: trip.fare,
          status: trip.active
        });
        done();
      });
  });

});
