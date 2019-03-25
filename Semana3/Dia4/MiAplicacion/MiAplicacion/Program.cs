using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiAplicacion
{
    class Program
    {
        static void Main(string[] args)
        {
            //int numero;
            //////float flotante = 8.7f;
            ////Console.WriteLine("Ingrese un numero: ");
            ////numero = int.Parse(Console.ReadLine());
            ////if ((numero % 2) == 0){
            ////    Console.WriteLine("es par");
            ////}
            ////else {
            ////    Console.WriteLine("es impar");
            ////}

            ////for (int i = 0; i < 10; i++)
            ////{
            ////    Console.WriteLine("Ingrese un numero: ");
            ////    numero = int.Parse(Console.ReadLine());
            ////    Console.WriteLine("Este numero ingresaste {0}", numero);
            ////}




            //Console.WriteLine("Ingrese un numero: ");
            //numero = int.Parse(Console.ReadLine());
            //double resp = 1;
            //for (int i = numero; i >= 1; i--)
            //{
            //    resp = resp * i;
            //}
            //Console.WriteLine(resp);

            //int[] arreglo;
            //arreglo = new int[10];
            //Console.WriteLine(arreglo.Length);
            //Console.WriteLine(arreglo.Count());

            //for (int i = 0; i < arreglo.Count(); i++)
            //{
            //    Console.WriteLine(arreglo[i]);
            //}

            //int[] arregloDeEnteros = new int[5];
            //for (int i = 0; i < arregloDeEnteros.Length; i++)
            //{
            //    Console.WriteLine("El arreglo tiene {0} en la posicion {1}",arregloDeEnteros[i],i);
            //}


            //int[] arregloNuevo = {1,2,3,4,5,6};
            //for (int i = 0; i < arregloNuevo.Length; i++)
            //{
            //    Console.WriteLine("El arreglo tiene {0} en la posicion {1}", arregloNuevo[i], i);
            //}


            //int[] arreglo1 = { 1, 2, 3, 4, 5, 6 };
            //int variable;
            //for (int i = 0; i < arreglo1.Length/2; i++)
            //{
            //    variable = arreglo1[(arreglo1.Length-1) - i];
            //    arreglo1[(arreglo1.Length - 1) - i] = arreglo1[i];
            //    arreglo1[i] = variable;
            //}

            //foreach (int elemento in arreglo1)
            //{
            //    Console.WriteLine("El arreglo tiene {0} ", elemento);
            //}


            //int fil = int.Parse(Console.ReadLine());
            //int col = int.Parse(Console.ReadLine());

            //int[,] bidimensional = new int[fil, col];
            //// Ó
            ////int[,] segundobidimensional = { {4,6,2,3 },
            ////                                {4,6,2,3 },
            ////                                {4,6,2,3 } };

            //for (int filas = 0; filas < bidimensional.GetLength(0); filas++)
            //{
            //    for (int colum = 0; colum < bidimensional.GetLength(1); colum++)
            //    {
            //        bidimensional[filas, colum] = int.Parse(Console.ReadLine());
            //    }
            //}


            //int[,] arreglodosdimensiones = {{1,2,3,4,5,6 },
            //                                {7,8,9,10,11,12},
            //                                {13,14,15,16,17,18},
            //                                {19,20,21,22,23,24},
            //                                {25,26,27,28,29,30} };

            //int total = 0;
            //int cf = 0;
            //int cc = 0;

            //int fil = int.Parse(Console.ReadLine());
            //int col = int.Parse(Console.ReadLine());

            //for (int i = 0; i < arreglodosdimensiones.GetLength(0)-(fil-1); i++)
            //{
            //        for (int j = 0; j < arreglodosdimensiones.GetLength(1)-(col-1); j++)
            //        {
            //        int par=0;
            //        for (int mi = 0; mi < fil; mi++)
            //        {
            //            for (int mj = 0; mj < col; mj++)
            //            {
            //                par = par + arreglodosdimensiones[i + mi, j + mj];
            //            }
            //        }
            //            if (total < par)
            //                {
            //                    total = par;
            //                    cf = i;
            //                    cc = j;
            //                }
            //        }
            //}

            //Console.WriteLine("La suma mayor es {0}  y esta en  {1}  {2}", total, cf, cc);

            //string cadena = "";
            //for (int i = cf; i < cf+fil; i++)
            //{
            //    for (int j = cc; j < cc+col; j++)
            //    {
            //        cadena = cadena + arreglodosdimensiones[i,j].ToString() + " ";
            //    }
            //    Console.WriteLine(cadena);
            //    cadena = "";
            //}


            //MostrarBienvenida();
            //MostrarBienvenidaConNombre("Ysrael");
            //int n1, n2;
            //n1 = 10;
            //n2 = 5;
            //MostrarMayor(n1, n2);

            //EsPositivo(n1);

            //int[] arregloEnMain = { 1, 2, 3, 4 };
            //ModificarArreglo(arregloEnMain);
            //Console.WriteLine(arregloEnMain[0]);


            //;
            //if (fahrenheitCentigrados(32) > 37)
            //{
            //    Console.WriteLine("Esta enfermo.");
            //}
            //else
            //{
            //    Console.WriteLine("Esta normal.");
            //}


            //trianguloDeNumeros(5);

            //DifMeses(1,3);


            //Gato Mony = new Gato("Michifus");
            ////Mony.NombrarGato("Michifus");
            //Mony.ananiar();
            //Mony.Comer();
            //Mony.Comer();
            //Mony.Comer();
            //Mony.MostrarPeso();


            //Persona per = new Persona("Ysrael",41,'C');



            //int a;
            //Console.WriteLine("Ingresa año");
            //a = Convert.ToInt32(Console.ReadLine());
            //if (a % 4 == 0 && (a % 100 != 0 || a % 400 == 0))
            //{
            //    Console.WriteLine("El año " + a + " Si es bisiesto ");
            //}
            //else
            //{
            //    Console.WriteLine("El año " + a + " No es bisiesto ");
            //}
            //Console.ReadLine();

            //Console.WriteLine(DateTime.Now.ToLongDateString());


            //TrianguloRecto tri = new TrianguloRecto(15, 30);
            //tri.MostrarHipotenusa();


            //int aleatorio;
            Random ran = new Random();
            //for (int i = 0; i < 10; i++)
            //{
            //    aleatorio = ran.Next(136, 197 + 1);
            //    Console.WriteLine(aleatorio);
            //}

            string cadena1 = "yo estudio en tecsup/yo estudio en la cato/yo estudio codigo";
            string cadena2 = "Juan/Maria/Ronald/Jimmy";
            string cadena3 = "estudiar/comer/pegar";

            string[] cadena11 = cadena1.Split('/');
            string[] cadena22 = cadena2.Split('/');
            string[] cadena33 = cadena3.Split('/');

            string devolver = "";

            for (int i = 0; i < 3; i++)
            {
                int linea = ran.Next(1, 4);
                switch (i+1)
                {
                    case 1:
                        linea = ran.Next(0,cadena11.Length);
                        devolver = devolver + cadena11[linea] + " ";
                        break;
                    case 2:
                    linea = ran.Next(0, cadena22.Length);
                        devolver = devolver + cadena22[linea] + " ";
                        break;
                    default:
                        linea = ran.Next(0, cadena33.Length);
                        devolver = devolver + cadena33[linea] + " ";
                        break;
                }
               
            }

            Console.WriteLine(devolver);

            Console.ReadKey();
        }









        static void MostrarBienvenida()
        {
            Console.WriteLine("Bienvenido a la función.");
        }

        static void MostrarBienvenidaConNombre(string nombre)
        {
            Console.WriteLine("Bienvenido {0}", nombre);
        }

        static void MostrarMayor(int numero1, int numero2 = 10) {
            if (numero1 > numero2)
                Console.WriteLine("El primer numero es mayor.");
            else
                Console.WriteLine("El segundo numero es mayor.");
        }

        static void EsPositivo(int numero1)
        {
            if (numero1 >= 0)
                Console.WriteLine("Es positivo.");
            else
                Console.WriteLine("Es negativo.");
        }


        static void ModificarArreglo(int[] arregloModificado)
        {
            arregloModificado[0] = 999999;
        }


        static void SumarNumero(params int[] numeros)  ///El params solo funciona con arreglos. (al parecer)
        {
            int resultado = 0;
            foreach (var item in numeros)
            {
                resultado += item;
            }
            Console.WriteLine(resultado);
        }

        static float fahrenheitCentigrados(float Temperatura)
        {
            float newtemp;
            newtemp = ((Temperatura - 32) * 5/9);
            //if (newtemp > 37)
            //{
            //    Console.WriteLine("Esta enfermo.");
            //}
            //else
            //{
            //    Console.WriteLine("Esta normal.");
            //}
            return newtemp;
        }

        static void trianguloDeNumeros(int numero) {
            for (int i = 1; i < numero; i++)
            {
                trianguloDeNumerosMensaje(i);
                Console.WriteLine();
            }

            for (int i = numero; i >= 1; i--)
            {
                trianguloDeNumerosMensaje(i);
                Console.WriteLine();
            }
        }

        static void trianguloDeNumerosMensaje(int Fin)
        {
                for (int j = 1; j <= Fin; j++)
                {
                    Console.Write(j);
                }
        }


        static void DifMeses(int n1, int n2)
        {
            DateTimeFormatInfo dat;
            dat = new DateTimeFormatInfo();
            Console.WriteLine("La diferencia entre {0} y {1} es {2} meses.", dat.GetMonthName(n1), dat.GetMonthName(n2), n2-n1);
           
        }

       
        
        
        
    }

    class Gato
    {
        string nombre;
        float peso;
        float altura;
        string color;

        public Gato(string nombre)
        {
            this.nombre = nombre;
            this.peso = 0;
            Console.WriteLine($"Se creo el gato con nombre: {nombre}.");
        }

        public void Comer()
        {
            this.peso++;
        }
        public void ananiar()
        {
            Console.WriteLine($"Te va a doler {nombre}.");
        }

        public void MostrarPeso()
        {
            Console.WriteLine($"El peso va en {peso} kilos.");
        }
    }


    class Persona
    {
        string _nombre;
        int _edad;
        char _estadoCivil;

        public Persona(string nombre, int edad, char estadoCivil)
        {
            this._nombre = nombre;
            this._edad = edad;
            this._estadoCivil = estadoCivil;
            Console.WriteLine($"Se creo la persona con nombre: {nombre}.");
        }

        static void Comer(string comida)
        {
            
        }
        public char EstadoCivil
        {
            get
            {
                return _estadoCivil;
            }
            set
            {
                _estadoCivil = value;
            }
        }


        public void MostrarEstadoCivil()
        {
            Console.WriteLine($"El estado civil es {_estadoCivil} .");
        }
    }


    class TrianguloRecto
    {
        float _lado1;
        float _lado2;

        public TrianguloRecto(float lado1, float lado2)
        {
            this.Lado1 = lado1;
            this.Lado2 = lado1;
        }

        public float Lado1
        {
            get
            {
                return _lado1;
            }
            set
            {
                _lado1 = value;
            }
        }

        public float Lado2
        {
            get
            {
                return _lado2;
            }
            set
            {
                _lado2 = value;
            }
        }
        public void MostrarHipotenusa()
        {
            Console.WriteLine($"La hipotenusa es {Math.Sqrt((Lado1 * Lado1 + Lado2 * Lado2))} .");
        }
    }
}
