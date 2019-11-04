let arrListCustomer=[];

function Customer() {
    this.name= prompt("Enter Customer name");
    this.id=prompt("Enter ID");
    this.email=prompt("Enter Email ") ;
    this.birthday= prompt("Enter birtday");
    this.address= prompt("Enter address");
    this.typeCustomer= prompt("Enter type customer");
    this.discount=prompt("Enter discount");
    this.typeRoom=prompt("Enter type Room");
    this.rentDays = prompt("Enter rent day");
    this.typeService= prompt("Enter Type Service");
    this.displayInformationCustomer= function () {
        return "1.Name: "+this.name+
            "\n2.ID: "+this.id+
            "\n3.Email: "+this.email+
            "\n4.Birthday: "+this.birthday+
            "\n5.Address: "+this.address+
            "\n6.Type: "+this.typeCustomer+
            "\n7.Discount: "+this.discount+
            "\n8.Type Room: "+this.typeRoom+
            "\n9.RentDays: "+this.rentDays+
            "\n10.Type Service"+this.typeService;
    };
    this.getID= function () {
        return this.id;
    };
    this.getName=function () {
        return this.name;
    };
}
Customer.prototype.editInformationCustomer=function () {
    let text=this.displayInformationCustomer()+'\n11.Back';
    let choose= prompt("Choose:\n"+text);
    switch (choose) {
        case '1':
            this.name=prompt("Enter new name:");
            break;
        case '2':
            this.id= prompt("Enter new id");
            break;
        case '3':
            this.email= prompt("Enter new email");
            break;
        case '4':
            this.birthday= prompt("Enter new birthday:");
            break;
        case '5':
            this.address=prompt("Enter new address:");
            break;
        case '6':
            this.typeCustomer=prompt("Enter new type of Customer");
            break;
        case '7':
            this.discount=prompt("Enter new discount");
            break;
        case '8':
            this.typeRoom=prompt("Enter new type of room");
            break;
        case '9':
            this.rentDays=prompt("Enter new rent days");
            break;
        case '10':
            this.typeService=prompt("Enter new type of service");
            break;
        case '11':
            editCustomer(); break;
        default: this.editInformationCustomer();
    }
    this.editInformationCustomer();
};

function addNewCustomer() {
    let customer= new Customer();
    arrListCustomer.push(customer);
    displayMainMenu();
}

function displayCustomers() {
    let text='';
    for (let i=0;i<arrListCustomer.length;i++){
        text+= (i+1)+".Name: "+arrListCustomer[i].getName()+" ID: "+arrListCustomer[i].getID()+"\n";
    }
    let choose= parseInt(prompt(text+(arrListCustomer.length+1)+".Back"));
    if(choose===arrListCustomer.length+1){
        displayMainMenu();
    }else if (choose>arrListCustomer.length+1){
        displayCustomers();
    } else {
        alert(arrListCustomer[choose-1].displayInformationCustomer()+'');
        displayMainMenu();
    }
}

function editCustomer() {
    let text='Chose:\n';
    for (let i=0;i<arrListCustomer.length;i++){
        text+=(i+1)+".Name: "+arrListCustomer[i].getName()+" ID: "+arrListCustomer[i].getID()+"\n";
    }
    let choose= parseInt(prompt(text+(arrListCustomer.length+1)+".Back"));
    if(choose!==arrListCustomer.length+1){
        if (choose>arrListCustomer.length+1){
            editCustomer();
        }else{
            arrListCustomer[choose-1].editInformationCustomer()
        }
    } else {
        displayMainMenu();
    }
}

function deleteCustomer() {
    let text='Chose:\n';
    for (let i=0;i<arrListCustomer.length;i++){
        text+=(i+1)+".Name: "+arrListCustomer[i].getName()+" ID: "+arrListCustomer[i].getID()+"\n";
    }
    let choose= parseInt(prompt(text+(arrListCustomer.length+1)+".Back"));
    if(choose!==arrListCustomer.length+1){
        if (choose>arrListCustomer.length+1){
            deleteCustomer();
        }else{
           let customer=choose;
           console.log(customer);
           choose=0;
           while (choose!==1&&choose!==2){
               choose= parseInt( prompt("Do you want do delete\n1.Yes\n2.No"));
               console.log(choose);
            }
           switch (choose) {
               case 1:
                   alert("Delete complete");
                   for(let i=customer;i<arrListCustomer.length;i++){
                       if(i!==arrListCustomer.length-1)
                           arrListCustomer[i]=arrListCustomer[i+1];
                   }
                   arrListCustomer.pop();
                   displayMainMenu();
                        break;

               case 2:
                   deleteCustomer();
           }
        }
    } else {
        displayMainMenu();
    }
}


function displayMainMenu() {
    let temp= prompt("1.Add New Customer\n2.Display Information Center\n3.Edit Information Customer\n4.Delete Customer\n5.Exit");
    switch (temp) {
        case '1':
            addNewCustomer();
            break;
        case '2':
            displayCustomers();
            break;
        case '3':
            editCustomer();
            break;
        case '4':
            deleteCustomer();
            break;
        case '5': break;
        default:
            displayMainMenu();
    }
}

