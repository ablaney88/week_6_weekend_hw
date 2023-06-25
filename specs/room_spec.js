const assert = require('assert');
const Room = require('../models/room.js');

describe('Room', function() {

    let room;

    this.beforeEach(function () {

    room = new Room('Living Room', 45)        

    });

    it('should have an area in square meters', function(){

        const actual = room.size;
        assert.strictEqual(actual, 45);

    })

    it('should start not painted', function() {

        const actual = room.room_painted;
        assert.deepStrictEqual(actual, []);

    })

    it('should be able to be painted', function(){

        

    })


})