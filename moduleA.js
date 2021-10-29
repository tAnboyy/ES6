console.log('moduleA..'); //to show module imports get hoisted

import {greet as g, obj, hey, GreetMessage} from './moduleB';

obj['fname'] = 'TT';
obj.fname = 'TTT';

hey('Hi there!');

console.log(g);

let gm = new GreetMessage();
gm.greet();