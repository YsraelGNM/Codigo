using System;
using System.Collections.Generic;
using System.Data;
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
using System.Windows.Shapes;

namespace Tienda.views
{
    /// <summary>
    /// Lógica de interacción para Contenedor.xaml
    /// </summary>
    public partial class Contenedor : Window
    {
        //Variables Generales
        public Persona Usuario;
        TiendaEntities context = new TiendaEntities();
        BlurEffect blur = new BlurEffect();

        //Variables Persona
        Persona perPersona;

        //Variables Producto
        Producto proProducto;

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


        public Contenedor()
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

        private void btnPersona_Click(object sender, RoutedEventArgs e)
        {
            //Grid.SetZIndex(canProducto, 1);
            //canProducto.Effect = blur;
            //Grid.SetZIndex(canDocumento, 2);
            //canDocumento.Effect = blur;
            //LimpiarPersona();
            uscPersona Per = new uscPersona();
            Per.Usuario = this.Usuario;
            pgTransition.ShowPage(Per);
        }

        private void btnProducto_Click(object sender, RoutedEventArgs e)
        {
            //Grid.SetZIndex(canDocumento, 2);
            //canDocumento.Effect = blur;
            //Grid.SetZIndex(canProducto, 3);
            //canProducto.Effect = null;
            //LimpiarProducto();
            uscProducto Pro = new uscProducto();
            Pro.Usuario = this.Usuario;
            pgTransition.ShowPage(Pro);
        }

        private void btnDocumento_Click(object sender, RoutedEventArgs e)
        {
            //Grid.SetZIndex(canProducto, 1);
            //canProducto.Effect = blur;
            //Grid.SetZIndex(canDocumento, 3);
            //canDocumento.Effect = null;
            //LimpiarDocumento();
            uscDocumento Doc = new uscDocumento();
            Doc.Usuario = this.Usuario;
            pgTransition.ShowPage(Doc);
        }

        //private void btnNuevoPersona_Click(object sender, RoutedEventArgs e)
        //{
        //    LimpiarPersona();
        //    perPersona = new Persona();
        //}

        //private void btnGuardarPersona_Click(object sender, RoutedEventArgs e)
        //{
        //    perPersona.apellido_paterno = txtApePat.Text;
        //    perPersona.apellido_materno = txtApeMat.Text;
        //    perPersona.nombre = txtNombre.Text;
        //    perPersona.DNI = txtDNI.Text;
        //    perPersona.RUC = txtRUC.Text;
        //    perPersona.email = txtEmail.Text;
        //    perPersona.user_name = txtUsuario.Text;
        //    perPersona.user_pwd = txtPassword.Text;
        //    if (chkCliente.IsChecked == true)
        //    {
        //        perPersona.cliente = true;
        //    }else
        //    {
        //        perPersona.cliente = false;
        //    }
        //    if (chkProveedor.IsChecked == true)
        //    {
        //        perPersona.proveedor = true;
        //    }
        //    else
        //    {
        //        perPersona.proveedor = false;
        //    }
        //    if (chkTrabajador.IsChecked == true)
        //    {
        //        perPersona.trabajador = true;
        //    }
        //    else
        //    {
        //        perPersona.trabajador = false;
        //    }
        //    if (chkUsuario.IsChecked == true)
        //    {
        //        perPersona.usuario = true;
        //    }
        //    else
        //    {
        //        perPersona.usuario = false;
        //    }
        //    perPersona.fecha_grabado = DateTime.Now;
        //    perPersona.estado = (chkEstadoPersona.IsChecked == true)? 1:0;
        //    perPersona.id_usuario = Usuario.id;

        //    if (context.Entry(perPersona).State != System.Data.Entity.EntityState.Modified)
        //    {
        //        context.Persona.Add(perPersona);
        //    }
            
        //    context.SaveChanges();

        //    LimpiarPersona();
        //}

        //private void LimpiarPersona()
        //{
        //    perPersona = null;
        //    txtCodigoPersona.Text = string.Empty;
        //    txtApePat.Text = string.Empty;
        //    txtApeMat.Text = string.Empty;
        //    txtNombre.Text = string.Empty;
        //    txtDNI.Text = string.Empty;
        //    txtRUC.Text = string.Empty;
        //    txtEmail.Text = string.Empty;
        //    txtUsuario.Text = string.Empty;
        //    txtPassword.Text = string.Empty;
        //    chkCliente.IsChecked = false;
        //    chkProveedor.IsChecked = false;
        //    chkTrabajador.IsChecked = false;
        //    chkUsuario.IsChecked = false;
        //    chkEstadoPersona.IsChecked = false;
        //}

