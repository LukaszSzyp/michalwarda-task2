describe("example", () => {
  it("shows data", () => {
    // given
    websiteIsOpened();

    // when

    // then
    inputLat();
    inputLon();
    switchRadioGroup1();
    clickButton();
    switchRadioGroup2();
    clickButton();
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function inputLat() {
  cy.get("input[id='lat']").should("be.visible").type("54");
}

function inputLon() {
  cy.get("input[id='lon']").should("be.visible").type("18");
}

function switchRadioGroup1() {
  cy.get("input[id='WeatherAPI']").click();
}
function switchRadioGroup2() {
  cy.get("input[id='Weather2020API']").click();
}

function clickButton() {
  cy.get(".checkWeather").click();
}
