   M S B A M L   `   `   `  ����M  IWpfPageTransitions, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullS<clr-namespace:WpfPageTransitions;assembly=WpfPageTransitionsWpfPageTransitions  5   	   
 Tienda   Tienda.views.Contenedor   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35n jSAPBusinessObjects.WPF.ViewerShared, Version=13.0.3500.0, Culture=neutral, PublicKeyToken=692fbea5521e1304\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   [WpfPageTransitions<clr-namespace:WpfPageTransitions;assembly=WpfPageTransitions     5   	   -   5          � Title$  
MainWindow��5   	   $��618.51��6   $��978.187��6,    � WindowStyle$
 None=�5   	    � AllowsTransparency .  � WindowStartupLocation$ CenterScreen=�5   #   ��6_   Z�  � 	Resources 5	         ContentBack �� EndPoint �� 
StartPoint � Color � Offset��%�   &	        �� 5
   
   $ 0.5,1&�62   $ 0.5,0&�6C   .��5      � $ 	#FF09656E��6   $ 0.394Q�6-   � 5      $ Transparent��6   $ 0.911Q�6/   5      5      .��5      �� $��1q�6   #��[  6!   
������ 	 �� CornerRadius$	 10,10,20,30��6e   ._�5   
   � 
 � RowDefinitions
 5      �� 5      $
��Auto �6    �� 5      �� 5      $
��Auto �6    .+�5      �� $��5q�6   $��Cardana)�6#   $��35(�68   
���  ��$
��Bold"�6[   �� 6n   $�	Principal��6r   6�   �� 5      -   5         ��Name$ 	btnCerrar��5   <     ButtonVentana#��[ 6   |�.  $��Right=�6a   
���  ��$��2,2,5,2q�6�   $��25��6�   $��25��6�   ��5      �� 5       �� ImageSource$+ %/Tienda;component/Resources/close.png��6!   5!      �� 5"      -   5        $ btnMaximizar��5"   <   #��[ 6   |�.  $��Right=�6d   
���  ��$��0,5,49,5q�6�   $��25��6�   $��25��6�   ��5#      �� 5$      $. (/Tienda;component/Resources/maximize.png��6!   5&      �� 5'      -   5        $ btnMinimizar��5'   <   #��[ 6   |�.  $��Right=�6d   
���  ��$��0,5,95,5q�6�   $��25��6�   $��25��6�   ��5(      �� 5)      $. (/Tienda;component/Resources/minimize.png��6!   5+      �� 5/      $��1��6   $��5q�6"   $	��0.5q�6-   
��� ���$	 5��6X   ._�50      � $��1��6   $��6,6,4,4q�6$    � ColumnDefinitions 51      �� 52      $
��226* �6+   �� 53      $
��729* �6+   .+�55      �� -   5        $ 
btnPersona��55      $��Persona��61   $
��Left=�6C   $��	14,14,0,0q�6^   $	��Top=�6q   $	��197��6�   $��61��6�   $��20(�6�   6�   �� 56      -   5        $ btnProducto��56      $��Producto��62   $
��Left=�6E   $��	14,96,0,0q�6`   $	��Top=�6s   $	��197��6�   $��61��6�   $��20(�6�   6�   �� 57      -   5        $ btnDocumento��57      $��	Documento��63   $
��Left=�6G   $��
14,179,0,0q�6b   $	��Top=�6v   $	��197��6�   $��61��6�   $��20(�6�   6�   '   !WpfPageTransitions.PageTransition  5:      -   5          Name$ pgTransition��5:   8   $
��Left=�6N   $	��456��6i   $��	22,28,0,0q�6v   $	��Top=�6�   $	��685��6�      TransitionType$ SlideAndFade=�6�   $��1��6�   5=      5>      �� 5C      $��2��6   $��5q�6%    �� TextAlignment$ Center=�60   
�������6G   5E      5F      5G      