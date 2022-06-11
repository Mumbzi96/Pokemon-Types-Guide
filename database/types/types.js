const types=[
    {
        name:'normal',
        weakAgainst:['fighting','rock','steel'],
        strongAgainst:[],
        noEffectFrom:['ghost'],
        noEffectAgainst:['ghost'],
    },
    {
        name:'fire',
        weakAgainst:['fire','water','rock','dragon','ground'],
        strongAgainst:['grass','ice','bug','steel','fairy'],
        noEffectFrom:[],
        noEffectAgainst:[],
    },
    {
        name:'water',
        weakAgainst:['water','grass','dragon','electric','grass'],
        strongAgainst:['fire','ground','rock','ice','steel'],
        noEffectFrom:[],
        noEffectAgainst:[],
    },
];


module.exports = types;