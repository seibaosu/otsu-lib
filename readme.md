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
    
    > `username` : `string`
  ```
  await bot.user_id('username');
  ```

* GET ACCOUNT DETAILS
  
  * Params :
    
    > `username` : `string`
  ```
  await bot.user_data('username');
  ```

* GET TOP 100 PLAYS
  
  * Params :
    
    > `username` : `string` <br>
    > `mode` : `number` - *optional* `default` : `0` [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
  ```
  await bot.user_best_plays(username);
  ```

* GET LAST 24 HOURS PLAYS
  
  * Params :
    
    > `username` : `string` <br>
    > `mode` : `number` - *optional* `default` : `0` [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
  ```
  await bot.user_recent_play(username);
  ```

* GET FIRST PLACE BY USER
  
  * Params :
    
    > `username` : `string` <br>
    > `mode` : `number` - *optional* `default` : `0` [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
  ```
  await bot.user_first_place(username);
  ```

* GET LATEST BEATMAP RANKED & LOVED
  
  ```
  await bot.beatmap_update();
  ```

* GET LEADERBOARD PERFORMANCE
  
  * Params :
    
    > `mode` : `number` - *optional* `default` : `0` [ 0: osu!  1:Taiko  2:Catch  3:Mania ]
  ```
  await bot.rank_performance(mode);
  ```