db.createCollection('people');
db.people.insertMany([
  {
    name: 'Arto Hellas',
    phone: '040-123543',
    street: 'Tapiolankatu 5 A',
    city: 'Espoo',
  },
  {
    name: 'Matti Luukkainen',
    phone: '040-432342',
    street: 'Malminkaari 10 A',
    city: 'Helsinki',
  },
  {
    name: 'Venla Ruuska',
    street: 'Nallemäentie 22 C',
    city: 'Helsinki',
  },
]);

db.users.insertMany([
  {
    username: 'John Smith',
    friends: [],
  },
  {
    username: 'Jane Doe',
    friends: [],
  },
]);
