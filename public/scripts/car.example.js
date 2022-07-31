class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card card-item">
        <div class="card-body">
          <img src="${this.image}" alt="${this.manufacture}" class="image-car">
          <div class="text-description">
            <p clas="item-name">${this.type} / ${this.model}</p>
            <p class="price">Rp. ${this.rentPerDay
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari</p>
            <p class="description">${this.description}</p>
            <div class="capacity-item">
              <i class="fa-solid fa-user-group"></i>
              <p class="capacity">${this.capacity} orang</p>
            </div>
            <div class="capacity-item">
              <i class="fa-solid fa-gear"></i>
              <p class="tranmision">${this.transmission}</p>
            </div>
            <div class="capacity-item">
              <i class="fa-solid fa-calendar"></i>
              <p class="year">${this.year}</p>
            </div>
          </div>
          <a href="#" class="btn btn-pilih" style="width: 100%">Pilih Mobil</a>
        </div>
      </div>
    `;
  }
}
