   M S B A M L   `   `   `  ����
  Tienda    Tienda.views.Logueo   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35n jSAPBusinessObjects.WPF.ViewerShared, Version=13.0.3500.0, Culture=neutral, PublicKeyToken=692fbea5521e1304\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  
MainWindow��5   	   $��468.421��6   $��302.632��6-    � WindowStyle$
 None=�5   	    � AllowsTransparency .  � WindowStartupLocation$ CenterScreen=�5   #    � 	Resources 5         ContentBack � Color � Offset��%�   &	        �� 5	   
   ��5      � $ 	#FF08F3E8��6   $ 0Q�61   � 5      $ Transparent��6   $ .9Q�63   � 5      $ Transparent��6   $	 1.2Q�63   5      5      ��5      �� 5   
    �� EndPoint$ 0.5,1&�6    �� 
StartPoint$ 0.5,0&�6/   .��5      � $ Black��6   $ 0Q�6)   � 5      $ White��6   $ .4Q�6)   � 5      $ Transparent��6   $	 1.2Q�6/   5      .��5      �� $��1q�6   #��[  6!   
������ 	 �� CornerRadius$	 10,10,20,30��6e   ._�5   
   � 
 � RowDefinitions
 5      �� 5      $
��Auto �6    60   �� 5      6"   �� 5      $
��Auto �6    60   .+�5#      �� $��5q�6   ���	#FF8B0606$��Franklin Gothic Medium)�6:   $��22(�6^   Login6s   �� 5%      -   5          ButtonVentana#��[ 5%      |�.  $��Right=�6N   
���  ��$��2,2,5,2q�6{   $��25��6�   $��25��6�   ��5&      �� 5'       �� ImageSource$+ %/Tienda;component/Resources/close.png��6!   5)      �� 5*      -   5        #��[ 5*      |�.  $��Right=�6N   
���  ��$��0,5,49,5q�6{   $��25��6�   $��25��6�   ��5+      �� 5,      $. (/Tienda;component/Resources/maximize.png��6!   5.      �� 5/      -   5        #��[ 5/      |�.  $��Right=�6N   
���  ��$��0,5,95,5q�6{   $��25��6�   $��25��6�   ��50      �� 51      $. (/Tienda;component/Resources/minimize.png��6!   53      �� 57      $��1��6   $��5q�6"   $��1q�6-   
��� ���$	 5��6V   ._�58      � $��1��6   $��4,4,6,6q�6$   .+�59      �� -   5         ��Name$ label��59      $��Usuario��6+   $
��Left=�6=   $��
53,122,0,0q�6X   $	��Top=�6l   $��33��6�   $	��168��6�   $��24(�6�   $��Center=�6�   $	��5,0q�6�   $��Candara)�6�   $
��Bold"�6�   �� 5:      -   5         ��Name$ 
txtUsuario��5:      $
��Left=�62   $��39��6M   $��
12,163,0,0q�6Y    �� TextWrapping$
 Wrap=�6m   $	��Top=�6�   $	��250��6�   $��24(�6�   $��Center=�6�   G� 5;      -   5         G�Name$ txtPassword��5;   "   $
��Left=�67   $��
12,247,0,0q�6R   $	��Top=�6f   $	��212��6~   $��41��6�     PassBox#��[ 6�   $��Center=�6�   �� 5<      -   5         ��Name$ btnIngresar��5<      $��Ingresar��62   $
��Left=�6E   $��
12,306,0,0q�6`   $	��Top=�6t   $	��250��6�     ButtonLogueo#��[ 6�   $��57��6�   ���	#FFEEC40A J� RenderTransformOrigin$ 10,10&�6�   $
��Bold"�6  $��24(�6+  $��Candara)�69  �� 5=      -   5        $ label_Copy1��5=      $��Password��61   $
��Left=�6D   $��
53,209,0,0q�6_   $	��Top=�6s   $��33��6�   $	��168��6�   $��24(�6�   $��Center=�6�   $	��5,0q�6�   $��Candara)�6�   $
��Bold"�6�   5>      5?      �� 5A      $��2��6   $��5q�6%    �� TextAlignment$ Center=�60   
�������6]   5C      5D      5E      