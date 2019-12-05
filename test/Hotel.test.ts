import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";
import { Guest } from '../src/Guest';
import { stringify } from 'querystring';

describe("Hotel", () => {
  let hotel;
  const name = Random.string();
  const guest=new Guest(name ,"vegan")

  beforeEach(() => {
    hotel = new Hotel(10);
  });
   

  it ('should be created with no guests', () => {
    expect(hotel.guests).to.eql([])
  });

  it ('should check in a new guest', () => {
    hotel.checkInGuest(guest);
    expect(hotel.guests).to.eql([guest]);
  });
  
  it ('should check in second guest', () => {
    
    const name2 = Random.string()
    hotel.checkInGuest({name});
    
    hotel.checkInGuest({name: name2});
    expect(hotel.guests).to.eql([{name}, {name: name2}]);
  });

  it ('shouldnot allow to check in same guest again', () => {
    const guest = {name};
    hotel.checkInGuest(guest);
    expect(hotel.checkInGuest(guest)).to.eq(false);
    expect(hotel.guests).to.eql([guest]);
  });

  it ('shouldnot allow to check in if there are no free rooms', () => {
  
    var i;
    for(i=0;i<hotel.rooms;i++)
    {
    const guest = Random.string()
    hotel.checkInGuest({name:guest});
    }
    const guest11 = Random.string()
    expect(hotel.checkInGuest({name:guest11})).to.eq(false);
  });


  it ('should check out the guest and update room numbers', () => {
    const guest = {name};
    hotel.checkInGuest(guest);
    const name2 = Random.string();
    hotel.checkInGuest(name2);
    expect(hotel.guests.length).to.eql(2);
     hotel.checkOutGuest(name2);
    expect(hotel.guests).to.eql([guest]);
  
  });
      

  it('should return the number of available rooms', () => { 
    expect(hotel.countAvailableRooms()).to.eql(10);
    const guest = {name};
    hotel.checkInGuest(guest)
    expect(hotel.countAvailableRooms()).to.eql(9);
  });
});


