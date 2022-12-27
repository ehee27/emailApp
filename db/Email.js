const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/emaildb');

const Contact = db.define('contact', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: Sequelize.STRING,
  message: Sequelize.STRING
})

const syncAndSeed = async () => {
  try {
    await db.sync({force:true});

    Contact.create({firstName: 'Scott', lastName: 'Lucas', email: 'scottlucas100@yahoo.com', message: 'thank you!'}),
    Contact.create({firstName: 'Steven', lastName: 'Lucas', email: 'stevenlucas100@yahoo.com', message: 'thank you!'}),
    Contact.create({firstName: 'Jason', lastName: 'Lucas', email: 'jasonlucas100@yahoo.com', message: 'thank you!'});
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  db, 
  Contact,
  syncAndSeed
}