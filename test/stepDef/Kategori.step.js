const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../Pages/login.page');
const KategoriPage = require('../Pages/Kategori.page');






Given(/^I open Web Kasir Aja$/, async () => {
  await KategoriPage.open();
});

When(/^I login with valid username and valid Password$/, async () => {
  await LoginPage.login('YOB@gmail.com', 'YOB12345');
});

Then(/^I successfully login web KasirAja$/, async () => {
  await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/dashboard');
  await LoginPage.validatepage()
});

When(/^I click sidebarmenu Kategori$/, async () => {
    await(await KategoriPage.sidebarKategori).click();
  });
  
Then(/^I should be on the Kategori page$/, async () => {
   await KategoriPage.validateHomePageKategori()
  });

  //
When(/^I Click Tambah$/, async () => {
    await KategoriPage.ClikTambahbutton();
  });

Then(/^I should be on the Create Kategori page$/, async () => {
    await KategoriPage.validatePageKategoriCreate()
   });


// 

When(/^I input nama kategori$/, async () => {
    await KategoriPage.InputnamaKategori('ATTESTING');
  });

When(/^I input Deskripsi kategori$/, async () => {
    await KategoriPage.InputDeskripsiKategori('test kategori with automation WDIO cucumber');
  });

When(/^I click button Simpan$/, async () => {
    await KategoriPage.ClikSimpanbutton();
  });

Then(/^I successfully input and create Kategori$/, async () => {
    await KategoriPage.ValidatedataCreated('ATTESTING')
   });

//

When(/^I input search Kategori with Deskripsi$/, async () => {
    await KategoriPage.SearchFilter('test kategori with automation WDIO cucumber');
  });

Then(/^I can't display search Kategori and display no data$/, async () => {
    await KategoriPage.ValidateNodata()
   });


