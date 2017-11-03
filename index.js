const R = require('ramda');

function initClub(clubName, userId) {
  return {
    userId,
    id: generateId(),
    proTeam: initPlayers(),
    youthTeam: initPlayers(2)
  };
}

function generateId() {
  const id1 = Math.round(Math.random() * 1000000000);
  const id2 = Math.round(Math.random() * 1000000000);
  return Number(R.join('', [id1, id2]));
}

function initPlayers(teamLevel = 1) {

  function generateTeam(num) {
    function charact(min) {
      return Math.floor(R.add(R.multiply(Math.random(), R.subtract(100, min)), min));
    }

    return R.map(() => ({
      id: generateId(),
      name: 'Mickael Jordan',
      charact: {
        ft: charact(R.divide(50, teamLevel)),
        twoPts: charact(R.divide(30, teamLevel)),
        threePts: charact(R.divide(20, teamLevel))
      },
      stats: {
        ft: [0, 0],
        twoPts: [0, 0],
        threePts: [0, 0],
        pts: 0,
        eval: 0
      }
    }), R.range(0, num));
  }

  return generateTeam(10);
}
