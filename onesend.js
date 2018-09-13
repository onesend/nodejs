const rp = require('request-promise-native');

let api_key;

const sendMessage = (group_key, message) => {
  if (!api_key) throw new Error('api key is missing is missing');
  if (!group_key) throw new Error('group key is missing');
  if (!message) throw new Error('message is missing');
  let options = {
    uri: `https://onesend-server.herokuapp.com/v1/message/${group_key}?api_key=${api_key}&type=node_module`,
    method: 'POST',
    body: { message },
    json: true,
  };

  return rp(options);
};

module.exports = {
  setApiKey: key => (api_key = key),
  sendMessage,
};
