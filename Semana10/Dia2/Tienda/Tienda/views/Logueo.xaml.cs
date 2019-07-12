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
    public partial class Logueo : Window
    {
        public Logueo()
        {
            InitializeComponent();
        }

        private void btnIngresar_Click(object sender, RoutedEventArgs e)
        {
            var persona = new Persona();
            var logueo = new BL.BLLogueo();
            //var logueo1 = BL.IBLLogueo();
            persona = logueo.GetById(txtUsuario.Text);
            if (persona == null)
            {
                MessageBox.Show("El usuario no existe");
                limpiar();
            }
            else
            {
                if (persona.user_pwd == txtPassword.Password)
                {
                    this.Hide();
                    Contenedor frm = new Contenedor();
                    frm.Usuario = persona;
                    frm.Show();
                }
                else
                {
                    MessageBox.Show("Error Logueo");
                    limpiar();
                }
            }

        }

        void limpiar()
        {
            txtUsuario.Text = "";
            txtPassword.Password = "";
        }

        private void btnCerrar_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

        private void btnMazimizar_Click(object sender, RoutedEventArgs e)
        {
            this.WindowState = WindowState.Maximized;
        }

        private void btnMinimizar_Click(object sender, RoutedEventArgs e)
        {
            this.WindowState = WindowState.Minimized;
        }
    }
}
