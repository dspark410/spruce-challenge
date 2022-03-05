const seedBookings = require('./booking-seeds')
const sequelize = require('../config/connection')

// empty db and seed data into db
const seedAll = async () => {
  await sequelize.sync({ force: true })

  console.log('\n----- DATABASE SYNCED -----\n')

  const seeded = await seedBookings().catch((err) => console.log(err))

  if (seeded) console.log('\n----- BOOKINGS SEEDED -----\n')

  process.exit(0)
}

seedAll()
