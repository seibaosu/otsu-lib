![otsu-lib](https://socialify.git.ci/seibaosu/otsu-lib/image?description=1&font=KoHo&forks=1&issues=1&logo=https%3A%2F%2Fi.ibb.co%2FStxFTCx%2F20230910-205116-0000-removebg-preview.png&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark)

## Installation

To use this module , you just need to install using npm 
```
npm install otsu-lib
```

## Quick start

To import module , you can use `require()` .
```
const { Otsu } = require('otsu-lib');
const bot = new Otsu();
```

## API References

* GET USER ID OF ACCOUNTS
  
  * Params :
    
    > Required ➤ `username` : `string`
  ```
  await bot.user_id('username');
  ```

* GET ACCOUNT DETAILS
  
  * Params :
    
    > Required ➤ `username` : `string`
  ```
  await bot.user_data('username');
  ```

* GET TOP 100 PLAYS
  
  * Params :
    
    > Required ➤ `username` : `string` <br>
    > Optional ➤ `mode` : `number` - `default` : `0` *[ 0: osu!  1:Taiko  2:Catch  3:Mania ]*
  ```
  await bot.user_best_plays(username, mode);
  ```

* GET LAST 24 HOURS PLAYS
  
  * Params :
    
    > Required ➤ `username` : `string` <br>
    > Optional ➤ `mode` : `number` - `default` : `0` *[ 0: osu!  1:Taiko  2:Catch  3:Mania ]*
  ```
  await bot.user_recent_play(username, mode);
  ```

* GET FIRST PLACE BY USER
  
  * Params :
    
    > Required ➤ `username` : `string` <br>
    > Optional ➤ `mode` : `number` - `default` : `0` *[ 0: osu!  1:Taiko  2:Catch  3:Mania ]*
  ```
  await bot.user_first_place(username, mode);
  ```

* GET LATEST BEATMAP RANKED & LOVED
  
  ```
  await bot.beatmap_update();
  ```

* GET LEADERBOARD PERFORMANCE
  
  * Params :
    
    > Optional ➤ `mode` : `number` - `default` : `0` *[ 0:osu!  1:Taiko  2:Catch  3:Mania ]* <br>
    > Optional ➤ `country`: `string` - `default`: `all` <br>
    > Optional ➤ `variant`: `number` - `default`: `all` *[ 0:all 1:4K 2:7K ]*

  <details>
    <summary>Country code</summary>

    ```
    AD:Andorra
    AE:United Arab Emirates
    AF:Afghanistan
    AG:Antigua and Barbuda
    AI:Anguilla
    AL:Albania
    AM:Armenia
    AN:Netherlands Antilles
    AO:Angola
    AP:Asia/Pacific Region
    AR:Argentina
    AS:American Samoa
    AT:Austria
    AU:Australia
    AW:Aruba
    AX:Aland Islands
    AZ:Azerbaijan
    BA:Bosnia and Herzegovina
    BB:Barbados
    BD:Bangladesh
    BE:Belgium
    BF:Burkina Faso
    BG:Bulgaria
    BH:Bahrain
    BI:Burundi
    BJ:Benin
    BL:Saint Barthelemy
    BM:Bermuda
    BN:Brunei
    BO:Bolivia
    BQ:Caribbean Netherlands
    BR:Brazil
    BS:Bahamas
    BT:Bhutan
    BV:Bouvet Island
    BW:Botswana
    BY:Belarus
    BZ:Belize
    CA:Canada
    CC:Cocos (Keeling) Islands
    CD:The Democratic Republic of the Congo
    CF:Central African Republic
    CG:Congo
    CH:Switzerland
    CI:Cote D'Ivoire
    CK:Cook Islands
    CL:Chile
    CM:Cameroon
    CN:China
    CO:Colombia
    CR:Costa Rica
    CU:Cuba
    CV:Cabo Verde
    CW:Curaçao
    CX:Christmas Island
    CY:Cyprus
    CZ:Czechia
    DE:Germany
    DJ:Djibouti
    DK:Denmark
    DM:Dominica
    DO:Dominican Republic
    DZ:Algeria
    EC:Ecuador
    EE:Estonia
    EG:Egypt
    ER:Eritrea
    ES:Spain
    ET:Ethiopia
    EU:Europe
    FI:Finland
    FJ:Fiji
    FK:Falkland Islands (Malvinas)
    FM:Federated States of Micronesia
    FO:Faroe Islands
    FR:France
    GA:Gabon
    GB:United Kingdom
    GD:Grenada
    GE:Georgia
    GF:French Guiana
    GG:Guernsey
    GH:Ghana
    GI:Gibraltar
    GL:Greenland
    GM:Gambia
    GN:Guinea
    GP:Guadeloupe
    GQ:Equatorial Guinea
    GR:Greece
    GT:Guatemala
    GU:Guam
    GW:Guinea-Bissau
    GY:Guyana
    HK:Hong Kong
    HN:Honduras
    HR:Croatia
    HT:Haiti
    HU:Hungary
    ID:Indonesia
    IE:Ireland
    IL:Israel
    IM:Isle of Man
    IN:India
    IO:British Indian Ocean Territory
    IQ:Iraq
    IR:Islamic Republic of Iran
    IS:Iceland
    IT:Italy
    JE:Jersey
    JM:Jamaica
    JO:Jordan
    JP:Japan
    KE:Kenya
    KG:Kyrgyzstan
    KH:Cambodia
    KI:Kiribati
    KM:Comoros
    KN:Saint Kitts and Nevis
    KR:South Korea
    KW:Kuwait
    KY:Cayman Islands
    KZ:Kazakhstan
    LA:Lao People's Democratic Republic
    LB:Lebanon
    LC:Saint Lucia
    LI:Liechtenstein
    LK:Sri Lanka
    LR:Liberia
    LS:Lesotho
    LT:Lithuania
    LU:Luxembourg
    LV:Latvia
    LY:Libya
    MA:Morocco
    MC:Monaco
    MD:Moldova
    ME:Montenegro
    MF:Saint Martin
    MG:Madagascar
    MH:Marshall Islands
    MK:North Macedonia
    ML:Mali
    MM:Myanmar
    MN:Mongolia
    MO:Macau
    MP:Northern Mariana Islands
    MQ:Martinique
    MR:Mauritania
    MS:Montserrat
    MT:Malta
    MU:Mauritius
    MV:Maldives
    MW:Malawi
    MX:Mexico
    MY:Malaysia
    MZ:Mozambique
    NA:Namibia
    NC:New Caledonia
    NE:Niger
    NF:Norfolk Island
    NG:Nigeria
    NI:Nicaragua
    NL:Netherlands
    NO:Norway
    NP:Nepal
    NR:Nauru
    NU:Niue
    NZ:New Zealand
    OM:Oman
    PA:Panama
    PE:Peru
    PF:French Polynesia
    PG:Papua New Guinea
    PH:Philippines
    PK:Pakistan
    PL:Poland
    PM:Saint Pierre and Miquelon
    PN:Pitcairn
    PR:Puerto Rico
    PS:State of Palestine
    PT:Portugal
    PW:Palau
    PY:Paraguay
    QA:Qatar
    RE:Reunion
    RO:Romania
    RS:Serbia
    RU:Russian Federation
    RW:Rwanda
    SA:Saudi Arabia
    SB:Solomon Islands
    SC:Seychelles
    SD:Sudan
    SE:Sweden
    SG:Singapore
    SI:Slovenia
    SJ:Svalbard and Jan Mayen
    SK:Slovakia
    SL:Sierra Leone
    SM:San Marino
    SN:Senegal
    SO:Somalia
    SR:Suriname
    ST:Sao Tome and Principe
    SV:El Salvador
    SX:Sint Maarten
    SY:Syrian Arab Republic
    SZ:Eswatini
    TC:Turks and Caicos Islands
    TD:Chad
    TG:Togo
    TH:Thailand
    TJ:Tajikistan
    TK:Tokelau
    TL:Timor-Leste
    TM:Turkmenistan
    TN:Tunisia
    TO:Tonga
    TR:Türkiye
    TT:Trinidad and Tobago
    TV:Tuvalu
    TW:Taiwan
    TZ:United Republic of Tanzania
    UA:Ukraine
    UG:Uganda
    US:United States
    UY:Uruguay
    UZ:Uzbekistan
    VC:Saint Vincent and the Grenadines
    VE:Venezuela
    VG:Virgin Islands, British
    VI:Virgin Islands, U.S.
    VN:Vietnam
    VU:Vanuatu
    WF:Wallis and Futuna
    WS:Samoa
    XK:Kosovo
    YE:Yemen
    YT:Mayotte
    ZA:South Africa
    ZM:Zambia
    ZW:Zimbabwe

    ```
  </details>

  ```
  await bot.rank_performance(mode, country, variant);
  ```
