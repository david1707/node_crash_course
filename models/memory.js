const memoriesList = [];

module.exports = class Memory {
  constructor(cityName, imageURL) {
    this.cityName = cityName;
    this.imageURL = imageURL;
  }

  save() {
    memoriesList.push(this);
  }

  static getMemories() {
      return memoriesList
  }
};
