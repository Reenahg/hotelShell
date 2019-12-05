import { Guest } from "./Guest";

export class Hotel {
  public guests: any[] = [];
  
  constructor(private rooms: number) {  }

  public checkInGuest(guest: Guest) : boolean{
    if(this.guests.length<this.rooms && !this.guests.includes(guest) )
    {
      this.guests.push(guest);
      return true;
    } else { 
      return false;
    } 
  }

public checkOutGuest(guest: Guest) {
  if(this.guests.includes(guest) )
  {
    for(var i = this.guests.length - 1; i >= 0; i--) 
    {
      if(this.guests[i]== guest) 
      {
          this.guests.splice(i, 1);
      }
    }
    //this.guests= this.guests.filter(element => element !== guest);
    }  
  }

  public countAvailableRooms(): number {
    return this.rooms-this.guests.length;
  }
        
        
   
  
  }
