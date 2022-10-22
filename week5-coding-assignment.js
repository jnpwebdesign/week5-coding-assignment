/* 
•	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
•	Use at least one array.
•	Use at least two classes.
•	Your menu should have the options to create, view, and delete elements.


type of session -- family portraits, corporate headshot, engagement portraits, wedding

// teams (video) = clients (my code)
//players (video) = outfit (my code)

*/
console.log("WEEK5-CODING-ASSIGNMENT");


class Outfit {
    constructor(outfitConstructor, pattern) {
        this.outfitConstructor = outfitConstructor;
        this.pattern = pattern;
        this.chestMeasurement = chestMeasurement;
        this.waistMeasurement = waistMeasurement;
        this.height = height;
        this.fabric = fabric;
    }
    describe() {
        return `${this.outfitConstructor} uses the ${this.pattern} pattern.`
    }
    
}

class Client {
    constructor(clientName, emailAddress, local, kidsNames) {
        this.clientName = clientName;
        this.emailAddress = emailAddress;
        this.local = local;
        this.kidsNames = kidsNames;
        this.outfits = [];
    }


    addOutfit(outfitName) {
        if (outfitName instanceof Outfit) {
            this.outfits.push(outfitName);
        } else {
            throw new Error(`${outfitName} has not yet been created.`)
        }
    }


    describe() {
        if (this.local === true) {
            return `${this.clientName} lives locally and can be reached at ${this.emailAddress}.`
        } else {
            return `${this.clientName} is not local and can be reached at ${this.emailAddress}.`
        }
    }
}

class mainMenu {
    constructor() {
        this.arrayOfClients = [];
        this.selectedClient = null; 
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 5) {
            switch(selection) {
                case '1':
                    this.createClientRecord();
                    break;
                case '2':
                    this.viewIndividualClientOutfits();
                    break;
                case '3':
                    this.deleteClient();
                    break;
                case '4':
                    this.displayClients();
                    break;
                default:
                    selection = 5;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye!")
    }

    showMainMenuOptions() {
        return prompt(`
            Welcome to Custom Kids' Clothes! What would you like to do?

            1) Register New Client
            2) View/Add/Delete an Outfit
            3) Delete Existing Client
            4) Display All Clients
            5) Exit Application
        `);
    }
            

    showOutfitMenuOptions(clientInfo) {

        return prompt(`
        Client: ${clientInfo}. Please choose an option:
        ----------------------------------------------
            1) Add New Outfit
            2) Delete Existing Outfit
            3) Go Back to Main Menu`
        );
    }

    displayClients() {
        let stringOfClients = "";
        for (let i = 0; i < this.arrayOfClients.length; i++) {
            stringOfClients += `\n ${i}) ${this.arrayOfClients[i].clientName}` 
        }
        alert(`Here's a list of all the clients ${stringOfClients}`);
    }   

    createClientRecord() {
        let clientName = prompt("Enter name of new client:");
        if (!this.arrayOfClients.some((client) => { return client.clientName === clientName})) {
            console.log(clientName);
            this.arrayOfClients.push(new Client(clientName));
        } else {
            alert("That client's information has already been logged.")
        }
    } 
        
    viewIndividualClientOutfits(){
        let stringOfClients = this.arrayOfClients.map(function(individualClientElement) {
            return individualClientElement.clientName;
        });
    let index = prompt(`Which client's outfits would you like to view? Choose a number`);
    if (index >= 0 && index < this.arrayOfClients.length) {
        this.selectedClient = this.arrayOfClients[index];
        let clientRoster = `Client Name: ${this.selectedClient.clientName}`;
        for (let j = 0; j < this.selectedClient.outfits.length; j++) {
            clientRoster += `${j} ${this.selectedClient.outfits[j].outfitName}, ${this.selectedClient.outfits[j].pattern}`;
        }
        
        let selection = this.showOutfitMenuOptions(clientRoster);
        switch (selection) {
            case "1": 
                this.createOutfit();
                break;
            case "2":    
                this.deleteOutfit();
            default:
                selection = 3;
        }
            selection = this.showOutfitMenuOptions();
        } else {
            alert("Sorry, that's an invalid entry. Try again.");
        }    
    }

    deleteClient() {
        let stringOfClients = this.arrayOfClients.map(function(individualClientElement) {
            return individualClientElement.clientName;
        });
        let index = prompt("Which client do you want to delete? Choose a number.");
        if (index >= 0 && index < this.arrayOfClients.length) {
            this.selectedClient = this.arrayOfClients[index];
            let deletedClient = this.selectedClient.splice(index, 1);
            alert(deletedClient + ": this team has been deleted");
        } else {
            alert("This number does not correspond to a team.")
        }
    }
    
    createOutfit() {
        let outfitConstructor = prompt("Enter name for new outfit:");
        let pattern = prompt("Enter sewing pattern:");
        this.selectedClient.outfits.push(new Outfit(outfitConstructor, pattern));
    }

    deleteOutfit() {
        let index = prompt("Enter the index of the outfit you wish to delete:");
        if (index > -1 && index < this.selectedClient.outfits.length) {
            this.selectedClient.outfits.slice(index, 1);
        } else {
            alert("Sorry, that outfit does not exist.");
        }
    }
}

let menu = new mainMenu();
menu.start();






































