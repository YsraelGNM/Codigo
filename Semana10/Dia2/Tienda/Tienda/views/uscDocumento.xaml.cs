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
    /// Lógica de interacción para uscDocumento.xaml
    /// </summary>
    public partial class uscDocumento : UserControl
    {
        //Variables Generales
        public Persona Usuario;
        TiendaEntities context = new TiendaEntities();
        BlurEffect blur = new BlurEffect();

        //Variables Documento
        Documento docDocumento;
        Persona docPersona;
        Producto docProducto;
        DetalleTipoDocumento docDTD;
        Correlativo docCorrelativo;
        public struct mFila
        {
            public string producto { get; set; }
            public string cantidad { get; set; }
            public string precio_unitario { get; set; }
            public string total { get; set; }
        }

        public uscDocumento()
        {
            InitializeComponent();
        }

        private void UserControl_Loaded(object sender, RoutedEventArgs e)
        {
            ////////////////////
            DataGridTextColumn col1 = new DataGridTextColumn();
            DataGridTextColumn col2 = new DataGridTextColumn();
            DataGridTextColumn col3 = new DataGridTextColumn();
            DataGridTextColumn col4 = new DataGridTextColumn();
            dgDetalle.Columns.Add(col1);
            dgDetalle.Columns.Add(col2);
            dgDetalle.Columns.Add(col3);
            dgDetalle.Columns.Add(col4);
            col1.Binding = new Binding("producto");
            col2.Binding = new Binding("cantidad");
            col3.Binding = new Binding("precio_unitario");
            col4.Binding = new Binding("total");

            col1.Width = 200;
            col2.Width = 100;
            col3.Width = 70;
            col4.Width = 100;

            col1.Header = "Producto";
            col2.Header = "Cantidad";
            col3.Header = "PU";
            col4.Header = "Total";
        }



        private void btnNuevoDocumento_Click(object sender, RoutedEventArgs e)
        {
            LimpiarDocumento();
            docDocumento = new Documento();
        }

        private void txtPersonaDocumento_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.F1)
            {
                Busqueda frm = new Busqueda();
                frm.Tipo = "persona";
                frm.ShowDialog();
                TextBlock mItem = frm.dgBusqueda.Columns[0].GetCellContent(frm.dgBusqueda.Items[frm.dgBusqueda.SelectedIndex]) as TextBlock;
                var Cod = Int32.Parse(mItem.Text);
                docPersona = (from c in context.Persona where c.id == Cod select c).FirstOrDefault();
                txtPersonaDocumento.Text = docPersona.apellido_paterno + " " + docPersona.apellido_materno + " " + docPersona.nombre;
                txtPersonaDocumento.Tag = docPersona;
            }
        }

        private void txtTipoDocumento_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.F1)
            {
                Busqueda frm = new Busqueda();
                frm.Tipo = "detalleTipoDocumento";
                frm.ShowDialog();
                TextBlock mItem = frm.dgBusqueda.Columns[0].GetCellContent(frm.dgBusqueda.Items[frm.dgBusqueda.SelectedIndex]) as TextBlock;
                var Cod = mItem.Text;
                docDTD = (from c in context.DetalleTipoDocumentoes where c.id == Cod select c).FirstOrDefault();
                txtTipoDocumento.Text = docDTD.descripcion;
                txtTipoDocumento.Tag = docDTD;
            }
        }

        private void txtSerie_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.F1)
            {
                Busqueda frm = new Busqueda();
                frm.Tipo = "serie";
                frm.ShowDialog();
                TextBlock mItem = frm.dgBusqueda.Columns[0].GetCellContent(frm.dgBusqueda.Items[frm.dgBusqueda.SelectedIndex]) as TextBlock;
                var Cod = Int32.Parse(mItem.Text);
                docCorrelativo = (from c in context.Correlativoes where c.id == Cod select c).FirstOrDefault();
                txtSerie.Text = docCorrelativo.serie;
                txtSerie.Tag = docCorrelativo;
                txtNumero.Text = docCorrelativo.numero;
            }
        }

        private void btnAgregarDetalle_Click(object sender, RoutedEventArgs e)
        {

            dgDetalle.Items.Add(new mFila { producto = txtProductoDocumento.Text, cantidad = txtCantidadDocumento.Text, precio_unitario = txtPrecio_UnitarioDocumento.Text, total = (decimal.Parse(txtCantidadDocumento.Text) * decimal.Parse(txtPrecio_UnitarioDocumento.Text)).ToString() });
            txtProductoDocumento.Text = string.Empty;
            txtCantidadDocumento.Text = string.Empty;
            txtPrecio_UnitarioDocumento.Text = string.Empty;
        }

        private void txtProductoDocumento_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.F1)
            {
                Busqueda frm = new Busqueda();
                frm.Tipo = "producto";
                frm.ShowDialog();
                TextBlock mItem = frm.dgBusqueda.Columns[0].GetCellContent(frm.dgBusqueda.Items[frm.dgBusqueda.SelectedIndex]) as TextBlock;
                var Cod = Int32.Parse(mItem.Text);
                docProducto = (from c in context.Productos where c.id == Cod select c).FirstOrDefault();
                txtProductoDocumento.Text = docProducto.id.ToString() + "/" + docProducto.descripcion;
                txtProductoDocumento.Tag = docProducto;
                txtPrecio_UnitarioDocumento.Text = docProducto.precio.ToString();
                if (docProducto.estado != 0)
                {
                    chkEstadoDocumento.IsChecked = true;
                }
                else
                {
                    chkEstadoDocumento.IsChecked = false;
                }
            }
        }

        private void dgDetalle_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            if (dgDetalle.SelectedItem != null)
            {
                TextBlock mItem = dgDetalle.Columns[0].GetCellContent(dgDetalle.Items[dgDetalle.SelectedIndex]) as TextBlock;
                txtProductoDocumento.Text = mItem.Text;

                mItem = dgDetalle.Columns[1].GetCellContent(dgDetalle.Items[dgDetalle.SelectedIndex]) as TextBlock;
                txtCantidadDocumento.Text = mItem.Text;

                mItem = dgDetalle.Columns[2].GetCellContent(dgDetalle.Items[dgDetalle.SelectedIndex]) as TextBlock;
                txtPrecio_UnitarioDocumento.Text = mItem.Text;
            }
        }

        private void dgDetalle_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Back)
            {
                dgDetalle.Items.Remove(dgDetalle.SelectedItem);
            }
        }

        private void btnGuardarDocumento_Click(object sender, RoutedEventArgs e)
        {
            docDocumento.id_dtd = ((DetalleTipoDocumento)txtTipoDocumento.Tag).id;
            docDocumento.id_persona = ((Persona)txtPersonaDocumento.Tag).id;
            docDocumento.serie = txtSerie.Text;
            docDocumento.numero = txtNumero.Text;
            docDocumento.fecha = dtpFecha.SelectedDate.Value.Date;
            docDocumento.observaciones = txtObservaciones.Text;
            docDocumento.id_usuario = Usuario.id;
            docDocumento.fecha_grabado = DateTime.Now;
            docDocumento.estado = (chkEstadoDocumento.IsChecked == true) ? 1 : 0;

            Int32 cont = 0;
            foreach (var item in dgDetalle.Items)
            {
                var mDet = new DocumentoDetalle();
                string[] idProducto = ((mFila)item).producto.ToString().Split('/');
                mDet.item = cont;
                mDet.id_producto = Int32.Parse(idProducto[0]);
                mDet.cantidad = Decimal.Parse(((mFila)item).cantidad);
                mDet.precio_unitario = Decimal.Parse(((mFila)item).precio_unitario);
                docDocumento.DocumentoDetalles.Add(mDet);
                cont += 1;
            }

            if (context.Entry(docDocumento).State != System.Data.Entity.EntityState.Modified)
            {
                context.Documentoes.Add(docDocumento);
            }

            docCorrelativo.numero = string.Format("{0:0000000000}", (Int32.Parse(docCorrelativo.numero) + 1));

            context.SaveChanges();

            LimpiarDocumento();
        }

        private void LimpiarDocumento()
        {
            docDocumento = null;
            txtTipoDocumento.Text = string.Empty;
            txtTipoDocumento.Tag = null;
            txtPersonaDocumento.Text = string.Empty;
            txtPersonaDocumento.Tag = null;
            txtSerie.Text = string.Empty;
            txtNumero.Text = string.Empty;
            dtpFecha.SelectedDate = DateTime.Now;
            txtObservaciones.Text = string.Empty;
            chkEstadoDocumento.IsChecked = false;

            dgDetalle.Items.Clear();
        }

    }
}
