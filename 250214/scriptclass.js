class Cylider {
  constructor(CylDiamenter, CylHeight) {
    this.diamenter = CylDiamenter;
    this.height = CylHeight;
  }

  getVolume() {
    const radius = this.diamenter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}
