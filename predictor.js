//-------------//
//   Pool A    //
//-------------//
let francePicked = 0
let newZealandPicked = 0
let italyPicked = 0
let uruguayPicked = 0
let namibiaPicked = 0

// RESET BUTTON //
document.getElementById('poolAReset').onclick = function () {
  document.getElementById('poolAFirst').innerHTML = ''
  document.getElementById('poolASecond').innerHTML = ''
  document.getElementById('poolAThird').innerHTML = ''
  document.getElementById('poolAFourth').innerHTML = ''
  document.getElementById('poolAFifth').innerHTML = ''
  francePicked = 0
  newZealandPicked = 0
  italyPicked = 0
  uruguayPicked = 0
  namibiaPicked = 0
}

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
let irelandPicked = 0
let romaniaPicked = 0
let scotlandPicked = 0
let southAfricaPicked = 0
let tongaPicked = 0

// RESET BUTTON //
document.getElementById('poolBReset').onclick = function () {
  document.getElementById('poolBFirst').innerHTML = ''
  document.getElementById('poolBSecond').innerHTML = ''
  document.getElementById('poolBThird').innerHTML = ''
  document.getElementById('poolBFourth').innerHTML = ''
  document.getElementById('poolBFifth').innerHTML = ''
  irelandPicked = 0
  romaniaPicked = 0
  scotlandPicked = 0
  southAfricaPicked = 0
  tongaPicked = 0
}

// IRELAND //
document.getElementById('ireland').onclick = function () {
  if (irelandPicked == 0) {
    if (document.getElementById('poolBFirst').innerHTML == '') {
      document.getElementById('poolBFirst').innerHTML = 'Ireland'
      irelandPicked++
    } else if (document.getElementById('poolBSecond').innerHTML == '') {
      document.getElementById('poolBSecond').innerHTML = 'Ireland'
      irelandPicked++
    } else if (document.getElementById('poolBThird').innerHTML == '') {
      document.getElementById('poolBThird').innerHTML = 'Ireland'
      irelandPicked++
    } else if (document.getElementById('poolBFourth').innerHTML == '') {
      document.getElementById('poolBFourth').innerHTML = 'Ireland'
      irelandPicked++
    } else if (document.getElementById('poolBFifth').innerHTML == '') {
      document.getElementById('poolBFifth').innerHTML = 'Ireland'
      irelandPicked++
    }
  }
}

// ROMANIA //
document.getElementById('romania').onclick = function () {
  if (romaniaPicked == 0) {
    if (document.getElementById('poolBFirst').innerHTML == '') {
      document.getElementById('poolBFirst').innerHTML = 'Romania'
      romaniaPicked++
    } else if (document.getElementById('poolBSecond').innerHTML == '') {
      document.getElementById('poolBSecond').innerHTML = 'Romania'
      romaniaPicked++
    } else if (document.getElementById('poolBThird').innerHTML == '') {
      document.getElementById('poolBThird').innerHTML = 'Romania'
      romaniaPicked++
    } else if (document.getElementById('poolBFourth').innerHTML == '') {
      document.getElementById('poolBFourth').innerHTML = 'Romania'
      romaniaPicked++
    } else if (document.getElementById('poolBFifth').innerHTML == '') {
      document.getElementById('poolBFifth').innerHTML = 'Romania'
      romaniaPicked++
    }
  }
}

// SCOTLAND //
document.getElementById('scotland').onclick = function () {
  if (scotlandPicked == 0) {
    if (document.getElementById('poolBFirst').innerHTML == '') {
      document.getElementById('poolBFirst').innerHTML = 'Scotland'
      scotlandPicked++
    } else if (document.getElementById('poolBSecond').innerHTML == '') {
      document.getElementById('poolBSecond').innerHTML = 'Scotland'
      scotlandPicked++
    } else if (document.getElementById('poolBThird').innerHTML == '') {
      document.getElementById('poolBThird').innerHTML = 'Scotland'
      scotlandPicked++
    } else if (document.getElementById('poolBFourth').innerHTML == '') {
      document.getElementById('poolBFourth').innerHTML = 'Scotland'
      scotlandPicked++
    } else if (document.getElementById('poolBFifth').innerHTML == '') {
      document.getElementById('poolBFifth').innerHTML = 'Scotland'
      scotlandPicked++
    }
  }
}

