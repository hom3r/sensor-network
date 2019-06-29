'use strict';

module.exports = {
  list: (request, h) => {
    return [{
      id: 1,
      name: "Temperature sensor",
      lastActivity: Date.now(),
    }, {
      id: 2,
      name: "Soil moisture sensor",
    }];
  },

  getOne: (request, h) => {
    try {
        const id = "" + request.params.id;
        const response = {
          id: id,
          name: "TODO",
        }
        return h.response(response);
    } catch (ex) {
        console.error(ex);
        return h.response({
            "Error": ex
        }).code(500);
    }
  },

  // createEntry: (request, h) => {
  //       try {
  //           const id = "" + request.params.id;
  //           const today = new Date();
  //           const params = JSON.parse(request.payload);
  //           const temp = parseFloat(params.temperature);
  //           const pressure = parseFloat(params.pressure);
  //     	    const humidity = parseFloat(params.humidity);
  //     	    const moisture = parseFloat(params.moisture);
  //
  //           // TODO try to get also sensor time for delayed requests?
  //           // TODO use date and time
  //           const date = today.toLocaleDateString('en-US');
  //           const time = today.toLocaleTimeString('en-US');
  //
  //           // collection entry
  //           const entry = {
  //               "sensor_id": id,
  //               "temperature": temp,
  //               "pressure": pressure,
  //               "time": today,
  //           		"humidity": humidity,
  //           		"moisture": moisture,
  //           };
  //
  //       } catch (ex) {
  //           return h.response({
  //               "Error": ex
  //           }).code(500);
  //       }
  //   }
};