        //private void txtCodigoPersona_KeyDown(object sender, KeyEventArgs e)
        //{
        //    if (e.Key == Key.Enter)
        //    {
        //        perPersona = null;
        //        try
        //        {
        //            var Cod = Int32.Parse(txtCodigoPersona.Text);
        //            perPersona = (from c in context.Persona where c.id == Cod select c).FirstOrDefault();
        //            if (perPersona == null)
        //            {
        //                MessageBox.Show("No se encuentra la Persona.");
        //            }
        //            else
        //            {
        //                txtApePat.Text = perPersona.apellido_paterno;
        //                txtApeMat.Text = perPersona.apellido_materno;
        //                txtNombre.Text = perPersona.nombre;
        //                txtDNI.Text = perPersona.DNI;
        //                txtRUC.Text = perPersona.RUC;
        //                txtEmail.Text = perPersona.email;
        //                txtUsuario.Text = perPersona.user_name;
        //                txtPassword.Text = perPersona.user_pwd;
        //                if (perPersona.cliente == true)
        //                {
        //                    chkCliente.IsChecked = true;
        //                }
        //                else
        //                {
        //                    chkCliente.IsChecked = false;
        //                }
        //                if (perPersona.proveedor == true)
        //                {
        //                    chkProveedor.IsChecked = true;
        //                }
        //                else
        //                {
        //                    chkProveedor.IsChecked = false;
        //                }
        //                if (perPersona.trabajador == true)
        //                {
        //                    chkTrabajador.IsChecked = true;
        //                }
        //                else
        //                {
        //                    chkTrabajador.IsChecked = false;
        //                }
        //                if (perPersona.usuario == true)
        //                {
        //                    chkUsuario.IsChecked = true;
        //                }
        //                else
        //                {
        //                    chkUsuario.IsChecked = false;
        //                }
        //                if (perPersona.estado != 0)
        //                {
        //                    chkEstadoPersona.IsChecked = true;
        //                }
        //                else
        //                {
        //                    chkEstadoPersona.IsChecked = false;
        //                }
        //            }
        //        }
        //        catch (Exception)
        //        {
        //            MessageBox.Show("No se encuentra la Persona.");
        //        }
        //    }
        //}

        //private void btnNuevoProducto_Click(object sender, RoutedEventArgs e)
        //{
        //    LimpiarProducto();
        //    proProducto = new Producto();
        //}

        //private void txtCodigoProducto_KeyDown(object sender, KeyEventArgs e)
        //{
        //    if (e.Key == Key.Enter)
        //    {
        //        proProducto = null;
        //        try
        //        {
        //            var Cod = Int32.Parse(txtCodigoProducto.Text);
        //            proProducto = (from c in context.Productos where c.id == Cod select c).FirstOrDefault();
        //            if (proProducto == null)
        //            {
        //                MessageBox.Show("No se encuentra el Producto.");
        //            }
        //            else
        //            {
        //                txtDescripcion.Text = proProducto.descripcion;
        //                txtUnidadMedida.Text = proProducto.unidad;
        //                txtPrecio.Text = proProducto.precio.ToString();
        //            }
        //        }
        //        catch (Exception)
        //        {
        //            MessageBox.Show("No se encuentra el Producto.");
        //        }
        //    }
        //}

        //private void btnGuardarProducto_Click(object sender, RoutedEventArgs e)
        //{
        //    proProducto.descripcion = txtDescripcion.Text;
        //    proProducto.unidad = txtUnidadMedida.Text;
        //    proProducto.precio = decimal.Parse(txtPrecio.Text);
        //    proProducto.fecha_grabado = DateTime.Now;
        //    proProducto.estado = (chkEstadoProducto.IsChecked == true) ? 1 : 0;
        //    proProducto.id_usuario = Usuario.id;

        //    if (context.Entry(proProducto).State != System.Data.Entity.EntityState.Modified)
        //    {
        //        context.Productos.Add(proProducto);
        //    }

        //    context.SaveChanges();

        //    LimpiarProducto();
        //}

        //private void LimpiarProducto()
        //{
        //    txtCodigoProducto.Text = string.Empty;
        //    txtDescripcion.Text = string.Empty;
        //    txtUnidadMedida.Text = string.Empty;
        //    txtPrecio.Text = string.Empty;
        //    chkEstadoProducto.IsChecked = false;
        //}

        //private void btnNuevoDocumento_Click(object sender, RoutedEventArgs e)
        //{
        //    LimpiarDocumento();
        //    docDocumento = new Documento();
        //}

