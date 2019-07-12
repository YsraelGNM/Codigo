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
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Tienda.views
{
    /// <summary>
    /// Lógica de interacción para uscProducto.xaml
    /// </summary>
    public partial class uscProducto : UserControl
    {
        //Variables Generales
        public Persona Usuario;
        TiendaEntities context = new TiendaEntities();
        BlurEffect blur = new BlurEffect();

        //Variables Producto
        Producto proProducto;



        public uscProducto()
        {
            InitializeComponent();
        }



        private void btnNuevoProducto_Click(object sender, RoutedEventArgs e)
        {
            LimpiarProducto();
            proProducto = new Producto();
        }

        private void txtCodigoProducto_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                proProducto = null;
                try
                {
                    var Cod = Int32.Parse(txtCodigoProducto.Text);
                    proProducto = (from c in context.Productos where c.id == Cod select c).FirstOrDefault();
                    if (proProducto == null)
                    {
                        MessageBox.Show("No se encuentra el Producto.");
                    }
                    else
                    {
                        txtDescripcion.Text = proProducto.descripcion;
                        txtUnidadMedida.Text = proProducto.unidad;
                        txtPrecio.Text = proProducto.precio.ToString();
                    }
                }
                catch (Exception)
                {
                    MessageBox.Show("No se encuentra el Producto.");
                }
            }
        }

        private void btnGuardarProducto_Click(object sender, RoutedEventArgs e)
        {
            proProducto.descripcion = txtDescripcion.Text;
            proProducto.unidad = txtUnidadMedida.Text;
            proProducto.precio = decimal.Parse(txtPrecio.Text);
            proProducto.fecha_grabado = DateTime.Now;
            proProducto.estado = (chkEstadoProducto.IsChecked == true) ? 1 : 0;
            proProducto.id_usuario = Usuario.id;

            if (context.Entry(proProducto).State != System.Data.Entity.EntityState.Modified)
            {
                context.Productos.Add(proProducto);
            }

            context.SaveChanges();

            LimpiarProducto();
        }

        private void LimpiarProducto()
        {
            txtCodigoProducto.Text = string.Empty;
            txtDescripcion.Text = string.Empty;
            txtUnidadMedida.Text = string.Empty;
            txtPrecio.Text = string.Empty;
            chkEstadoProducto.IsChecked = false;
        }

    }
}
