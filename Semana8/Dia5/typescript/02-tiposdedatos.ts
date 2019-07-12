let micadena:string = "una cadena";
micadena = "otra cadena";
let miNumero:number = 15.63;
miNumero = 86;
let miAny:any = true; //any puede ser cualquier tipo de dato
miAny = "Hola";
miAny = 96.36;

//arreglos
let peliculas:Array<string> = [];
let numeros:number[] = [];
let multidato:Array<any> = [];

// bidatos
let alfanumerico:number|string = "";

// definir tipo de dato
type stringBool = string|boolean;
let miCadenaVerdadera:stringBool = "";
