$(document).ready(function(){ 
   	function nextMsg() { 
   	if (messages.length == 0) {
       messages = [ 
       "PERSONAL EN",
	    "INNOVACIÓN",
	    "NUESTROS",
	    "FILOSOFÍA XP",
	    "OPORTUNIDAD"
		].reverse(); 
		 
		mess= [ 
       "En Triskel nuestro Departamento de Ingeniería Especializada, está formado por personal egresado de dos de las mejores firmas internacionales: YORK Commercial & Industrial HVAC Systems, así como del Departamento de Servicio de Johnson Controls México sección Building Efficiency.",
	    "Aprendemos de la experiencia para diseñar e implementar soluciones en los proyectos y nos mantenemos en constante capacitación para poder estar al día en la evolución tecnológica.",
	    "Nos comportamos, expresamos y vivímos el día a día con rectitud, honradez y veracidad en todos nuestros actos, de acuerdo con las reglas y valores aceptados por la sociedad como: objetividad, respeto, honestidad, responsabilidad, calidad, y compromiso",
	    "Esta filosofía es el resultado de 10 años de observación y análisis del trabajo en Sinergia entre campo y oficina durante el proceso de mantenimiento a equipos de HVAC & R. Como resultado esto ayuda en el incremento de la vida útil de los equipos así como la reducción de gastos innecesarios.",
	    "Contamos con la experiencia necesaria para dar soporte, control, suministros y refacciones en marcas reconocidas como Dunham Bush, Carrier Totaline, Belimo, Source One, Climaproyectos y McQuay."
		].reverse(); 
    } 
    // change content of message, fade in, wait, fade out and continue with next message
    	$('#message').html(messages.pop()).fadeIn(500).delay(7000).fadeOut(500, nextMsg); 
	};
	// list of messages to display 
	function nepe() { 
		if(messa.length == 0)
		{
			messa= [ 
       		"DESARROLLO Y CRECIMIENTO.",
	    	"EN TECNOLOGÍA DE PUNTA.",
	    	"VALORES NOS DEFINEN.",
	    	"MANTENIMIENTO EXTREMO. ",
	    	"CON ALIANZAS ESTRATÉGICAS."
			].reverse();
		}
		$('#message2').html(messa.pop()).fadeIn(500).delay(7000).fadeOut(500, nepe); 
	}; 
	function nep() { 
		if(mess.length == 0)
		{
			mess= [ 
       		"En Triskel nuestro Departamento de Ingeniería Especializada, está formado por personal egresado de dos de las mejores firmas internacionales: YORK Commercial & Industrial HVAC Systems, así como el Departamento de Servicio de Johnson Controls México sección Building Efficiency.",
	    	"Aprendemos de la experiencia para diseñar e implementar soluciones en los proyectos y nos mantenemos en constante capacitación para poder estar al día en la evolución tecnológica.",
	    	"Nos comportamos, expresamos y vivímos el día a día con rectitud, honradez y veracidad en todos nuestros actos, de acuerdo con las reglas y valores aceptados por la sociedad como: objetividad, respeto, honestidad, responsabilidad, calidad, y compromiso",
	    	"Esta filosofía es el resultado de 10 años de observación y análisis del trabajo en Sinergia entre campo y oficina durante el proceso de mantenimiento a equipos de HVAC & R. Como resultado esto ayuda en el incremento de la vida útil de los equipos así como la reducción de gastos innecesarios.",
	    	"Contamos con la experiencia necesaria para dar soporte, control, suministros y refacciones en marcas reconocidas como Dunham Bush, Carrier Totaline, Belimo, Source One, Climaproyectos y McQuay."
			].reverse(); 
		}
		$('#message3').html(mess.pop()).fadeIn(500).delay(7000).fadeOut(500, nep); 
	};
	var messages = [ 
       "PERSONAL EN",
	    "INNOVACIÓN",
	    "NUESTROS",
	    "FILOSOFÍA XP",
	    "OPORTUNIDAD"
	].reverse(); 

	var messa = [ 
       "DESARROLLO Y CRECIMIENTO.",
	    "EN TECNOLOGÍA DE PUNTA.",
	    "VALORES NOS DEFINEN.",
	    "MANTENIMIENTO EXTREMO. ",
	    "CON ALIANZAS ESTRATÉGICAS."
	].reverse(); 

	var mess= [ 
       "En Triskel nuestro Departamento de Ingeniería Especializada, está formado por personal egresado de dos de las mejores firmas internacionales: YORK Commercial & Industrial HVAC Systems, así como el Departamento de Servicio de Johnson Controls México sección Building Efficiency.",
	    "Aprendemos de la experiencia para diseñar e implementar soluciones en los proyectos y nos mantenemos en constante capacitación para poder estar al día en la evolución tecnológica.",
	    "Nos comportamos, expresamos y vivímos el día a día con rectitud, honradez y veracidad en todos nuestros actos, de acuerdo con las reglas y valores aceptados por la sociedad como: objetividad, respeto, honestidad, responsabilidad, calidad, y compromiso",
	    "Esta filosofía es el resultado de 10 años de observación y análisis del trabajo en Sinergia entre campo y oficina durante el proceso de mantenimiento a equipos de HVAC & R. Como resultado esto ayuda en el incremento de la vida útil de los equipos así como la reducción de gastos innecesarios.",
	    "Contamos con la experiencia necesaria para dar soporte, control, suministros y refacciones en marcas reconocidas como Dunham Bush, Carrier Totaline, Belimo, Source One, Climaproyectos y McQuay."
	].reverse(); 

	// initially hide the message
	$('#message').hide(); 
	$('#message2').hide(); 
	$('#message3').hide();


	// start animation  
	nep();
	nepe();
	nextMsg(); 


});