
var request = '<?xml version="1.0" encoding="utf-8"?>' +
'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
  '<soap:Header>' +
    '<AuthenticationHeader xmlns="http://api.tradera.com">' +
      '<AppId>[APPID]</AppId>' +
      '<AppKey>[APIKEY]</AppKey>' +
    '</AuthenticationHeader>' +
    '<ConfigurationHeader xmlns="http://api.tradera.com">' +
      '<MaxResultAge>10000</MaxResultAge>' +
    '</ConfigurationHeader>' +
  '</soap:Header>' +
  '<soap:Body>' +
    '<Search xmlns="http://api.tradera.com">' +
      '<query>[SEARCH]</query>' +
      '<PageNumber>[PAGENUMBER]</PageNumber>' +
      '<OrderBy>Relevance</OrderBy>' +
      '<ItemCondition>OnlySecondHand</ItemCondition>' +
    '</Search>' +
  '</soap:Body>' +
'</soap:Envelope>'

module.exports = function(appId, appKey, options) {

  return request
  .replace("[APPID]", appId)
  .replace("[APIKEY]", appKey)
  .replace("[SEARCH]", options.searchQuery)
  .replace("[PAGENUMBER]", options.pageNumber);
}
