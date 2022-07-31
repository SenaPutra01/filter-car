class App {
  constructor() {
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.find_availableAt_date = document.getElementById("form_date");
    this.find_availableAt_time = document.getElementById("form_time");
    this.find_capacity = document.getElementById("form_capacity");
  }

  async init() {
    await this.load();

    // Register click listener
    this.loadButton.onclick = this.run;
  }

  run = async () => {
    await this.load();
    this.clear();
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-12", "col-md-6", "col-lg-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const tanggal = this.find_availableAt_date.value;
    const jam = this.find_availableAt_time.value;
    const penumpang = this.find_capacity.value;

    const dateTime = new Date(`${tanggal} ${jam}`);

    const epochTime = dateTime.getTime();

    const cars = await Binar.listCars((item) => {
      const filterByCapacity = item.capacity <= penumpang;
      const filterByDate = item.availableAt.getTime() < epochTime;
      return filterByCapacity && filterByDate;
    });

    if (cars != "") {
      document.getElementById("none").innerHTML = "";
    } else {
      document.getElementById("none").innerHTML = "Not Available";
      console.log("Car: ", cars);
    }

    Car.init(cars);
  }

  // clear all car list
  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
