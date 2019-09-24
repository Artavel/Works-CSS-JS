function showSidebar() {
  // Подключаем Bootstrap
  var sidebarHTML = HtmlService.createHtmlOutputFromFile("index");
  var htmlOutput = HtmlService.createHtmlOutputFromFile("index").setTitle(
    "Калькулятор ВЕСА"
  );

  // https://developers.google.com/apps-script/reference/base/ui#showsidebaruserinterface
  SpreadsheetApp.getUi().showSidebar(htmlOutput);
}
// Функция onOpen() запускается всегда при открытии документа
// https://developers.google.com/apps-script/guides/triggers/#onopen

function onOpen() {
  // Создаём новое меню
  // https://developers.google.com/apps-script/reference/base/ui#createmenucaption
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Калькулятор веса", "showSidebar") // При нажатии на этот элемент меню откроется сайдбар
    .addToUi();
}

// Открытие сайдбара "Калькулятор веса"
//---------------------------------------------------------------------------------------------------------------------
function showSidebar() {
  // Подключаем Bootstrap
  var sidebarHTML = HtmlService.createHtmlOutputFromFile("index");
  var htmlOutput = HtmlService.createHtmlOutputFromFile("index").setTitle(
    "Калькулятор веса"
  );

  // https://developers.google.com/apps-script/reference/base/ui#showsidebaruserinterface
  SpreadsheetApp.getUi().showSidebar(htmlOutput);
}
