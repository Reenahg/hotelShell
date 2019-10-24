export class Hotel {
  public guests: any[] = [];
  

  constructor(private rooms: number) {

  }

  public checkInGuest(guest: { name: string }) : boolean{
    if(this.guests.length<this.rooms && !this.guests.includes(guest) )
    {
      this.guests.push(guest);
      return true;
    }
    else 
    { 
      return false;
    }
      
    }
   
  
  }