        //private void txtPersonaDocumento_KeyDown(object sender, KeyEventArgs e)
        //{
        //    if (e.Key == Key.F1)
        //    {
        //        Busqueda frm = new Busqueda();
        //        frm.Tipo = "persona";
        //        frm.ShowDialog();
        //        TextBlock mItem = frm.dgBusqueda.Columns[0].GetCellContent(frm.dgBusqueda.Items[frm.dgBusqueda.SelectedIndex]) as TextBlock;
        //        var Cod = Int32.Parse(mItem.Text);
        //        docPersona = (from c in context.Persona where c.id == Cod select c).FirstOrDefault();
        //        txtPersonaDocumento.Text = docPersona.apellido_paterno + " " + docPersona.apellido_materno + " " + docPersona.nombre;
        //        txtPersonaDocumento.Tag = docPersona;
        //    }
        //}

        //private void txtTipoDocumento_KeyDown(object sender, KeyEventArgs e)
        //{
        //    if (e.Key == Key.F1)
        //    {
        //        Busqueda frm = new Busqueda();
        //        frm.Tipo = "detalleTipoDocumento";
        //        frm.ShowDialog();
        //        TextBlock mItem = frm.dgBusqueda.Columns[0].GetCellContent(frm.dgBusqueda.Items[frm.dgBusqueda.SelectedIndex]) as TextBlock;
        //        var Cod = mItem.Text;
        //        docDTD = (from c in context.DetalleTipoDocumentoes where c.id == Cod select c).FirstOrDefault();
        //        txtTipoDocumento.Text = docDTD.descripcion;
        //        txtTipoDocumento.Tag = docDTD;
        //    }
        //}

        //private void txtSerie_KeyDown(object sender, KeyEventArgs e)
        //{
        //    if (e.Key == Key.F1)
        //    {
        //        Busqueda frm = new Busqueda();
        //        frm.Tipo = "serie";
        //        frm.ShowDialog();
        //        TextBlock mItem = frm.dgBusqueda.Columns[0].GetCellContent(frm.dgBusqueda.Items[frm.dgBusqueda.SelectedIndex]) as TextBlock;
        //        var Cod = Int32.Parse(mItem.Text);
        //        docCorrelativo = (from c in context.Correlativoes where c.id == Cod select c).FirstOrDefault();
        //        txtSerie.Text = docCorrelativo.serie;
        //        txtSerie.Tag = docCorrelativo;
        //        txtNumero.Text = docCorrelativo.numero;
        //    }
        //}

        //private void btnAgregarDetalle_Click(object sender, RoutedEventArgs e)
        //{

        //    dgDetalle.Items.Add(new mFila { producto = txtProductoDocumento.Text, cantidad = txtCantidadDocumento.Text, precio_unitario = txtPrecio_UnitarioDocumento.Text, total = (decimal.Parse(txtCantidadDocumento.Text) * decimal.Parse(txtPrecio_UnitarioDocumento.Text)).ToString() });
        //    txtProductoDocumento.Text = string.Empty;
        //    txtCantidadDocumento.Text = string.Empty;
        //    txtPrecio_UnitarioDocumento.Text = string.Empty;
        //}

        //private void txtProductoDocumento_KeyDown(object sender, KeyEventArgs e)
        //{
        //    if (e.Key == Key.F1)
        //    {
        //        Busqueda frm = new Busqueda();
        //        frm.Tipo = "producto";
        //        frm.ShowDialog();
        //        TextBlock mItem = frm.dgBusqueda.Columns[0].GetCellContent(frm.dgBusqueda.Items[frm.dgBusqueda.SelectedIndex]) as TextBlock;
        //        var Cod = Int32.Parse(mItem.Text);
        //        docProducto = (from c in context.Productos where c.id == Cod select c).FirstOrDefault();
        //        txtProductoDocumento.Text = docProducto.id.ToString() + "/" + docProducto.descripcion;
        //        txtProductoDocumento.Tag = docProducto;
        //        txtPrecio_UnitarioDocumento.Text = docProducto.precio.ToString();
        //        if (docProducto.estado != 0)
        //        {
        //            chkEstadoProducto.IsChecked = true;
        //        }
        //        else
        //        {
        //            chkEstadoProducto.IsChecked = false;
        //        }
        //    }
        //}

        //private void dgDetalle_MouseDoubleClick(object sender, MouseEventArgs e)
        //{
        //    if (dgDetalle.SelectedItem != null)
        //    {
        //        TextBlock mItem = dgDetalle.Columns[0].GetCellContent(dgDetalle.Items[dgDetalle.SelectedIndex]) as TextBlock;
        //        txtProducto.Text = mItem.Text;

        //        mItem = dgDetalle.Columns[1].GetCellContent(dgDetalle.Items[dgDetalle.SelectedIndex]) as TextBlock;
        //        txtCantidadDocumento.Text = mItem.Text;