// SOUTH AFRICA //
document.getElementById('southAfrica').onclick = function () {
  if (southAfricaPicked == 0) {
    if (document.getElementById('poolBFirst').innerHTML == '') {
      document.getElementById('poolBFirst').innerHTML = 'South Africa'
      southAfricaPicked++
    } else if (document.getElementById('poolBSecond').innerHTML == '') {
      document.getElementById('poolBSecond').innerHTML = 'South Africa'
      southAfricaPicked++
    } else if (document.getElementById('poolBThird').innerHTML == '') {
      document.getElementById('poolBThird').innerHTML = 'South Africa'
      southAfricaPicked++
    } else if (document.getElementById('poolBFourth').innerHTML == '') {
      document.getElementById('poolBFourth').innerHTML = 'South Africa'
      southAfricaPicked++
    } else if (document.getElementById('poolBFifth').innerHTML == '') {
      document.getElementById('poolBFifth').innerHTML = 'South Africa'
      southAfricaPicked++
    }
  }
}

// TONGA //
document.getElementById('tonga').onclick = function () {
  if (tongaPicked == 0) {
    if (document.getElementById('poolBFirst').innerHTML == '') {
      document.getElementById('poolBFirst').innerHTML = 'Tonga'
      tongaPicked++
    } else if (document.getElementById('poolBSecond').innerHTML == '') {
      document.getElementById('poolBSecond').innerHTML = 'Tonga'
      tongaPicked++
    } else if (document.getElementById('poolBThird').innerHTML == '') {
      document.getElementById('poolBThird').innerHTML = 'Tonga'
      tongaPicked++
    } else if (document.getElementById('poolBFourth').innerHTML == '') {
      document.getElementById('poolBFourth').innerHTML = 'Tonga'
      tongaPicked++
    } else if (document.getElementById('poolBFifth').innerHTML == '') {
      document.getElementById('poolBFifth').innerHTML = 'Tonga'
      tongaPicked++
    }
  }
}

//-------------//
//   Pool C    //
//-------------//
let australiaPicked = 0
let fijiPicked = 0
let georgiaPicked = 0
let portugalPicked = 0
let walesPicked = 0

// RESET BUTTON //
document.getElementById('poolCReset').onclick = function () {
  document.getElementById('poolCFirst').innerHTML = ''
  document.getElementById('poolCSecond').innerHTML = ''
  document.getElementById('poolCThird').innerHTML = ''
  document.getElementById('poolCFourth').innerHTML = ''
  document.getElementById('poolCFifth').innerHTML = ''
  australiaPicked = 0
  fijiPicked = 0
  georgiaPicked = 0
  portugalPicked = 0
  walesPicked = 0
}

// AUSTRALIA //
document.getElementById('australia').onclick = function () {
  if (australiaPicked == 0) {
    if (document.getElementById('poolCFirst').innerHTML == '') {
      document.getElementById('poolCFirst').innerHTML = 'Australia'
      australiaPicked++
    } else if (document.getElementById('poolCSecond').innerHTML == '') {
      document.getElementById('poolCSecond').innerHTML = 'Australia'
      australiaPicked++
    } else if (document.getElementById('poolCThird').innerHTML == '') {
      document.getElementById('poolCThird').innerHTML = 'Australia'
      australiaPicked++
    } else if (document.getElementById('poolCFourth').innerHTML == '') {
      document.getElementById('poolCFourth').innerHTML = 'Australia'
      australiaPicked++
    } else if (document.getElementById('poolCFifth').innerHTML == '') {
      document.getElementById('poolCFifth').innerHTML = 'Australia'
      australiaPicked++
    }
  }
}

// FIJI //
document.getElementById('fiji').onclick = function () {
  if (fijiPicked == 0) {
    if (document.getElementById('poolCFirst').innerHTML == '') {
      document.getElementById('poolCFirst').innerHTML = 'Fiji'
      fijiPicked++
    } else if (document.getElementById('poolCSecond').innerHTML == '') {
      document.getElementById('poolCSecond').innerHTML = 'Fiji'
      fijiPicked++
    } else if (document.getElementById('poolCThird').innerHTML == '') {
      document.getElementById('poolCThird').innerHTML = 'Fiji'
      fijiPicked++
    } else if (document.getElementById('poolCFourth').innerHTML == '') {
      document.getElementById('poolCFourth').innerHTML = 'Fiji'
      fijiPicked++
    } else if (document.getElementById('poolCFifth').innerHTML == '') {
      document.getElementById('poolCFifth').innerHTML = 'Fiji'
      fijiPicked++
    }
  }
}

