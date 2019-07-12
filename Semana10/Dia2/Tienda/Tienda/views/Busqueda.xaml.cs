using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Tienda.views
{
    /// <summary>
    /// Lógica de interacción para Plantilla.xaml
    /// </summary>
    public partial class Busqueda : Window
    {
        TiendaEntities context = new TiendaEntities();
        public string Tipo;


        public Busqueda()
        {
            InitializeComponent();
           
        }

        private void btnCerrar_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

        private void btnMaximizar_Click(object sender, RoutedEventArgs e)
        {
            this.WindowState = WindowState.Maximized;
        }

        private void btnMinimizar_Click(object sender, RoutedEventArgs e)
        {
            this.WindowState = WindowState.Minimized;
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {

            Style rowStyle = new Style(typeof(DataGridRow));
            rowStyle.Setters.Add(new EventSetter(DataGridRow.MouseDoubleClickEvent,
                                     new MouseButtonEventHandler(Row_DoubleClick)));
            dgBusqueda.RowStyle = rowStyle;

            if (Tipo == "persona")
            {
                this.dgBusqueda.ItemsSource = context.Persona.Select(p => new {Codigo = p.id, Nombre = p.apellido_paterno + " " + p.apellido_materno  + " " + p.nombre, DNI = p.DNI, RUC = p.RUC }).ToList();
            }
            else if (Tipo == "detalleTipoDocumento")
            {
                this.dgBusqueda.ItemsSource = context.DetalleTipoDocumentoes.Select(p => new { Codigo = p.id, Descripcion = p.descripcion }).ToList();
            }
            else if (Tipo == "serie")
            {
                this.dgBusqueda.ItemsSource = context.Correlativoes.Select(p => new { Codigo = p.id, Serie = p.serie, Numero = p.numero }).ToList();
            }
            else if (Tipo == "producto")
            {
                this.dgBusqueda.ItemsSource = context.Productos.Select(p => new { Codigo = p.id, Descripcion = p.descripcion, UM = p.unidad, Precio_Unitario = p.precio }).ToList();
            }
        }

        private void Row_DoubleClick(object sender, MouseButtonEventArgs e)
        {
            DataGridRow row = sender as DataGridRow;
            // Some operations with this row
            btnCerrar_Click(null,null);
        }
    }
}
