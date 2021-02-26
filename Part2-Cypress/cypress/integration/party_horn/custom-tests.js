describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
      .then(function($el) {
        expect($el).to.have.value(75);
      });  
  });

  it('volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
      .then(function($el) {
        expect($el).to.have.value(33);
      });  
  });

  it('volume of audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound')
      .then(function($el) {
        expect($el).to.have.prop('volume', 0.33);
      });  
  });

  it('image and sound sources change for party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#horn-sound')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
      }); 
    cy.get('#sound-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
      });
  });

  it('volume image changes from mute to level 1 when volume increases from 0 to 1', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
      }); 
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      }); 
  });

  it('volume image changes from level 1 to level 2 when volume increases from 33 to 34', () => {
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      }); 
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      }); 
  });

  it('volume image changes from level 2 to level 3 when volume increases from 66 to 67', () => {
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      }); 
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image')
      .then(function($el) {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
      }); 
  });

  it('disbled honk when textbox empty or non-number', () => {
    cy.get('#volume-number').clear().type(' ');
    cy.get('#honk-btn')
      .then(function($el) {
        expect($el).to.have.attr('disabled');
      }); 
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn')
        .then(function($el) {
          expect($el).to.have.attr('disabled');
        });  
  });

  it('error for outside range in volume textbox input', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#honk-btn').click().log();
    cy.get('#volume-number').clear().type('-1');
    cy.get('#honk-btn').click().log();
  });


});