        //        mItem = dgDetalle.Columns[2].GetCellContent(dgDetalle.Items[dgDetalle.SelectedIndex]) as TextBlock;
        //        txtPrecio_UnitarioDocumento.Text = mItem.Text;
        //    }
        //}

        //private void dgDetalle_KeyDown(object sender, KeyEventArgs e)
        //{
        //    if (e.Key == Key.Back)
        //    {
        //        dgDetalle.Items.Remove(dgDetalle.SelectedItem);
        //    }
        //}

        //private void btnGuardarDocumento_Click(object sender, RoutedEventArgs e)
        //{
        //    docDocumento.id_dtd = ((DetalleTipoDocumento)txtTipoDocumento.Tag).id;
        //    docDocumento.id_persona =  ((Persona)txtPersonaDocumento.Tag).id;
        //    docDocumento.serie = txtSerie.Text;
        //    docDocumento.numero = txtNumero.Text;
        //    docDocumento.fecha = dtpFecha.SelectedDate.Value.Date;
        //    docDocumento.observaciones = txtObservaciones.Text;
        //    docDocumento.id_usuario = Usuario.id;
        //    docDocumento.fecha_grabado = DateTime.Now;
        //    docDocumento.estado = (chkEstadoDocumento.IsChecked == true) ? 1 : 0;

        //    Int32 cont = 0;
        //    foreach (var item in dgDetalle.Items)
        //    {
        //        var mDet = new DocumentoDetalle();
        //        string[] idProducto = ((mFila)item).producto.ToString().Split('/');
        //        mDet.item = cont;
        //        mDet.id_producto = Int32.Parse(idProducto[0]);
        //        mDet.cantidad = Decimal.Parse(((mFila)item).cantidad);
        //        mDet.precio_unitario = Decimal.Parse(((mFila)item).precio_unitario);
        //        docDocumento.DocumentoDetalles.Add(mDet);
        //        cont += 1;
        //    }

        //    if (context.Entry(docDocumento).State != System.Data.Entity.EntityState.Modified)
        //    {
        //        context.Documentoes.Add(docDocumento);
        //    }

        //    context.SaveChanges();

        //    LimpiarDocumento();
        //}

        //private void LimpiarDocumento()
        //{
        //    docDocumento = null;
        //    txtTipoDocumento.Text = string.Empty;
        //    txtTipoDocumento.Tag = null;
        //    txtPersonaDocumento.Text = string.Empty;
        //    txtPersonaDocumento.Tag = null;
        //    txtSerie.Text = string.Empty;
        //    txtNumero.Text = string.Empty;
        //    dtpFecha.SelectedDate = DateTime.Now;
        //    txtObservaciones.Text = string.Empty;
        //    chkEstadoDocumento.IsChecked = false;

        //    dgDetalle.Items.Clear();
        //}

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            //////////////////////
            //DataGridTextColumn col1 = new DataGridTextColumn();
            //DataGridTextColumn col2 = new DataGridTextColumn();
            //DataGridTextColumn col3 = new DataGridTextColumn();
            //DataGridTextColumn col4 = new DataGridTextColumn();
            //dgDetalle.Columns.Add(col1);
            //dgDetalle.Columns.Add(col2);
            //dgDetalle.Columns.Add(col3);
            //dgDetalle.Columns.Add(col4);
            //col1.Binding = new Binding("producto");
            //col2.Binding = new Binding("cantidad");
            //col3.Binding = new Binding("precio_unitario");
            //col4.Binding = new Binding("total");

            //col1.Width = 200;
            //col2.Width = 100;
            //col3.Width = 70;
            //col4.Width = 100;

            //col1.Header = "Producto";
            //col2.Header = "Cantidad";
            //col3.Header = "PU";
            //col4.Header = "Total";
        }

        //private void txtCodigoDocumento_KeyDown(object sender, KeyEventArgs e)
        //{
        //    if (e.Key == Key.Enter)
        //    {
        //        docDocumento = null;
        //        try
        //        {
        //            var Cod = Int32.Parse(txtCodigoDocumento.Text);
        //            docDocumento = (from c in context.Documentoes.Include("DocumentoDetalle.Productos") where c.id == Cod select c).FirstOrDefault();
        //            if (proProducto == null)
        //            {
        //                MessageBox.Show("No se encuentra el Producto.");
        //            }
        //            else
        //            {
        //                txtDescripcion.Text = proProducto.descripcion;
        //                txtUnidadMedida.Text = proProducto.unidad;
        //                txtPrecio.Text = proProducto.precio.ToString();
        //            }
        //        }
        //        catch (Exception)
        //        {
        //            MessageBox.Show("No se encuentra el Producto.");
        //        }
        //    }
        //}
    }
}
