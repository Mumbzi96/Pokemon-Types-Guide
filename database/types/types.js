const types=[
    {
        name:'Normal',
        weakAgainst:['Rock', 'Ghost', 'Steel','Fighting'],
        strongAgainst:[],
        ResistantTo:['Ghost'],
        normalEffect:[]
    },
    {
        name:'Fighting',
        weakAgainst:['Flying', 'Poison', 'Psychic', 'Bug', 'Ghost', 'Fairy','Flying', 'Psychic', 'Fairy'],
        strongAgainst:['Normal', 'Rock', 'Steel', 'Ice', 'Dark'],
        ResistantTo:['Rock', 'Bug', 'Dark'],
        normalEffect:[]
    },
];


module.exports = types;