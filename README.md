# Happy Hotel 

### Hotel Rules: 
- No extensions can be made to the hotel or its component parts without first implementing a failing test
- The hotel is not responsible for keeping guest or restaurant data

### Features to add: 

#### Checking In 
- [x] Confirm a stay for tonight and update the hotel
- [x] Don't allow the same guest to check in more than once (throw an error?)
- [x] Don't allow a guest to check in if there are no free rooms
- [x] BONUS: Consider reactoring your 'checkIn' function 

#### Check out
- [x] On checking out a guest, update the hotel system to record the free room
- [ ] Request payment from the guest on checkout
- [ ] Refactor checkout (mdn (find? filter?))

#### Guests
- [ ] Store guests' names and dietary requirements eg vegetarian, nut allergy etc. 
- [ ] Guests should know which hotel they're checked in at at any given time.

#### Rooms
- [ ] Record when a guest complains about a room - the room cannot be used while it is broken
- [ ] Send a builder to fix the broken room 

#### Restaurant
- [ ] Print a restaurant menu 
- [ ] Select a menu for a guest, but don't give them anything they're allergic to
- [ ] Update checkout to include the restaurant bill

#### More hotels
- [ ] Add another hotel to the chain. A guest cannot be staying in more than one hotel on any given night. 
