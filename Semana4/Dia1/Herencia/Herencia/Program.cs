using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Herencia
{
    class Program
    {
        static void Main(string[] args)
        {
            FiguraGeometrica miFigura = new FiguraGeometrica("azul");
            Console.Write(miFigura.Color);
            Circulo objCirculo = new Circulo(3.4,"Rojo");
            Console.Write( objCirculo.obtenerArea());
            
        }
    }

    class FiguraGeometrica
    {
        string _color;
        public FiguraGeometrica(string color)
        {
            this._color = color;
        }

        public string Color
        {
            get
            {
                return _color;
            }

            set
            {
                _color = value;
            }
        }

        public virtual double obtenerArea()
        {
            Console.Write("Area de la figura");
            return 0;
        } 

        public double obtenerPerimetro()
        {
            return 0;
        }
    }

    class Circulo : FiguraGeometrica
    {
        double _radio;
        public Circulo(double radio, string color):  base(color)
        {
            _radio = radio;
        }

        public override double obtenerArea()
        {

            return Math.PI * Math.Pow( _radio,2);
        }

    }
}
