class Person {
    constructor(firstName, lastName, age, gender, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.email = email;
      this.addresses = []; // An array to store multiple addresses
    }
  
    // Getter for full name
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Add an address to the person's addresses
    addAddress(address) {
      this.addresses.push(address);
    }
  
    // Remove an address from the person's addresses by index
    removeAddress(index) {
      if (index >= 0 && index < this.addresses.length) {
        this.addresses.splice(index, 1);
      }
    }
  
    // Get the list of addresses
    getAddresses() {
      return this.addresses;
    }
  
    // Custom toString method to display person information, including addresses
    toString() {
      const addressList = this.addresses.length > 0 ? this.addresses.join(", ") : "No addresses";
      return `Person [Name=${this.getFullName()}, Age=${this.age}, Gender=${this.gender}, Email=${this.email}, Addresses=${addressList}]`;
    }
  }
  
  // Example usage:
  
  const person1 = new Person("John", "Doe", 30, "Male", "john@example.com");
  person1.addAddress("123 Main St, City A");
  person1.addAddress("456 Elm St, City B");
  
  console.log(person1.toString());
  
  // Remove an address
  person1.removeAddress(1);
  
  console.log(person1.toString());
  