// GEORGIA //
document.getElementById('georgia').onclick = function () {
  if (georgiaPicked == 0) {
    if (document.getElementById('poolCFirst').innerHTML == '') {
      document.getElementById('poolCFirst').innerHTML = 'Georgia'
      georgiaPicked++
    } else if (document.getElementById('poolCSecond').innerHTML == '') {
      document.getElementById('poolCSecond').innerHTML = 'Georgia'
      georgiaPicked++
    } else if (document.getElementById('poolCThird').innerHTML == '') {
      document.getElementById('poolCThird').innerHTML = 'Georgia'
      georgiaPicked++
    } else if (document.getElementById('poolCFourth').innerHTML == '') {
      document.getElementById('poolCFourth').innerHTML = 'Georgia'
      georgiaPicked++
    } else if (document.getElementById('poolCFifth').innerHTML == '') {
      document.getElementById('poolCFifth').innerHTML = 'Georgia'
      georgiaPicked++
    }
  }
}

// PORTUGAL //
document.getElementById('portugal').onclick = function () {
  if (portugalPicked == 0) {
    if (document.getElementById('poolCFirst').innerHTML == '') {
      document.getElementById('poolCFirst').innerHTML = 'Portugal'
      portugalPicked++
    } else if (document.getElementById('poolCSecond').innerHTML == '') {
      document.getElementById('poolCSecond').innerHTML = 'Portugal'
      portugalPicked++
    } else if (document.getElementById('poolCThird').innerHTML == '') {
      document.getElementById('poolCThird').innerHTML = 'Portugal'
      portugalPicked++
    } else if (document.getElementById('poolCFourth').innerHTML == '') {
      document.getElementById('poolCFourth').innerHTML = 'Portugal'
      portugalPicked++
    } else if (document.getElementById('poolCFifth').innerHTML == '') {
      document.getElementById('poolCFifth').innerHTML = 'Portugal'
      portugalPicked++
    }
  }
}

// WALES //
document.getElementById('wales').onclick = function () {
  if (walesPicked == 0) {
    if (document.getElementById('poolCFirst').innerHTML == '') {
      document.getElementById('poolCFirst').innerHTML = 'Wales'
      walesPicked++
    } else if (document.getElementById('poolCSecond').innerHTML == '') {
      document.getElementById('poolCSecond').innerHTML = 'Wales'
      walesPicked++
    } else if (document.getElementById('poolCThird').innerHTML == '') {
      document.getElementById('poolCThird').innerHTML = 'Wales'
      walesPicked++
    } else if (document.getElementById('poolCFourth').innerHTML == '') {
      document.getElementById('poolCFourth').innerHTML = 'Wales'
      walesPicked++
    } else if (document.getElementById('poolCFifth').innerHTML == '') {
      document.getElementById('poolCFifth').innerHTML = 'Wales'
      walesPicked++
    }
  }
}

//-------------//
//   Pool D    //
//-------------//
let argentinaPicked = 0
let chilePicked = 0
let englandPicked = 0
let japanPicked = 0
let samoaPicked = 0

// RESET BUTTON //
document.getElementById('poolDReset').onclick = function () {
  document.getElementById('poolDFirst').innerHTML = ''
  document.getElementById('poolDSecond').innerHTML = ''
  document.getElementById('poolDThird').innerHTML = ''
  document.getElementById('poolDFourth').innerHTML = ''
  document.getElementById('poolDFifth').innerHTML = ''
  argentinaPicked = 0
  chilePicked = 0
  englandPicked = 0
  japanPicked = 0
  samoaPicked = 0
}

// ARGENTINA //
document.getElementById('argentina').onclick = function () {
  if (argentinaPicked == 0) {
    if (document.getElementById('poolDFirst').innerHTML == '') {
      document.getElementById('poolDFirst').innerHTML = 'Argentina'
      argentinaPicked++
    } else if (document.getElementById('poolDSecond').innerHTML == '') {
      document.getElementById('poolDSecond').innerHTML = 'Argentina'
      argentinaPicked++
    } else if (document.getElementById('poolDThird').innerHTML == '') {
      document.getElementById('poolDThird').innerHTML = 'Argentina'
      argentinaPicked++
    } else if (document.getElementById('poolDFourth').innerHTML == '') {
      document.getElementById('poolDFourth').innerHTML = 'Argentina'
      argentinaPicked++
    } else if (document.getElementById('poolDFifth').innerHTML == '') {
      document.getElementById('poolDFifth').innerHTML = 'Argentina'
      argentinaPicked++
    }
  }
}

