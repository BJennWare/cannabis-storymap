const stateMap = {};

stateMap['AA'] = 'Armed Forces America';
stateMap['AE'] = 'Armed Forces';
stateMap['AP'] = 'Armed Forces Pacific';
stateMap['AK'] = 'Alaska';
stateMap['AL'] = 'Alabama';
stateMap['AR'] = 'Arkansas';
stateMap['AZ'] = 'Arizona';
stateMap['CA'] = 'California';
stateMap['CO'] = 'Colorado';
stateMap['CT'] = 'Connecticut';
stateMap['DC'] = 'District of Columbia';

stateMap['DE'] = 'Delaware';
stateMap['FL'] = 'Florida';
stateMap['GA'] = 'Georgia';
stateMap['GU'] = 'Guam';
stateMap['HI'] = 'Hawaii';
stateMap['IA'] = 'Iowa';
stateMap['ID'] = 'Idaho';
stateMap['IL'] = 'Illinois';
stateMap['IN'] = 'Indiana';
stateMap['KS'] = 'Kansas';
stateMap['KY'] = 'Kentucky';
stateMap['LA'] = 'Louisiana';
stateMap['MA'] = 'Massachusetts';
stateMap['MD'] = 'Maryland';
stateMap['ME'] = 'Maine';
stateMap['MI'] = 'Michigan';
stateMap['MN'] = 'Minnesota';
stateMap['MO'] = 'Missouri';
stateMap['MS'] = 'Mississippi';
stateMap['MT'] = 'Montana';
stateMap['NC'] = 'North Carolina';
stateMap['ND'] = 'North Dakota';
stateMap['NE'] = 'Nebraska';
stateMap['NH'] = 'New Hampshire';
stateMap['NJ'] = 'New Jersey';
stateMap['NM'] = 'New Mexico';
stateMap['NV'] = 'Nevada';
stateMap['NY'] = 'New York';
stateMap['OH'] = 'Ohio';
stateMap['OK'] = 'Oklahoma';
stateMap['OR'] = 'Oregon';
stateMap['PA'] = 'Pennsylvania';
stateMap['PR'] = 'Puerto Rico';
stateMap['RI'] = 'Rhode Island';
stateMap['SC'] = 'South Carolina';
stateMap['SD'] = 'South Dakota';
stateMap['TN'] = 'Tennessee';
stateMap['TX'] = 'Texas';
stateMap['UT'] = 'Utah';
stateMap['VA'] = 'Virginia';
stateMap['VI'] = 'Virgin Islands';
stateMap['VT'] = 'Vermont';
stateMap['WA'] = 'Washington';
stateMap['WI'] = 'Wisconsin';
stateMap['WV'] = 'West Virginia';
stateMap['WY'] = 'Wyoming';

export function resolveStateCode(stateCode){
  return stateMap[stateCode];
}

export function resolveState(state) {
  const keys = Object.keys(stateMap);
  for (let index in keys) {
    if (keys.hasOwnProperty(index)) {
      if (stateMap[keys[index]] === state) {
        return keys[index];
      }
    }
  }

  return '';
}