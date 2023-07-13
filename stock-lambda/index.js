const axios = require('axios').default

// function delay(time) {
//   return new Promise(resolve => setTimeout(resolve, time))
// }

module.exports.handler = async (event) => {
  // await delay(6000)
  const result = JSON.parse(event.Records[0].body)
  console.log(result)
    const payload = {
      MessageGroupId : result.MessageId,
      MessageAttributeProductId : result.MessageAttributes.MessageAttributeProductId.Value,
      MessageAttributeProductCnt : 10,
      MessageAttributeFactoryId : result.MessageAttributes.MessageAttributeFactoryId.Value,
      MessageAttributeRequester : "주민경",
      CallbackUrl : "https://xxzamkngog.execute-api.ap-northeast-2.amazonaws.com/product/donut"
    };
  console.log(payload)

  axios.post('http://project3-factory.coz-devops.click/api/manufactures', payload)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
  console.log(error)});
};
