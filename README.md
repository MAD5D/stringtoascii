
# stringtoascii (from MAD5D)


Convert a string to an ASCII draw [node.js]

## Installation

``` bash
	$ npm install @mad5d/stringtoascii
```

## Usage

``` javascript
	const stringtoascii= require('@mad5d/stringtoascii');
	
	//Only "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_0123456789" work for the moment
	console.log(stringtoascii.bigmoneyne("MAD5D").toASCII());
```

### Result

``` shell
 /$$      /$$  /$$$$$$  /$$$$$$$  /$$$$$$$  /$$$$$$$
| $$$    /$$$ /$$__  $$| $$__  $$| $$____/ | $$__  $$
| $$$$  /$$$$| $$  \ $$| $$  \ $$| $$      | $$  \ $$
| $$ $$/$$ $$| $$$$$$$$| $$  | $$| $$$$$$$ | $$  | $$
| $$  $$$| $$| $$__  $$| $$  | $$|_____  $$| $$  | $$
| $$\  $ | $$| $$  | $$| $$  | $$ /$$  \ $$| $$  | $$
| $$ \/  | $$| $$  | $$| $$$$$$$/|  $$$$$$/| $$$$$$$/
|__/     |__/|__/  |__/|_______/  \______/ |_______/

```







## License
Copyright 2021, Marc-Antoine DROUIN.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
