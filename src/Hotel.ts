export class Hotel {
  public guests: any[] = [];
  

  constructor(_rooms: number) {}

  public checkInGuest(guest: { name: string }) : boolean{
    
    if(this.guests.includes(guest)){
      return false;
    }
    else{
      this.guests.push(guest);
      return true;
    }
   
  
  }
}