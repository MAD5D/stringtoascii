const char = require('./char.js');

exports.bigmoneyne = bigmoneyne;
function bigmoneyne(string_to_convert = ""){
	this.hauteur_min = 9;
	this.hauteur_max = 9;
	this.largeur_min = 5;
	this.largeur_max = 5;
	this.liste_char_dispo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_0123456789";
	this.list_char = [];
	this.list_char.push(new char.char(10,"  /$$$$$$  /$$__  $$| $$  \\ $$| $$$$$$$$| $$__  $$| $$  | $$| $$  | $$|__/  |__/          "));//A
	this.list_char.push(new char.char(10,' /$$$$$$$ | $$__  $$| $$  \\ $$| $$$$$$$ | $$__  $$| $$  \\ $$| $$$$$$$/|_______/           '));//B
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$| $$  \\__/| $$      | $$      | $$    $$|  $$$$$$/ \\______/           '));//C
	this.list_char.push(new char.char(10,' /$$$$$$$ | $$__  $$| $$  \\ $$| $$  | $$| $$  | $$| $$  | $$| $$$$$$$/|_______/           '));//D
	this.list_char.push(new char.char(10,' /$$$$$$$$| $$_____/| $$      | $$$$$   | $$__/   | $$      | $$$$$$$$|________/          '));//E
	this.list_char.push(new char.char(10,' /$$$$$$$$| $$_____/| $$      | $$$$$   | $$__/   | $$      | $$      |__/                '));//F
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$| $$  \\__/| $$ /$$$$| $$|_  $$| $$  \\ $$|  $$$$$$/ \\______/           '));//G
	this.list_char.push(new char.char(10,' /$$   /$$| $$  | $$| $$  | $$| $$$$$$$$| $$__  $$| $$  | $$| $$  | $$|__/  |__/          '));//H
	this.list_char.push(new char.char(8,' /$$$$$$|_  $$_/  | $$    | $$    | $$    | $$   /$$$$$$|______/        '));//I
	this.list_char.push(new char.char(10,'    /$$$$$   |__  $$      | $$      | $$ /$$  | $$| $$  | $$|  $$$$$$/ \\______/           '));//J
	this.list_char.push(new char.char(10,' /$$   /$$| $$  /$$/| $$ /$$/ | $$$$$/  | $$  $$  | $$\\  $$ | $$ \\  $$|__/  \\__/          '));//K
	this.list_char.push(new char.char(10,' /$$      | $$      | $$      | $$      | $$      | $$      | $$$$$$$$|________/          '));//L
	this.list_char.push(new char.char(13,' /$$      /$$| $$$    /$$$| $$$$  /$$$$| $$ $$/$$ $$| $$  $$$| $$| $$\\  $ | $$| $$ \\/  | $$|__/     |__/             '));//M
	this.list_char.push(new char.char(10,' /$$   /$$| $$$ | $$| $$$$| $$| $$ $$ $$| $$  $$$$| $$\\  $$$| $$ \\  $$|__/  \\__/          '));//N
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$| $$  \\ $$| $$  | $$| $$  | $$| $$  | $$|  $$$$$$/ \\______/           '));//O
	this.list_char.push(new char.char(10,' /$$$$$$$ | $$__  $$| $$  \\ $$| $$$$$$$/| $$____/ | $$      | $$      |__/                '));//P
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$| $$  \\ $$| $$  | $$| $$  | $$| $$/$$ $$|  $$$$$$/ \\____ $$$      \\__/          '));//Q
	this.list_char.push(new char.char(10,' /$$$$$$$ | $$__  $$| $$  \\ $$| $$$$$$$/| $$__  $$| $$  \\ $$| $$  | $$|__/  |__/          '));//R
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$| $$  \\__/|  $$$$$$  \\____  $$ /$$  \\ $$|  $$$$$$/ \\______/           '));//S
	this.list_char.push(new char.char(10,' /$$$$$$$$|__  $$__/   | $$      | $$      | $$      | $$      | $$      |__/             '));//T
	this.list_char.push(new char.char(10,' /$$   /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$|  $$$$$$/ \\______/           '));//U
	this.list_char.push(new char.char(11,' /$$    /$$| $$   | $$| $$   | $$|  $$ / $$/ \\  $$ $$/   \\  $$$/     \\  $/       \\_/               '));//V
	this.list_char.push(new char.char(13,' /$$      /$$| $$  /$ | $$| $$ /$$$| $$| $$/$$ $$ $$| $$$$_  $$$$| $$$/ \\  $$$| $$/   \\  $$|__/     \\__/             '));//W
	this.list_char.push(new char.char(10,' /$$   /$$| $$  / $$|  $$/ $$/ \\  $$$$/   >$$  $$  /$$/\\  $$| $$  \\ $$|__/  |__/          '));//X
	this.list_char.push(new char.char(12,' /$$     /$$|  $$   /$$/ \\  $$ /$$/   \\  $$$$/     \\  $$/       | $$        | $$        |__/                '));//Y
	this.list_char.push(new char.char(10,' /$$$$$$$$|_____ $$      /$$/     /$$/     /$$/     /$$/     /$$$$$$$$|________/          '));//Z
	this.list_char.push(new char.char(8,'                         /$$$$$$|______/                                                        '));//-
	this.list_char.push(new char.char(8,'                                                         /$$$$$$|______/                '));//_
	this.list_char.push(new char.char(10,' /$$$$$$  /$$$_  $$| $$$$\\ $$| $$ $$ $$| $$\\ $$$$| $$ \\ $$$|  $$$$$$/ \\______/           '));//0
	this.list_char.push(new char.char(8,'   /$$   /$$$$  |_  $$    | $$    | $$    | $$   /$$$$$$|______/        '));//1
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$|__/  \ $$  /$$$$$$/ /$$____/ | $$      | $$$$$$$$|________/          '));//2
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$|__/  \\ $$   /$$$$$/  |___  $$ /$$  \\ $$|  $$$$$$/ \\______/           '));//3
	this.list_char.push(new char.char(10,' /$$   /$$| $$  | $$| $$  | $$| $$$$$$$$|_____  $$      | $$      | $$      |__/          '));//4
	this.list_char.push(new char.char(10,' /$$$$$$$ | $$____/ | $$      | $$$$$$$ |_____  $$ /$$  \\ $$|  $$$$$$/ \\______/           '));//5
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$| $$  \\__/| $$$$$$$ | $$__  $$| $$  \\ $$|  $$$$$$/ \\______/           '));//6
	this.list_char.push(new char.char(10,' /$$$$$$$$|_____ $$/     /$$/     /$$/     /$$/     /$$/     /$$/     |__/                '));//7
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$| $$  \\ $$|  $$$$$$/ >$$__  $$| $$  \\ $$|  $$$$$$/ \\______/           '));//8
	this.list_char.push(new char.char(10,'  /$$$$$$  /$$__  $$| $$  \\ $$|  $$$$$$$ \\____  $$ /$$  \\ $$|  $$$$$$/ \\______/           '));//9
	this.string_to_convert = string_to_convert;


	this.set_string_to_convert = function(string_to_convert){
		this.string_to_convert = string_to_convert;
	}

	this.toASCII = function(){
		let chaine_a_afficher = "";
		for(let j = 0;j < this.hauteur_min;j++){
			
			for(let i = 0;i < this.string_to_convert.length;i++){
				let indice = this.liste_char_dispo.indexOf(this.string_to_convert[i]);
				largeur_char = this.list_char[indice].largeur;
				chaine_a_afficher += this.list_char[indice].chaine_descriptif.substr(largeur_char*j,largeur_char);
			}
			chaine_a_afficher += "\n";
		}
		return chaine_a_afficher;
	}
	return this;
}
//lolo.set_string_to_convert("LOL");
//console.log(lolo.toASCII());