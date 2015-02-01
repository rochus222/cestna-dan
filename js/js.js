var mesiac = 12;
var rok = 2015;

function zrus_reklamu()
{
	$('#clona').fadeOut();
	$('#vyskoc').fadeOut();
}

function zmen_konecny_datum()
{
	zvoleny_konecny_mesiac = vrat_hodnotu_zo_select("konecny_mesiac");
	zvoleny_konecny_rok = vrat_hodnotu_zo_select("konecny_rok");
	mesiac = zvoleny_konecny_mesiac;
	rok = zvoleny_konecny_rok;
	document.getElementById("konecny_datum_a").innerHTML="Výpočet k 31." + mesiac + "." + rok + " &dArr;";
}

function zmen_hodnotu_check()
{
	var check = document.getElementById("hybrid").checked;
	if(check==true) document.getElementById("hybrid").checked=false;
	else document.getElementById("hybrid").checked=true;
}

function otvor_popis(nazov)
{
	$('#' + nazov).slideToggle();
}

function vypis_formular_vozidla()
{
	var zvoleny_typ_vozidla = vrat_hodnotu_zo_select("typ_vozidla");
	var typy_vozidiel=typ_vozidla();
	var i=0;
	while (i<typy_vozidiel.length)
	{
		if(typy_vozidiel[i]==zvoleny_typ_vozidla) document.getElementById(typy_vozidiel[i]).setAttribute("class","zobrazeny");
		else document.getElementById(typy_vozidiel[i]).setAttribute("class","nezobrazeny");
		i++;
	}
}

function zmen_pripustnu_hmotnost()
{
	var zvoleny_pocet_naprav = vrat_hodnotu_zo_select("pocet_naprav");
	var pocty_naprav=pocet_naprav();
	var i=0;
	while (i<pocty_naprav.length)
	{
		if(pocty_naprav[i]==zvoleny_pocet_naprav) document.getElementById(pocty_naprav[i] + "_napravy").setAttribute("class","zobrazeny");
		else document.getElementById(pocty_naprav[i]  + "_napravy").setAttribute("class","nezobrazeny");
		i++;
	}
}

function vrat_hodnotu_zo_select(nazov)
{
	var e = document.getElementById(nazov);
	var hodnota = e.options[e.selectedIndex].value;
	return hodnota;
}

function typ_vozidla()
{
	var typ_vozidla=["osobne-vozidlo", "uzitkove-vozidlo", "elektromobil"];
	return typ_vozidla;
}

function pocet_naprav()
{
	var typ_vozidla=["2", "3", "4"];
	return typ_vozidla;
}

function vypocitaj()
{
	var zaklad = vypocitaj_zakladnu_sadzbu();
	var prirazka = urci_prirazku();
	var hybrid = document.getElementById("hybrid").checked;
	if(hybrid=="1")
	{
		var vysledok = (zaklad + (prirazka/100)*zaklad)/2;
		string ="(" + zaklad + "€ + (" + prirazka + "%))/2 = <b>" + vysledok.toFixed(2) + "€*</b>";
	}
	else
	{
		var vysledok = zaklad + (prirazka/100)*zaklad;
		string = zaklad + "€ + (" + prirazka + "%) = <b>" + vysledok.toFixed(2) + "€*</b>";
	}
	document.getElementById("vysledok").innerHTML=string;
}

function zmaz_vysledok()
{
	document.getElementById("vysledok").innerHTML="&nbsp;";
}

