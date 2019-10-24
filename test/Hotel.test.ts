import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";

describe("Hotel", () => {
  let hotel;
  const name = Random.string();


  beforeEach(() => {
    hotel = new Hotel(10);
  });

  describe("start as an empty hotel", () => {
    it ('should be created with no guests', () => {
      expect(hotel.guests).to.eql([])
    });

    it ('should check in a new guest', () => {
    
      hotel.checkInGuest({name});
      expect(hotel.guests).to.eql([{name}]);
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
      for(i=0;i<10;i++)
      {
      const guest = Random.string()
      hotel.checkInGuest({name:guest});
      }
      const guest11 = Random.string()
      expect(hotel.checkInGuest({name:guest11})).to.eq(false);
  });

      
  });
});
