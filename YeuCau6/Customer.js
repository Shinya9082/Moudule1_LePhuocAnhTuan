function Customer() {
    this.setName(prompt("Enter Customer name")) ;
    this.setID(prompt("Enter ID"));
    this.setEmail(prompt("Enter Email "));
    this.setBirthDay(prompt("Enter birthday"));
    this.setAddress(prompt("Enter address"));
    this.setTypeCustomer(prompt("Enter type customer"));
    this.setDiscount(prompt("Enter discount"));
    this.setTypeRoom(prompt("Enter type Room"));
    this.setRentDays( prompt("Enter rent day"));
    this.setAccompanyPeople(prompt("Enter Accompany People"));
    this.setTypeService(prompt("Enter Type Service"));
}
Customer.prototype.displayInformationCustomer=function () {
    return "1.Name: " + this.getName() +
        "\n2.ID: " + this.getID() +
        "\n3.Email: " + this.getEmail() +
        "\n4.Birthday: " + this.getBirthday() +
        "\n5.Address: " + this.getAddress() +
        "\n6.Type: " + this.getTypeCustomer() +
        "\n7.Discount: " + this.getDiscount() +
        "\n8.Type Room: " + this.getTypeRoom() +
        "\n9.RentDays: " + this.getRentDays() +
        "\n10.Accompany people: "+ this.getAccompanyPeople()+
        "\n11.Type Service" + this.getTypeService();
};
Customer.prototype.getName=function () {
   return this.name;
};
Customer.prototype.setName=function (name) {
    this.name=name;
};
Customer.prototype.getID=function () {
    return this.id;
};
Customer.prototype.setID=function (id) {
    this.id=id;
};
Customer.prototype.getEmail=function () {
    return this.email;
};
Customer.prototype.setEmail=function (email) {
    let re1= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    while(!re1.test(email)){
        email = prompt("Incorrect email!! Please correct email Ex:aba@abc.abc ");
    }
    this.email=email;
};
Customer.prototype.getBirthday=function () {
    return this.birthday;
};
Customer.prototype.setBirthDay=function (birthday) {
    let dateTime = new RegExp("\\b(\\d{1,2})/(\\d{1,2})/(\\d{4})\\b") ;
    while (!dateTime.test(birthday)||!checkDate()) {
        birthday=prompt("Incorrect Birthday setting\nEx:dd/mm/yyyy")
    }

    function checkDate() {
        let match = dateTime.exec(birthday);
        return !(match[3] < 1900 || match[3] > 2019 || match[2]>12 ||match[2] <1|| match[1]>31 || match[1]<1);
    }
    this.birthday=birthday;
};

Customer.prototype.getAddress=function () {
    return this.address;
};
Customer.prototype.setAddress=function (address) {
    this.address=address;
};
Customer.prototype.getTypeCustomer=function () {
    return this.typeCustomer;
};
Customer.prototype.setTypeCustomer=function (cus) {
    this.typeCustomer=cus;
};
Customer.prototype.getDiscount=function () {
    return this.discount;
};
Customer.prototype.setDiscount=function (discount) {
    this.discount=discount;
};
Customer.prototype.getTypeRoom=function () {
    return this.typeRoom;
};
Customer.prototype.setTypeRoom=function (typeroom) {
    this.typeRoom=typeroom;
};
Customer.prototype.getRentDays=function () {
    return this.rentDays;
};
Customer.prototype.setRentDays=function (rentdays) {
    this.rentDays=rentdays;
};
Customer.prototype.getAccompanyPeople=function () {
    return this.accompanyPeople;
};
Customer.prototype.setAccompanyPeople=function(AccompanyPeople){
    this.accompanyPeople=AccompanyPeople;
};
Customer.prototype.getTypeService=function () {
    return this.typeService;
};
Customer.prototype.setTypeService=function(TypeService){
    this.typeService=TypeService;
};
Customer.prototype.getPrice=function () {
    let price=0;
    this.getTypeService()==='Villa'? price=500:
        this.getTypeService()==="House"? price=300:
            this.getTypeService()==="Room"? price===100:
                price=-1;
    return price*this.rentDays*(1-this.discount/100);
};