function vypocitaj_zakladnu_sadzbu()
{
	
	var zvoleny_typ_vozidla = vrat_hodnotu_zo_select("typ_vozidla");
	var zvoleny_objem_valcov = vrat_hodnotu_zo_select("objem_valcov");
	var zvoleny_pocet_naprav = vrat_hodnotu_zo_select("pocet_naprav");
	var zvoleny_celkova_hmotnost = vrat_hodnotu_zo_select(zvoleny_pocet_naprav + "_hmotnost");
	var vysledok = 0;
	if(zvoleny_typ_vozidla=="osobne-vozidlo")
	{
		
		switch (zvoleny_objem_valcov)
		{
			case "150": 
				vysledok = 50; 
				break; 
			case "900": 
				vysledok = 62; 
				break; 
			case "1200": 
				vysledok = 80;
				break; 
			case "1500": 
				vysledok = 115; 
				break; 
			case "2000": 
				vysledok = 148; 
				break; 
			case "3000": 
				vysledok = 180; 
				break; 
			case "4000": 
				vysledok = 218; 
				break; 
		}	
	} else if(zvoleny_typ_vozidla=="uzitkove-vozidlo")
	{
		if(zvoleny_pocet_naprav=="2")
		{
			switch (zvoleny_celkova_hmotnost)
			{
				case "1": 
					vysledok = 74; 
					break; 
				case "2": 
					vysledok = 133; 
					break; 
				case "4": 
					vysledok = 212; 
					break; 
				case "6": 
					vysledok = 312; 
					break; 
				case "8": 
					vysledok = 417; 
					break; 
				case "10": 
					vysledok = 518; 
					break; 
				case "12": 
					vysledok = 620; 
					break; 
				case "14": 
					vysledok = 777; 
					break; 
				case "16": 
					vysledok = 933; 
					break; 
				case "18": 
					vysledok = 1089; 
					break; 
				case "20": 
					vysledok = 1252; 
					break;
				case "22": 
					vysledok = 1452; 
					break;
				case "24": 
					vysledok = 1660; 
					break;
				case "26": 
					vysledok = 1862; 
					break;
				case "28": 
					vysledok = 2075; 
					break;
				case "30": 
					vysledok = 2269; 
					break;
				case "32": 
					vysledok = 2480; 
					break;
			}	
		}else if (zvoleny_pocet_naprav=="3")
		{
		
			switch (zvoleny_celkova_hmotnost)
			{
				case "15": 
					vysledok = 566; 
					break; 
				case "17": 
					vysledok = 673; 
					break; 
				case "19": 
					vysledok = 828; 
					break; 
				case "21": 
					vysledok = 982; 
					break; 
				case "23": 
					vysledok = 1144; 
					break; 
				case "25": 
					vysledok = 1295; 
					break; 
				case "27": 
					vysledok = 1452; 
					break; 
				case "29": 
					vysledok = 1599; 
					break; 
				case "31": 
					vysledok = 1755; 
					break; 
				case "33": 
					vysledok = 1964; 
					break; 
				case "35": 
					vysledok = 2172; 
					break; 
				case "37": 
					vysledok = 2375; 
					break; 
				case "40": 
					vysledok = 2582; 
					break; 
				case "42": 
					vysledok = 2790; 
					break; 
			}	
		}else if(zvoleny_pocet_naprav=="4")
		{
			switch (zvoleny_celkova_hmotnost)
			{
				case "23": 
					vysledok = 721; 
					break; 
				case "25": 
					vysledok = 877; 
					break; 
				case "27": 
					vysledok = 1033; 
					break; 
				case "29": 
					vysledok = 1189; 
					break; 
				case "31": 
					vysledok = 1337; 
					break; 
				case "33": 
					vysledok = 1548; 
					break; 
				case "35": 
					vysledok = 1755; 
					break; 
				case "37": 
					vysledok = 1968; 
					break; 
				case "40": 
					vysledok = 2172; 
					break; 
				case "42": 
					vysledok = 2375; 
					break; 
			}	
		}
	} else if(zvoleny_typ_vozidla=="elektromobil")
	{
		vysledok=0;
	}
	return vysledok;
}

function vypocitaj_pocet_mesiacov()
{
	var zvoleny_mesiac = vrat_hodnotu_zo_select("mesiac");
	var zvoleny_rok = vrat_hodnotu_zo_select("rok");
	var pocet_mesiacov = mesiac - zvoleny_mesiac + 1;
	var pocet_rokov = rok - zvoleny_rok;
	pocet_mesiacov = pocet_mesiacov + pocet_rokov*12;
	return pocet_mesiacov;
}

function urci_prirazku()
{
	var pocet_mesiacov = vypocitaj_pocet_mesiacov();
	var prirazka=0;
	if(pocet_mesiacov<=36)prirazka=-25;
	else if(pocet_mesiacov<=72)prirazka=-20;
	else if(pocet_mesiacov<=108)prirazka=-15;
	else if(pocet_mesiacov<=108)prirazka=-15;
	else if(pocet_mesiacov<=144)prirazka=0;
	else if(pocet_mesiacov<=156)prirazka=10;
	else if(pocet_mesiacov>156)prirazka=20;
	return prirazka;
}