// CHILE //
document.getElementById('chile').onclick = function () {
  if (chilePicked == 0) {
    if (document.getElementById('poolDFirst').innerHTML == '') {
      document.getElementById('poolDFirst').innerHTML = 'Chile'
      chilePicked++
    } else if (document.getElementById('poolDSecond').innerHTML == '') {
      document.getElementById('poolDSecond').innerHTML = 'Chile'
      chilePicked++
    } else if (document.getElementById('poolDThird').innerHTML == '') {
      document.getElementById('poolDThird').innerHTML = 'Chile'
      chilePicked++
    } else if (document.getElementById('poolDFourth').innerHTML == '') {
      document.getElementById('poolDFourth').innerHTML = 'Chile'
      chilePicked++
    } else if (document.getElementById('poolDFifth').innerHTML == '') {
      document.getElementById('poolDFifth').innerHTML = 'Chile'
      chilePicked++
    }
  }
}

// ENGLAND //
document.getElementById('england').onclick = function () {
  if (englandPicked == 0) {
    if (document.getElementById('poolDFirst').innerHTML == '') {
      document.getElementById('poolDFirst').innerHTML = 'England'
      englandPicked++
    } else if (document.getElementById('poolDSecond').innerHTML == '') {
      document.getElementById('poolDSecond').innerHTML = 'England'
      englandPicked++
    } else if (document.getElementById('poolDThird').innerHTML == '') {
      document.getElementById('poolDThird').innerHTML = 'England'
      englandPicked++
    } else if (document.getElementById('poolDFourth').innerHTML == '') {
      document.getElementById('poolDFourth').innerHTML = 'England'
      englandPicked++
    } else if (document.getElementById('poolDFifth').innerHTML == '') {
      document.getElementById('poolDFifth').innerHTML = 'England'
      englandPicked++
    }
  }
}

// JAPAN //
document.getElementById('japan').onclick = function () {
  if (japanPicked == 0) {
    if (document.getElementById('poolDFirst').innerHTML == '') {
      document.getElementById('poolDFirst').innerHTML = 'Japan'
      japanPicked++
    } else if (document.getElementById('poolDSecond').innerHTML == '') {
      document.getElementById('poolDSecond').innerHTML = 'Japan'
      japanPicked++
    } else if (document.getElementById('poolDThird').innerHTML == '') {
      document.getElementById('poolDThird').innerHTML = 'Japan'
      japanPicked++
    } else if (document.getElementById('poolDFourth').innerHTML == '') {
      document.getElementById('poolDFourth').innerHTML = 'Japan'
      japanPicked++
    } else if (document.getElementById('poolDFifth').innerHTML == '') {
      document.getElementById('poolDFifth').innerHTML = 'Japan'
      japanPicked++
    }
  }
}

// SAMOA //
document.getElementById('samoa').onclick = function () {
  if (samoaPicked == 0) {
    if (document.getElementById('poolDFirst').innerHTML == '') {
      document.getElementById('poolDFirst').innerHTML = 'Samoa'
      samoaPicked++
    } else if (document.getElementById('poolDSecond').innerHTML == '') {
      document.getElementById('poolDSecond').innerHTML = 'Samoa'
      samoaPicked++
    } else if (document.getElementById('poolDThird').innerHTML == '') {
      document.getElementById('poolDThird').innerHTML = 'Samoa'
      samoaPicked++
    } else if (document.getElementById('poolDFourth').innerHTML == '') {
      document.getElementById('poolDFourth').innerHTML = 'Samoa'
      samoaPicked++
    } else if (document.getElementById('poolDFifth').innerHTML == '') {
      document.getElementById('poolDFifth').innerHTML = 'Samoa'
      samoaPicked++
    }
  }
}

//-------------//
//  Quarter 1  //
//-------------//

// QF1A //
document.getElementById('qf1a').onclick = function () {
  document.getElementById('sf1a').innerHTML =
    document.getElementById('qf1a').innerHTML
}

