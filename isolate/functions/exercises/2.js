'use strict';

function scramble(param1, param2, param3) {
	const result = param1 + param3 + param2;
	return result;
}

const arg1 = 'b';
const arg2 = 'a';
const arg3 = 'c';
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === 'bca';
console.assert(isTrue1, 'Assertion 1');

const arg4 = 'c';
const arg5 = 'b';
const arg6 = 'a';
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === 'cab';
console.assert(isTrue2, 'Assertion 2');

const arg7 = 'c';
const arg8 = 'b';
const arg9 = 'a';
const returned3 = scramble(arg9, arg7, arg8);
const isTrue3 = returned3 === 'abc';
console.assert(isTrue3, 'Assertion 3');

const arg10 = 'b';
const arg11 = 'a';
const arg12 = 'c';
const returned4 = scramble(arg11, arg12, arg10);
const isTrue4 = returned4 === 'abc';
console.assert(isTrue4, 'Assertion 4');

const arg13 = 'b';
const arg14 = 'c';
const arg15 = 'a';
const returned5 = scramble(arg14, arg15, arg13);
const isTrue5 = returned5 === 'cba';
console.assert(isTrue5, 'Assertion 5');

const arg16 = 'c';
const arg17 = 'a';
const arg18 = 'b';
const returned6 = scramble(arg17, arg16, arg18);
const isTrue6 = returned6 === 'abc';
console.assert(isTrue6, 'Assertion 6');
