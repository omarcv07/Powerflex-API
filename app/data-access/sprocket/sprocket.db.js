const makeSprocketDb = ({ Sprocket }) => {
  async function findAll () {
    const sprockets = Sprocket.findAll();
    return sprockets;
  }
  async function findOne (id) {
    console.log('SprocketSprocket', Sprocket);
    const sprocket = await Sprocket.findByPk(id);
    return sprocket;
  }
  async function insert (sprocketData) {
    return Sprocket.create(sprocketData);
  }
  async function update (id, sprocketData = {}) {
    const sprocket = await Sprocket.findByPk(id);

    if (!sprocket) {
      throw new Error('Sprocket not found');
    }

    const { teeth, pitch_diameter, outside_diameter, pitch } = sprocketData;

    sprocket.teeth = teeth;
    sprocket.pitch_diameter = pitch_diameter;
    sprocket.outside_diameter = outside_diameter;
    sprocket.pitch = pitch;

    await sprocket.save();

    return sprocket;
  }
  return Object.freeze({
    findAll,
    findOne,
    insert,
    update
  });
};

module.exports.makeSprocketDb = makeSprocketDb;
