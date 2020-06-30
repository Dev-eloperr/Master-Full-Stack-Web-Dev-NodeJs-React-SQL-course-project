const pool = require('../databasePool');
const TRAITS = require('../data/traits');

TRAITS.forEach(element => {
    const traitType = element.type;
    const traitValues = element.values;

    traitValues.forEach(traitValue =>{
        pool.query(
            'INSERT INTO trait("traitType","traitValue") VALUES($1,$2) RETURNING id',
            [traitType,traitValue],
            (error,response) => {
                if(error) console.error(error);

                const traitId = response.rows[0].id;

                console.log(`Inserted Trait - id : ${traitId}`);
            }
        )
    });
});