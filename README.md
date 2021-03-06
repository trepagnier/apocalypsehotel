## Apocalypse Hotel

_"Fun fact: You can make any Wikipedia article dystopian by changing it to the past tense."_ - [Paul R (\@lbcyber)](https://twitter.com/lbcyber/status/1115015586243862528)

#### Build

- `yarn`
- `yarn start-app`
- [http://localhost:8020/](http://localhost:8020/)

#### Test

This repo provides unit tests for critical application logic. Integration tests are still a big todo.

- `yarn test`

#### About

The app leverages the Roomkey API for locational search results by proxying the requests through [cors-anywhere](https://cors-anywhere.herokuapp.com/). The content is pulled from Wikipedia using their WikiMedia API and then past-tensified using [this library](https://github.com/migregorio/Tensify/blob/master/tensify.js). The "encampments" listed for each location correspond to the number of hotels there, as told by Roomkey's API.

I wrote a generic Node Express server that didn't end up getting used. I had a notion that I might turn this into an RPG where you roam the shattered earth collecting rail spikes that serve as currency which can be used to rest at the various encampments and recharge your HP. In this case, the backend would be used for persisting user data.

#### TODO

- Write integration tests.
- Add error handling for remote requests.
- Make it a game 🕹️.
- Add dystopian pixel art of dessicated Marriots and Best Westerns strewn across a sorrowful landscape. 😃
