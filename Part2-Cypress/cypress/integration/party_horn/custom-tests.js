describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume number changes when slider number changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of <audio> changes when slider number changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when select party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg')
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
    });
  });

  it('Volume image changes when volume input changes: Level 0 -> Level 1', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    });
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });
  });

  it('Volume image changes when volume input changes: Level 1 -> Level 2', () => {
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });
  });

  it('Volume image changes when volume input changes: Level 2 -> Level 3', () => {
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    });
  });

  it('Honk button disabled when volume input is empty or non-number', () => {
    cy.get('#volume-number').clear().type('!');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled')
    });

    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled')
    });

  });
 
  it('Error shown if volume input number is out of given range', () => {
    cy.get('#volume-number').invoke('val', 101).trigger('input');
    cy.get('#honk-btn').click()
    cy.get('input:invalid').should('have.length', 1);

  });
});
