//given time and people find an available room

var data = [
    {'name': 'Room A',
    'timesBooked': [{ 'startTime' :new Date(2016,01,16,12,30),
                    'endTime': new Date(2016,01,16,1,30)}],
    'maxCapacity': 2
    },
    {'name': 'Room B',
    'timesBooked': [{ 'startTime' :new Date(2016,01,16,2,30),
                    'endTime': new Date(2016,01,16,3,30)}],
    'maxCapacity': 10
    }
];

function findAvailableRoom(numPeople, time, room) {
    var availableRoom;

    data.forEach(function(room) {
        if(checkMaxCapacity(9, room) === true) {
            checkBookTimes(room, time);
            availableRoom = room;
        };
    });

    alert(availableRoom);
}

function ifRoomExists(room, rooms) {
    return (rooms.indexOf(room) > -1) == true ? true : false;
}

function checkMaxCapacity(preferredCapacity, room) {
    return (room.maxCapacity >= preferredCapacity) == true ? true: false;
}

function checkBookTimes(room, time) {
     return (time < room.startTime && time > room.endTime)
}

Date.prototype.addHours = function(h) {    
   this.setTime(this.getTime() + (h*60*60*1000)); 
   return this;   
}