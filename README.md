#AlkFejl első beadandó doksi

#####1. Követelményanalízis
######Funkcionális elvárások:
A program lehetővé teszi a vendégfelhasználónak:
- A főoldal megtekintését
- A leírás megtekintését
- A regisztrációt

Ezenfelül a regisztrált felhasználók számára még:
- Az új feladatok létrehozását
- Létező feladatok módosítását
- Létező feladatok törlését
- A feladatok listájának megtekintését

######Nem funkcionális elvárások:
- Ergonomikus felület
- Biztonsági funkciók (jelszavak, hozzáférés)

######Használatieset-modell
Szerepkörök:
- Vendég: láthatja a kezdőoldalt, a leírást és regisztrálhat
- Felhasználó: Új feladatokat tud hozzáadni, törölni és módosítani a létezőket.

Használatieset-diagram:
![alt text](https://raw.githubusercontent.com/pamuaai/beadando/master/usecase.JPG "Use cases")

Új feladat létrehozásának folyamata:

![alt text](https://raw.githubusercontent.com/pamuaai/beadando/master/newUml.JPG "UML diagram for creating new entry")

- Oldaltérkép
    
		+ Publikus:
        
			- Főoldal
			- Leírás
			- Bejelentkezés
	  
		+ Felhasználó számára elérhető:
        
			- Főoldal
			- Leírás
			- Bejelentkezés/Kijelentkezés
			- Feladatok listája
				+ Új feladat felvétele
				+ Feladat módosítása
				+ Feladat törlése

    - Végpontok
    
        GET /: főoldal
		
	GET /about: leírás
        
        GET /login: bejelentkezés
        
        POST /login: bejelentkezési adatok küldése
        
        GET /login/signup: regisztáció
        
        POST /login/signup: regisztrációs adatok küldése
        
        GET /errors/list: feladat listázó oldal
        
        GET /errors/new: új feladat felvitele
        
        POST /errors/new: új feladat felvitele, adatok küldése
        
        GET /errors/:id: feladat adatait megváltoztató oldal
        
        POST /errors/:id: megváltoztatott adatok küldése
        
        GET /delete/:id: feladat törlése

2. Felhasználóifelület-modell
    - Oldalvázlatok
    ![Feladatok listázása](https://raw.githubusercontent.com/pamuaai/beadando/master/listDesign.jpg)
    ![Új feladat felvétele](https://github.com/pamuaai/beadando/blob/master/newDesign.jpg?raw=true)

3. Osztálymodell
    - Adatmodell
    
        ![Adatmodell](https://github.com/pamuaai/beadando/blob/master/DataModel.JPG?raw=true)

    - Adatbázisterv
    
        ![Adatbázisterv](https://github.com/pamuaai/beadando/blob/master/DatabaseModel.JPG?raw=true)
        
##Implementáció
1. Fejlesztői környezet bemutatása
    Cloud 9 webes IDE, ahova Github accounttal való belépés után új workspacet hozhatunk létre (new workspace). Itt egy fájlt futtathatunk például a webes terminálablakból, a node fájlnév paranccsal. 
    
2. Könyvtárstruktúrában lévő mappák funkiójának bemutatása
    - config: A Waterline konfigurációja (Waterline adatbázis absztrakciós réteg, gyűjteményeket, modelleket, adaptereket tartalmaz)
    - controllers: A vezérlő. Folyamatirányítás, kérés fogadása, feldolgozása 
    - models: Modellek definiálása, adatok és feldolgozási logika
    - viewmodels: Nézetmodell
    - views: A kimenetért felelős rész, vagyis az egyes oldalak szerkezetét, kinézetét adja meg

##Felhasználói dokumentáció
1. Környezet
    - A weboldal futtatásához ajánlott telepített Internet Explorer, Mozilla Firefox, Google Chrome böngésző, ha van rá mód a legfrisebb verzióban.
    - Fontos, hogy NoScript vagy hasonló plugint mely blokkolná az oldalon megjelenő scripteket, kapcsoljuk ki vagy az oldalt adjuk hozzá a kivételek listájához. Enélkül nem használható az oldal(mivel nagyrésze javascriptből épül fel).
2. Minimális gépigény
    - CPU: Intel Core 2 Duo 2,16 GHz , AMD Athlon2 340 X2 
    - Memória: 2 GB DDR3
    - HDD: 1 GB

