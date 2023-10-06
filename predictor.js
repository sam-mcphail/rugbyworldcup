//-------------//
//   Pool A    //
//-------------//
let francePicked = 0
let newZealandPicked = 0
let italyPicked = 0
let uruguayPicked = 0
let namibiaPicked = 0

// FRANCE //
document.getElementById('france').onclick = function () {
  if (francePicked == 0) {
    if (document.getElementById('poolAFirst').innerHTML == '') {
      document.getElementById('poolAFirst').innerHTML = 'France'
      francePicked++
    } else if (document.getElementById('poolASecond').innerHTML == '') {
      document.getElementById('poolASecond').innerHTML = 'France'
      francePicked++
    } else if (document.getElementById('poolAThird').innerHTML == '') {
      document.getElementById('poolAThird').innerHTML = 'France'
      francePicked++
    } else if (document.getElementById('poolAFourth').innerHTML == '') {
      document.getElementById('poolAFourth').innerHTML = 'France'
      francePicked++
    } else if (document.getElementById('poolAFifth').innerHTML == '') {
      document.getElementById('poolAFifth').innerHTML = 'France'
      francePicked++
    }
  }
}

// NEW ZEALAND //
document.getElementById('newZealand').onclick = function () {
  if (newZealandPicked == 0) {
    if (document.getElementById('poolAFirst').innerHTML == '') {
      document.getElementById('poolAFirst').innerHTML = 'New Zealand'
      newZealandPicked++
    } else if (document.getElementById('poolASecond').innerHTML == '') {
      document.getElementById('poolASecond').innerHTML = 'New Zealand'
      newZealandPicked++
    } else if (document.getElementById('poolAThird').innerHTML == '') {
      document.getElementById('poolAThird').innerHTML = 'New Zealand'
      newZealandPicked++
    } else if (document.getElementById('poolAFourth').innerHTML == '') {
      document.getElementById('poolAFourth').innerHTML = 'New Zealand'
      newZealandPicked++
    } else if (document.getElementById('poolAFifth').innerHTML == '') {
      document.getElementById('poolAFifth').innerHTML = 'New Zealand'
      newZealandPicked++
    }
  }
}

// ITALY //
document.getElementById('italy').onclick = function () {
  if (italyPicked == 0) {
    if (document.getElementById('poolAFirst').innerHTML == '') {
      document.getElementById('poolAFirst').innerHTML = 'Italy'
      italyPicked++
    } else if (document.getElementById('poolASecond').innerHTML == '') {
      document.getElementById('poolASecond').innerHTML = 'Italy'
      italyPicked++
    } else if (document.getElementById('poolAThird').innerHTML == '') {
      document.getElementById('poolAThird').innerHTML = 'Italy'
      italyPicked++
    } else if (document.getElementById('poolAFourth').innerHTML == '') {
      document.getElementById('poolAFourth').innerHTML = 'Italy'
      italyPicked++
    } else if (document.getElementById('poolAFifth').innerHTML == '') {
      document.getElementById('poolAFifth').innerHTML = 'Italy'
      italyPicked++
    }
  }
}

// URUGUAY //
document.getElementById('uruguay').onclick = function () {
  if (uruguayPicked == 0) {
    if (document.getElementById('poolAFirst').innerHTML == '') {
      document.getElementById('poolAFirst').innerHTML = 'Uruguay'
      uruguayPicked++
    } else if (document.getElementById('poolASecond').innerHTML == '') {
      document.getElementById('poolASecond').innerHTML = 'Uruguay'
      uruguayPicked++
    } else if (document.getElementById('poolAThird').innerHTML == '') {
      document.getElementById('poolAThird').innerHTML = 'Uruguay'
      uruguayPicked++
    } else if (document.getElementById('poolAFourth').innerHTML == '') {
      document.getElementById('poolAFourth').innerHTML = 'Uruguay'
      uruguayPicked++
    } else if (document.getElementById('poolAFifth').innerHTML == '') {
      document.getElementById('poolAFifth').innerHTML = 'Uruguay'
      uruguayPicked++
    }
  }
}

