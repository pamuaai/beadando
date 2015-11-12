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
