﻿#pragma checksum "..\..\..\views\Contenedor.xaml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "F404EAAB8E347F2303CFFE72F98E4D47E3AF481C"
//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.42000
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

using RootLibrary.WPF.Localization;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Forms.Integration;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;
using WpfPageTransitions;


namespace Tienda.views {
    
    
    /// <summary>
    /// Contenedor
    /// </summary>
    public partial class Contenedor : System.Windows.Window, System.Windows.Markup.IComponentConnector {
        
        
        #line 29 "..\..\..\views\Contenedor.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button btnCerrar;
        
        #line default
        #line hidden
        
        
        #line 34 "..\..\..\views\Contenedor.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button btnMaximizar;
        
        #line default
        #line hidden
        
        
        #line 39 "..\..\..\views\Contenedor.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button btnMinimizar;
        
        #line default
        #line hidden
        
        
        #line 53 "..\..\..\views\Contenedor.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button btnPersona;
        
        #line default
        #line hidden
        
        
        #line 54 "..\..\..\views\Contenedor.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button btnProducto;
        
        #line default
        #line hidden
        
        
        #line 55 "..\..\..\views\Contenedor.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button btnDocumento;
        
        #line default
        #line hidden
        
        
        #line 58 "..\..\..\views\Contenedor.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal WpfPageTransitions.PageTransition pgTransition;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/Tienda;component/views/contenedor.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\..\views\Contenedor.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            
            #line 7 "..\..\..\views\Contenedor.xaml"
            ((Tienda.views.Contenedor)(target)).Loaded += new System.Windows.RoutedEventHandler(this.Window_Loaded);
            
            #line default
            #line hidden
            return;
            case 2:
            this.btnCerrar = ((System.Windows.Controls.Button)(target));
            
            #line 29 "..\..\..\views\Contenedor.xaml"
            this.btnCerrar.Click += new System.Windows.RoutedEventHandler(this.btnCerrar_Click);
            
            #line default
            #line hidden
            return;
            case 3:
            this.btnMaximizar = ((System.Windows.Controls.Button)(target));
            
            #line 34 "..\..\..\views\Contenedor.xaml"
            this.btnMaximizar.Click += new System.Windows.RoutedEventHandler(this.btnMaximizar_Click);
            
            #line default
            #line hidden
            return;
            case 4:
            this.btnMinimizar = ((System.Windows.Controls.Button)(target));
            
            #line 39 "..\..\..\views\Contenedor.xaml"
            this.btnMinimizar.Click += new System.Windows.RoutedEventHandler(this.btnMinimizar_Click);
            
            #line default
            #line hidden
            return;
            case 5:
            this.btnPersona = ((System.Windows.Controls.Button)(target));
            
            #line 53 "..\..\..\views\Contenedor.xaml"
            this.btnPersona.Click += new System.Windows.RoutedEventHandler(this.btnPersona_Click);
            
            #line default
            #line hidden
            return;
            case 6:
            this.btnProducto = ((System.Windows.Controls.Button)(target));
            
            #line 54 "..\..\..\views\Contenedor.xaml"
            this.btnProducto.Click += new System.Windows.RoutedEventHandler(this.btnProducto_Click);
            
            #line default
            #line hidden
            return;
            case 7:
            this.btnDocumento = ((System.Windows.Controls.Button)(target));
            
            #line 55 "..\..\..\views\Contenedor.xaml"
            this.btnDocumento.Click += new System.Windows.RoutedEventHandler(this.btnDocumento_Click);
            
            #line default
            #line hidden
            return;
            case 8:
            this.pgTransition = ((WpfPageTransitions.PageTransition)(target));
            return;
            }
            this._contentLoaded = true;
        }
    }
}

