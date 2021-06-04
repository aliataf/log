
# Log

> Fast way to destinct your variables logged


## Motivation 

I always find my self writing `console.log` statements with the name of the variable for example:

```js
let language = 'Javascript';
console.log('language', language);
```

So in order to save time, I created this little package that logs the name of the variable automatically.

## Installation 

Install with [npm](https://www.npmjs.com/package/@aliataf/log):

```bash
npm install --save @aliataf/log
```

## Usage

```javascript
import log from '@aliataf/log';

const firstName = 'Ali';
const lastName = 'Ataf';
const language = 'Javascript';

log({ language });
/* =>
    language = Javascript
*/

log({ firstName, lastName });

/* =>
    firstName = Ali
    lastName = Ataf
*/
```

  
## License

[MIT](https://github.com/aliataf/log/blob/main/LICENSE) © [Ali Ataf](https://github.com/aliataf)


