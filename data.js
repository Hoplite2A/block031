// database of pets, pets breed, pet age, owners name , telephone numbers, and appointments
const pets = [
    {
        id: 1,
        name: 'Fido',
        breed: 'Labrador',
        age: 3,
        owner: 'Owen',
        telephone: '555-555-5555',
        appointments: [

            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },
        ]
    },
    {
        id: 2,
        name: 'Edna',
        breed: 'Poodle',
        age: 2,
        owner: 'Brad',
        telephone: '555-555-5555',
        appointments: [
            {
                date: '01/01/2007',
                time: '10:00',
                reason: 'spay'
            },

        ]
    },
    {
        id: 3,
        name: 'JaRule',
        breed: 'Pitbull',
        age: 1,
        owner: 'Bill',
        telephone: '555-555-5555',
        appointments: [
            {
                date: '01/01/2001',
                time: '13:00',
                reason: 'Testicle Removal'
            },
            {
                date: '01/01/2012',
                time: '10:00',
                reason: 'checkup'
            }
        ]
    },
    {
        id: 4,
        name: 'Padfoot',
        breed: 'Deerhound ',
        age: 3,
        owner: 'Harry',
        telephone: '555-555-5555',
        appointments: [
            {
                date: '01/01/2022',
                time: '12:00',
                reason: 'Expelliarmus'
            },
        ]
    },
];

module.exports = pets;