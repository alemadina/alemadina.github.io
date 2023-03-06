var ventana;

	// Sale del programa (Pantalla en blanco)
	function goHome()
	{
  		window.location.href = "about:blank";
	}

    // Abre una ventana nueva
	function abrirVentana()
	{
      if (!ventanaEmergenteAbierta())
	  {	 
        ventana = window.open("", "",
	        "menubar=no, scrollbars=no, width=1600, height=700");
		// Aviso
	    	("Ventana emergente abierta con tamaño 400x350.");		
	  }
	  else
	  {
		// Aviso
	    ("La ventana emergente ya está abierta. Ciérrela si quiere volver a abrirla.");
	  }
    }
	
	//Imprime la página actual
	function imprimirPagina()
	{
      window.print();
	  // Aviso
	  ("Ha enviado a imprimir la página principal.");		
    }	
	
	//MOdificar el tamaño de la ventana
	function modificarVentana()
	{
	  if (ventanaEmergenteAbierta())
	  {	    	
        ventana.resizeBy(640, 480);
        ventana.focus();
	    // Aviso
		("Ha modificado el tamaño de la ventana emergente a 640x480.");		
	  }
    }
	
	//Muestra datos en la ventana creada
	//Por ejemplo el tamaño (ancho y alto), el path, la url y el idioma del navegador
	function mostrarDatosEnVentana()
	{	
	  if (ventanaEmergenteAbierta())
	  {
	    ventana.document.write("<p>Estos son los datos obtenidos:</p>");
	    ventana.document.write("<p>Tamaño de la ventana: " + screen.width + " x " + screen.height + "</p>"); 
	    ventana.document.write("<p>El Path de la página es: " + window.location.pathname + "</p>");
	    ventana.document.write("<p>La URL de la página es: " + window.location.href + "</p>");
	    ventana.document.write("<p>El idioma del navegador es: " + navigator.language + "</p>");
	    ventana.document.write("<p>Navegador: " + navigator.userAgent + "</p>");
	    ventana.document.write("<p id=\"textoModificar\">Ejemplo para modificar texto</p>");
	    ventana.document.write("<button onclick=\"{ window.close(); } \">Cerrar ventana</button>");
	    // Aviso
		("Mostrados los datos en la ventana emergente.");		
      }
    }
	
	//Cierra la ventana emergente
	function cerrarVentana ()
	{
	  if (ventanaEmergenteAbierta())
	  {
	    ventana.close();		
		// Aviso
		("Ha cerrado la ventana emergente.");		
      }
	}
	
	//Comprueba si se ha abierto la ventana emergente
	//Devuelve true si se ha habierto, false si no se ha abierto
	function ventanaEmergenteAbierta ()
	{
	  if ((typeof ventana === 'undefined') || (ventana.closed))
	  {
	    // Aviso
		("No ha abierto la ventana.");		
		return false;
	  }
	  else
	  {
	    return true;
	  }
	}
/** 	
	//Muestra un aviso en la página principal, modificando el objeto p con id "aviso"
	function aviso (texto)
	{
	  document.getElementById("aviso").innerHTML = "<b>" + texto + "</b>";		
	}
	
	function modificarTextoVentanaSegunSelectorID()
	{
	  if (ventanaEmergenteAbierta())
	  {
	    ventana.document.getElementById('textoModificar').innerHTML = 
	        "Has pulsado en el botón 'Modificar datos en ventana' de la página principal";
      }
	}
*/	