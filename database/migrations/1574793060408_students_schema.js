/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class StudentsSchema extends Schema {
  up() {
    this.create('students', table => {
      table.increments();
      table.string('uid');
      table.integer('points');
      table.timestamps();
    });
  }

  down() {
    this.drop('students');
  }
}

module.exports = StudentsSchema;