// NAMIBIA //
document.getElementById('namibia').onclick = function () {
  if (namibiaPicked == 0) {
    if (document.getElementById('poolAFirst').innerHTML == '') {
      document.getElementById('poolAFirst').innerHTML = 'Namibia'
      namibiaPicked++
    } else if (document.getElementById('poolASecond').innerHTML == '') {
      document.getElementById('poolASecond').innerHTML = 'Namibia'
      namibiaPicked++
    } else if (document.getElementById('poolAThird').innerHTML == '') {
      document.getElementById('poolAThird').innerHTML = 'Namibia'
      namibiaPicked++
    } else if (document.getElementById('poolAFourth').innerHTML == '') {
      document.getElementById('poolAFourth').innerHTML = 'Namibia'
      namibiaPicked++
    } else if (document.getElementById('poolAFifth').innerHTML == '') {
      document.getElementById('poolAFifth').innerHTML = 'Namibia'
      namibiaPicked++
    }
  }
}

//-------------//
//   Pool B    //
//-------------//

//-------------//
//   Pool C    //
//-------------//

//-------------//
//   Pool D    //
//-------------//

//-------------//
//  Quarter 1  //
//-------------//
document.getElementById('qf1a').onclick = function () {
  document.getElementById('sf1a').innerHTML =
    document.getElementById('qf1a').innerHTML
}

document.getElementById('qf1b').onclick = function () {
  document.getElementById('sf1a').innerHTML =
    document.getElementById('qf1b').innerHTML
}

//-------------//
//  Quarter 2  //
//-------------//
document.getElementById('qf2a').onclick = function () {
  document.getElementById('sf1b').innerHTML =
    document.getElementById('qf2a').innerHTML
}

document.getElementById('qf2b').onclick = function () {
  document.getElementById('sf1b').innerHTML =
    document.getElementById('qf2b').innerHTML
}

//-------------//
//  Quarter 3  //
//-------------//
document.getElementById('qf3a').onclick = function () {
  document.getElementById('sf2a').innerHTML =
    document.getElementById('qf3a').innerHTML
}

document.getElementById('qf3b').onclick = function () {
  document.getElementById('sf2a').innerHTML =
    document.getElementById('qf3b').innerHTML
}

//-------------//
//  Quarter 4  //
//-------------//
document.getElementById('qf4a').onclick = function () {
  document.getElementById('sf2b').innerHTML =
    document.getElementById('qf4a').innerHTML
}

document.getElementById('qf4b').onclick = function () {
  document.getElementById('sf2b').innerHTML =
    document.getElementById('qf4b').innerHTML
}

//-------------//
//   Semi 1    //
//-------------//
document.getElementById('sf1a').onclick = function () {
  document.getElementById('gfa').innerHTML =
    document.getElementById('sf1a').innerHTML
  document.getElementById('bfa').innerHTML =
    document.getElementById('sf1b').innerHTML
}

document.getElementById('sf1b').onclick = function () {
  document.getElementById('gfa').innerHTML =
    document.getElementById('sf1b').innerHTML
  document.getElementById('bfa').innerHTML =
    document.getElementById('sf1a').innerHTML
}

//-------------//
//   Semi 2    //
//-------------//
document.getElementById('sf2a').onclick = function () {
  document.getElementById('gfb').innerHTML =
    document.getElementById('sf2a').innerHTML
  document.getElementById('bfb').innerHTML =
    document.getElementById('sf2b').innerHTML
}

document.getElementById('sf2b').onclick = function () {
  document.getElementById('gfb').innerHTML =
    document.getElementById('sf2b').innerHTML
  document.getElementById('bfb').innerHTML =
    document.getElementById('sf2a').innerHTML
}

//-------------//
//   Bronze    //
//-------------//
document.getElementById('bfa').onclick = function () {
  document.getElementById('third').innerHTML =
    document.getElementById('bfa').innerHTML
}

document.getElementById('bfb').onclick = function () {
  document.getElementById('third').innerHTML =
    document.getElementById('bfb').innerHTML
}

//-------------//
//    Final    //
//-------------//
document.getElementById('gfa').onclick = function () {
  document.getElementById('winner').innerHTML =
    document.getElementById('gfa').innerHTML
}

document.getElementById('gfb').onclick = function () {
  document.getElementById('winner').innerHTML =
    document.getElementById('gfb').innerHTML
}
