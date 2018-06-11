
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'go home'},
        {id: 2, task: 'have dinner'},
        {id: 3, task: 'learn some more'}
      ]);
    });
};
