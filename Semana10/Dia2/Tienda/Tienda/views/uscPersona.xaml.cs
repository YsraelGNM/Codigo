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
    /// Lógica de interacción para uscPersona.xaml
    /// </summary>
    public partial class uscPersona : UserControl
    {
        //Variables Generales
        public Persona Usuario;
        TiendaEntities context = new TiendaEntities();
        BlurEffect blur = new BlurEffect();

        //Variables Persona
        Persona perPersona;


        public uscPersona()
        {
            InitializeComponent();
        }




        private void btnNuevoPersona_Click(object sender, RoutedEventArgs e)
        {
            LimpiarPersona();
            perPersona = new Persona();
        }

        private void btnGuardarPersona_Click(object sender, RoutedEventArgs e)
        {
            perPersona.apellido_paterno = txtApePat.Text;
            perPersona.apellido_materno = txtApeMat.Text;
            perPersona.nombre = txtNombre.Text;
            perPersona.DNI = txtDNI.Text;
            perPersona.RUC = txtRUC.Text;
            perPersona.email = txtEmail.Text;
            perPersona.user_name = txtUsuario.Text;
            perPersona.user_pwd = txtPassword.Text;
            if (chkCliente.IsChecked == true)
            {
                perPersona.cliente = true;
            }
            else
            {
                perPersona.cliente = false;
            }
            if (chkProveedor.IsChecked == true)
            {
                perPersona.proveedor = true;
            }
            else
            {
                perPersona.proveedor = false;
            }
            if (chkTrabajador.IsChecked == true)
            {
                perPersona.trabajador = true;
            }
            else
            {
                perPersona.trabajador = false;
            }
            if (chkUsuario.IsChecked == true)
            {
                perPersona.usuario = true;
            }
            else
            {
                perPersona.usuario = false;
            }
            perPersona.fecha_grabado = DateTime.Now;
            perPersona.estado = (chkEstadoPersona.IsChecked == true) ? 1 : 0;
            perPersona.id_usuario = Usuario.id;

            if (context.Entry(perPersona).State != System.Data.Entity.EntityState.Modified)
            {
                context.Persona.Add(perPersona);
            }

            context.SaveChanges();

            LimpiarPersona();
        }

        private void LimpiarPersona()
        {
            perPersona = null;
            txtCodigoPersona.Text = string.Empty;
            txtApePat.Text = string.Empty;
            txtApeMat.Text = string.Empty;
            txtNombre.Text = string.Empty;
            txtDNI.Text = string.Empty;
            txtRUC.Text = string.Empty;
            txtEmail.Text = string.Empty;
            txtUsuario.Text = string.Empty;
            txtPassword.Text = string.Empty;
            chkCliente.IsChecked = false;
            chkProveedor.IsChecked = false;
            chkTrabajador.IsChecked = false;
            chkUsuario.IsChecked = false;
            chkEstadoPersona.IsChecked = false;
        }

        private void txtCodigoPersona_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                perPersona = null;
                try
                {
                    var Cod = Int32.Parse(txtCodigoPersona.Text);
                    perPersona = (from c in context.Persona where c.id == Cod select c).FirstOrDefault();
                    if (perPersona == null)
                    {
                        MessageBox.Show("No se encuentra la Persona.");
                    }
                    else
                    {
                        txtApePat.Text = perPersona.apellido_paterno;
                        txtApeMat.Text = perPersona.apellido_materno;
                        txtNombre.Text = perPersona.nombre;
                        txtDNI.Text = perPersona.DNI;
                        txtRUC.Text = perPersona.RUC;
                        txtEmail.Text = perPersona.email;
                        txtUsuario.Text = perPersona.user_name;
                        txtPassword.Text = perPersona.user_pwd;
                        if (perPersona.cliente == true)
                        {
                            chkCliente.IsChecked = true;
                        }
                        else
                        {
                            chkCliente.IsChecked = false;
                        }
                        if (perPersona.proveedor == true)
                        {
                            chkProveedor.IsChecked = true;
                        }
                        else
                        {
                            chkProveedor.IsChecked = false;
                        }
                        if (perPersona.trabajador == true)
                        {
                            chkTrabajador.IsChecked = true;
                        }
                        else
                        {
                            chkTrabajador.IsChecked = false;
                        }
                        if (perPersona.usuario == true)
                        {
                            chkUsuario.IsChecked = true;
                        }
                        else
                        {
                            chkUsuario.IsChecked = false;
                        }
                        if (perPersona.estado != 0)
                        {
                            chkEstadoPersona.IsChecked = true;
                        }
                        else
                        {
                            chkEstadoPersona.IsChecked = false;
                        }
                    }
                }
                catch (Exception)
                {
                    MessageBox.Show("No se encuentra la Persona.");
                }
            }
        }

    }
}
