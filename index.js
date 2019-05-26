import './style.scss';

const eventBus = new Vue({
  data: {
    people: [
      { name: 'Wayne', location: 'Rockingham' },
      { name: 'Renae', location: 'Baldivis' },
      { name: 'Lachlan', location: 'Baldivis' },
      { name: 'Rhylee', location: 'Joondalup' }
    ]
  }
});

new Vue({
  el: '#form',
  data: {
    people: eventBus.people
  }
});

new Vue({
  el: '#people',
  data: {
    people: eventBus.people
  }
})
