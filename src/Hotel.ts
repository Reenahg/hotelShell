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

    public checkOutGuest(guest: { name: string }) {
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
        
        
   
  
  }
