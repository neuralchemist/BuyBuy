/// <reference types="cypress" />

describe("Cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Buy an item from ecommerce store", () => {

    /* ==== initially nav-cart-badge shows 0 item ====  */
    cy.get(".MuiBadge-badge").contains("0").should("be.visible");

    /**=== select 3 items and assert nav-cart-badge shows 3 items  === */
    cy.get("button[test-id='add to cart']").eq(0).click();
    cy.get("button[test-id='add to cart']").eq(1).click();
    cy.get("button[test-id='add to cart']").eq(2).click();
    cy.get(".MuiBadge-badge").contains("3").should("be.visible");

    
    /*=== checkout items and navigate to address form === */
    // click nav-cart-icon 
    cy.get("a[aria-label='Show cart items']").click();
    // click checkout
    cy.get("button").contains("Checkout").click();

    /*=== fill address form and navigate to payment form  ===*/ 
    cy.get("input[name='firstName']").type("Tom");
    cy.get("input[name='lastName']").type("Cruise");
    cy.get("input[name='email']").type("tom.cruise@hollywood.com");
    cy.get("input[name='address1']").type("Beverly Hills");
    cy.get("input[name='city']").type("Los Angeles");
    cy.get("input[name='zip']").type("90210");
    cy.get("#mui-component-select-shippingCountry").click();
    cy.get("li[data-value='united states']").click();
    cy.get("#mui-component-select-shippingSubdivision").click();
    cy.get("li[data-value='california']").click();
    cy.get("#mui-component-select-shippingOption").click();
    cy.get("li[data-value='fast']").click();
    // click 'Next'
    cy.get("button").contains("Next").click();

    /*=== fill stripe card information and click pay === */ 
    cy.fillElementsInput("cardNumber", "4242424242424242");
    cy.fillElementsInput("cardExpiry", "1130"); // MMYY
    cy.fillElementsInput("cardCvc", "123");
    cy.fillElementsInput("postalCode", "90210");
    // click 'Pay'
    cy.get("button").contains("Pay").click();

    /*=== assert confirmation message and navigate back to home page */ 
    cy.contains("Thank you for your purchase, Tom Cruise").should("be.visible");
    // click 'Back to Shopping'
    cy.get("a").contains("Back to Shopping").click();
    // nav-cart-badge shows 0 item
    cy.get(".MuiBadge-badge").contains("0").should("be.visible");

  });
});
