   M S B A M L   `   `   `  ����M  IRibbonStyle, Version=1.0.7055.19810, Culture=neutral, PublicKeyToken=null)clr-namespace:RibbonStyleRibbonStyle  5      )clr-namespace:RibbonStyleRibbonStyle  5          RibbonStyle.MainWindow   5       ccclr-namespace:RibbonStyle  5      \ XPresentationFramework, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5      8x,http://schemas.microsoft.com/winfx/2006/xaml    5      )localclr-namespace:RibbonStyle    5        � WindowStartupLocation$  CenterOwner=�5       � Title$ RibbonStyle��5       � 
ResizeMode$ CanResizeWithGrip=�5      ���#BFDBFF$��Lucida Sans)�5
       � 	Resources 5      "   RibbonStyle.CommandConverter   commandConverter%   RibbonStyle.BackgroundConverter  backgroundConverter � Source  toolTipData � XPath  src �� Source �� Source �� GroupDescriptions2  ,System.Windows.Data.PropertyGroupDescription	   PropertyName
 �� DataType �� XPath �� 	Converter � ToolTip��%0  &	        &	      &	 &     &	 s     7  (�� �     5      *	ToolTip+)7   7    5      6     5      6    � 5      $ /Resources/ToolTips.xml?�6   $ ToolTips/ToolTip��6K   �� 5       6'   �� 8    5        5   
   $	 	@Category��6#   5      �� 5      $
 ToolTip��6   .R�5      �� $��2q�6\   ��6   �� $ @Name��8    5   
   _� 5      ��6   �� ��5      �� 5      .R�5      �� .+�5      �� $
��Bold"�6<   ���#4C4C4C��6   �� $ Header��6N   �� 5      $��0,5,0,0q�6A   ���#4C4C4C��6   �� $ Description��6R   5      5       5"      .��5$   
   � .+�5%      �� $��-8,0,0,0q�5&      $��20��5'      $��20��5(      ��5)      �� $ @Name��8  5*      5+   	   5,      5-      .��5.      �  � RowDefinitions 5/      �� 50      $
��Auto �6   �� 51      $��* �6   �� 52      $
��Auto �6   .+�54      �� $��4q�6   .@�55      �� $
��Home��6   .��56   
   �� -   5        $��
ribbonList��57       +� IsFocusScope . ��58      �� # [ ��5:      �� 5;      .R�5<         RibbonStyle.TilePanel   K� IsItemsHost .    	ChildSize$ 45,35��60   $	��180��6B   5=       �� 
GroupStyle 5?      (  "System.Windows.Controls.GroupStyle  5@         Panel 5A      �� 5B      .R�5C      ��  �� Orientation$ 
Horizontal=�6    . 68   5D         ContainerStyle 5F      �� 5G       �� 
TargetType" ��6   .�5H      ��  �� Property � �� �� Value 5I      �� 5J       �� 
TargetType" ��6(   .R�5K      �� ��6#   �� *Name+.��5L      �� 5M      5N      5P      5Q      5S      5U      5V   	   �� 5W      $��Insert��6   �� 5X      $��Page Layout��6   �� 5Y      $��
References��6   �� 5Z      $��Mailings��6   �� 5[      $��Review��6   �� 5\      $
��View��6   5]      �� 5^      $��1��6   $��4q�6   $ �� HorizontalScrollBarVisibility$ Visible=�6*   " �� VerticalScrollBarVisibility$ Visible=�6R   �� 5_      $��2��6   ��5`      �� 5a   
    �� 
StartPoint$	 0,0&�6    �� EndPoint$	 0,1&�6/   ��5c      �  � Offset$ 0Q�6!    � Color$ #C2D9F7��6,   � 5d      $	 0.4Q�6!   $ #ADCCF6��6.   � 5e      $ 1Q�6!   $ #7A9DCC��6,   5g      .@�5i      �� 5j      5k      5l      