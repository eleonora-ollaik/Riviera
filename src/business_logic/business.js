class Room{
constructor() {
    this.room_id = null;
    this.room_type = null;
    this.room_capacity = null;
    this.room_price =0;
    this.room_availability=false;
    this.room_food = false;
    this.room_description='';
    this.room_extras=null;
}



}
class Customer{
    constructor() {
    this.customer_id = null;
    this.customer_name = '';
    }
}

class Booking{

    constructor() {
    this.booking_id = null;
    this.customer_id = null;
    this.room_id = null;
    this.booking_start = Date();
    this.booking_end = Date();
    }
  
}

class RoomController {
    static lastKey = 0;
    
    constructor() {
        this.bookingsList = {}
    }

    newKey() {
        return ++RoomController.lastKey;
    }

    addBooking() {
        const key = this.newKey();
        this.bookingsList[key] = new Booking();
        return key;
    }

findRoomById
selectRoom
bookRoom
setprice
}