// Pool A Teams //

let france = {
  name: 'France',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let newZealand = {
  name: 'New Zealand',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let italy = {
  name: 'Italy',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let uruguay = {
  name: 'Uruguay',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let namibia = {
  name: 'Namibia',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let poolAArray = [france, newZealand, italy, uruguay, namibia]

function addToPoolATable(team) {
  for (let i = 0; i < team.length; i++) {
    document
      .getElementsByClassName('poolATable')[0]
      .getElementsByClassName('teamCol')[i + 1].innerHTML = team[i].name
    document
      .getElementsByClassName('poolATable')[0]
      .getElementsByClassName('teamPlayed')[i + 1].innerHTML = team[i].played
    document
      .getElementsByClassName('poolATable')[0]
      .getElementsByClassName('teamWon')[i + 1].innerHTML = team[i].won
    document
      .getElementsByClassName('poolATable')[0]
      .getElementsByClassName('teamDrawn')[i + 1].innerHTML = team[i].drawn
    document
      .getElementsByClassName('poolATable')[0]
      .getElementsByClassName('teamLost')[i + 1].innerHTML = team[i].lost
    document
      .getElementsByClassName('poolATable')[0]
      .getElementsByClassName('teamPointsDif')[i + 1].innerHTML =
      team[i].pointsDif
    document
      .getElementsByClassName('poolATable')[0]
      .getElementsByClassName('teamBonusPoints')[i + 1].innerHTML =
      team[i].bonusPoints
    document
      .getElementsByClassName('poolATable')[0]
      .getElementsByClassName('teamPoints')[i + 1].innerHTML = team[i].points
  }
}

// Pool B Teams //

let southAfrica = {
  name: 'South Africa',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let ireland = {
  name: 'Ireland',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let scotland = {
  name: 'Scotland',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let tonga = {
  name: 'Tonga',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let romania = {
  name: 'Romania',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let poolBArray = [southAfrica, ireland, scotland, tonga, romania]

function addToPoolBTable(team) {
  for (let i = 0; i < team.length; i++) {
    document
      .getElementsByClassName('poolBTable')[0]
      .getElementsByClassName('teamCol')[i + 1].innerHTML = team[i].name
    document
      .getElementsByClassName('poolBTable')[0]
      .getElementsByClassName('teamPlayed')[i + 1].innerHTML = team[i].played
    document
      .getElementsByClassName('poolBTable')[0]
      .getElementsByClassName('teamWon')[i + 1].innerHTML = team[i].won
    document
      .getElementsByClassName('poolBTable')[0]
      .getElementsByClassName('teamDrawn')[i + 1].innerHTML = team[i].drawn
    document
      .getElementsByClassName('poolBTable')[0]
      .getElementsByClassName('teamLost')[i + 1].innerHTML = team[i].lost
    document
      .getElementsByClassName('poolBTable')[0]
      .getElementsByClassName('teamPointsDif')[i + 1].innerHTML =
      team[i].pointsDif
    document
      .getElementsByClassName('poolBTable')[0]
      .getElementsByClassName('teamBonusPoints')[i + 1].innerHTML =
      team[i].bonusPoints
    document
      .getElementsByClassName('poolBTable')[0]
      .getElementsByClassName('teamPoints')[i + 1].innerHTML = team[i].points
  }
}

// Pool C Teams //

let wales = {
  name: 'Wales',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let australia = {
  name: 'Australia',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let fiji = {
  name: 'Fiji',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let georgia = {
  name: 'Georgia',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let portugal = {
  name: 'Portugal',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let poolCArray = [wales, australia, fiji, georgia, portugal]

function addToPoolCTable(team) {
  for (let i = 0; i < team.length; i++) {
    document
      .getElementsByClassName('poolCTable')[0]
      .getElementsByClassName('teamCol')[i + 1].innerHTML = team[i].name
    document
      .getElementsByClassName('poolCTable')[0]
      .getElementsByClassName('teamPlayed')[i + 1].innerHTML = team[i].played
    document
      .getElementsByClassName('poolCTable')[0]
      .getElementsByClassName('teamWon')[i + 1].innerHTML = team[i].won
    document
      .getElementsByClassName('poolCTable')[0]
      .getElementsByClassName('teamDrawn')[i + 1].innerHTML = team[i].drawn
    document
      .getElementsByClassName('poolCTable')[0]
      .getElementsByClassName('teamLost')[i + 1].innerHTML = team[i].lost
    document
      .getElementsByClassName('poolCTable')[0]
      .getElementsByClassName('teamPointsDif')[i + 1].innerHTML =
      team[i].pointsDif
    document
      .getElementsByClassName('poolCTable')[0]
      .getElementsByClassName('teamBonusPoints')[i + 1].innerHTML =
      team[i].bonusPoints
    document
      .getElementsByClassName('poolCTable')[0]
      .getElementsByClassName('teamPoints')[i + 1].innerHTML = team[i].points
  }
}

// Pool D Teams //

let england = {
  name: 'England',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let argentina = {
  name: 'Argentina',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let japan = {
  name: 'Japan',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let samoa = {
  name: 'Samoa',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let chile = {
  name: 'Chile',
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  pointsDif: 0,
  bonusPoints: 0,
  points: 0,
}

let poolDArray = [england, argentina, japan, samoa, chile]

function addToPoolDTable(team) {
  for (let i = 0; i < team.length; i++) {
    document
      .getElementsByClassName('poolDTable')[0]
      .getElementsByClassName('teamCol')[i + 1].innerHTML = team[i].name
    document
      .getElementsByClassName('poolDTable')[0]
      .getElementsByClassName('teamPlayed')[i + 1].innerHTML = team[i].played
    document
      .getElementsByClassName('poolDTable')[0]
      .getElementsByClassName('teamWon')[i + 1].innerHTML = team[i].won
    document
      .getElementsByClassName('poolDTable')[0]
      .getElementsByClassName('teamDrawn')[i + 1].innerHTML = team[i].drawn
    document
      .getElementsByClassName('poolDTable')[0]
      .getElementsByClassName('teamLost')[i + 1].innerHTML = team[i].lost
    document
      .getElementsByClassName('poolDTable')[0]
      .getElementsByClassName('teamPointsDif')[i + 1].innerHTML =
      team[i].pointsDif
    document
      .getElementsByClassName('poolDTable')[0]
      .getElementsByClassName('teamBonusPoints')[i + 1].innerHTML =
      team[i].bonusPoints
    document
      .getElementsByClassName('poolDTable')[0]
      .getElementsByClassName('teamPoints')[i + 1].innerHTML = team[i].points
  }
}

addToPoolATable(poolAArray)

addToPoolBTable(poolBArray)

addToPoolCTable(poolCArray)

addToPoolDTable(poolDArray)
