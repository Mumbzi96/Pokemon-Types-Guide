const types=[
    {
        name:'normal',
        weakAgainst:['rock', 'ghost', 'steel','fighting'],
        strongAgainst:[],
        resistantTo:['ghost'],
        normalEffect:[]
    },
    {
        name:'fighting',
        weakAgainst:['flying', 'poison', 'psychic', 'bug', 'ghost', 'fairy','flying', 'psychic', 'fairy'],
        strongAgainst:['normal', 'rock', 'steel', 'ice', 'dark'],
        resistantTo:['rock', 'bug', 'dark'],
        normalEffect:[]
    },
];


module.exports = types;