// QF1B //
document.getElementById('qf1b').onclick = function () {
  document.getElementById('sf1a').innerHTML =
    document.getElementById('qf1b').innerHTML
}

//-------------//
//  Quarter 2  //
//-------------//

// QF2A //
document.getElementById('qf2a').onclick = function () {
  document.getElementById('sf1b').innerHTML =
    document.getElementById('qf2a').innerHTML
}

// QF2B //
document.getElementById('qf2b').onclick = function () {
  document.getElementById('sf1b').innerHTML =
    document.getElementById('qf2b').innerHTML
}

//-------------//
//  Quarter 3  //
//-------------//

// QF3A //
document.getElementById('qf3a').onclick = function () {
  document.getElementById('sf2a').innerHTML =
    document.getElementById('qf3a').innerHTML
}

// QF3B //
document.getElementById('qf3b').onclick = function () {
  document.getElementById('sf2a').innerHTML =
    document.getElementById('qf3b').innerHTML
}

//-------------//
//  Quarter 4  //
//-------------//

// QF4A //
document.getElementById('qf4a').onclick = function () {
  document.getElementById('sf2b').innerHTML =
    document.getElementById('qf4a').innerHTML
}

// QF4B //
document.getElementById('qf4b').onclick = function () {
  document.getElementById('sf2b').innerHTML =
    document.getElementById('qf4b').innerHTML
}

//-------------//
//   Semi 1    //
//-------------//

// SF1A //
document.getElementById('sf1a').onclick = function () {
  document.getElementById('gfa').innerHTML =
    document.getElementById('sf1a').innerHTML
  document.getElementById('bfa').innerHTML =
    document.getElementById('sf1b').innerHTML
}

// SF1B //
document.getElementById('sf1b').onclick = function () {
  document.getElementById('gfa').innerHTML =
    document.getElementById('sf1b').innerHTML
  document.getElementById('bfa').innerHTML =
    document.getElementById('sf1a').innerHTML
}

//-------------//
//   Semi 2    //
//-------------//

// SF2A //
document.getElementById('sf2a').onclick = function () {
  document.getElementById('gfb').innerHTML =
    document.getElementById('sf2a').innerHTML
  document.getElementById('bfb').innerHTML =
    document.getElementById('sf2b').innerHTML
}

// SF2B //
document.getElementById('sf2b').onclick = function () {
  document.getElementById('gfb').innerHTML =
    document.getElementById('sf2b').innerHTML
  document.getElementById('bfb').innerHTML =
    document.getElementById('sf2a').innerHTML
}

//-------------//
//   Bronze    //
//-------------//

// BFA //
document.getElementById('bfa').onclick = function () {
  document.getElementById('third').innerHTML =
    document.getElementById('bfa').innerHTML
}

// BFB //
document.getElementById('bfb').onclick = function () {
  document.getElementById('third').innerHTML =
    document.getElementById('bfb').innerHTML
}

//-------------//
//    Final    //
//-------------//

// GFA //
document.getElementById('gfa').onclick = function () {
  document.getElementById('winner').innerHTML =
    document.getElementById('gfa').innerHTML
}

// GFB //
document.getElementById('gfb').onclick = function () {
  document.getElementById('winner').innerHTML =
    document.getElementById('gfb').innerHTML
}

// KNOCKOUT BUTTON //
document.getElementById('knockoutButton').onclick = function () {
  // QF1A //
  document.getElementById('qf1a').innerHTML =
    document.getElementById('poolCFirst').innerHTML
  // QF1B //
  document.getElementById('qf1b').innerHTML =
    document.getElementById('poolDSecond').innerHTML
  // QF2A //
  document.getElementById('qf2a').innerHTML =
    document.getElementById('poolBFirst').innerHTML
  // QF2B //
  document.getElementById('qf2b').innerHTML =
    document.getElementById('poolASecond').innerHTML
  // QF3A //
  document.getElementById('qf3a').innerHTML =
    document.getElementById('poolDFirst').innerHTML
  // QF3B //
  document.getElementById('qf3b').innerHTML =
    document.getElementById('poolCSecond').innerHTML
  // QF4A //
  document.getElementById('qf4a').innerHTML =
    document.getElementById('poolAFirst').innerHTML
  // QF4B //
  document.getElementById('qf4b').innerHTML =
    document.getElementById('poolBSecond').innerHTML
}
