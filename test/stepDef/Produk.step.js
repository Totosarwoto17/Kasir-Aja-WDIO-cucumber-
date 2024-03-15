const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../Pages/login.page');
const ProdukPage = require('../Pages/Produk.page');


Given(/^I open the KasirAja website$/, async () => {
  await ProdukPage.open();
});

When(/^I login with valid credentials$/, async () => {
  await LoginPage.login('YOB@gmail.com', 'YOB12345');
  await browser.pause(2000)
});

Then(/^I successfully login KasirAja$/, async () => {
  await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/dashboard');
  await LoginPage.validatepage()
});


When(/^I click sidebarmenu Produk$/, async () => {
  await(await ProdukPage.sidebarProduk).click();
  await browser.pause(3000)
});

Then(/^I should be on the Produk page$/, async () => {
  await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/products');
  await ProdukPage.validateTable()
});

//

Given(/^I open the page sidebarmenu Produk KasirAja$/, async () => {
  await(await ProdukPage.sidebarProduk).click();
});

When(/^I Click button Tambah$/, async () => {
  await ProdukPage.ClikButtonTambah(
)
});

Then(/^I successfully Direct Dasboard Create Produk$/, async () => {
  await ProdukPage.validatepageCreateProduk();
});

//

Given(/^I open the page Produk Create$/, async () => {
  await ProdukPage.validatepageCreateProduk();
});

When(/^I input kode on page Create Produk$/, async () => {
  await ProdukPage.InputkodeProduk('TesAT123')
});

Then(/^I successfully Delete kode When input  new Kode Produk display$/, async () => {
  await ProdukPage.ValidateInput('TesAT123');
});

//
When(/^I input nama on page Create Produk$/, async () => {
  await ProdukPage.InputnamaProduk('Beras 10KG')
});

Then(/^I successfully Input When display nama  Produk$/, async () => {
  await ProdukPage.ValidateInput('Beras 10KG');
});

//
When(/^I input Deskripsi on page Create Produk$/, async () => {
  await ProdukPage.InputdeskripsiProduk('Beras 10KG dengan netto berat bersih 220')
});

Then(/^I successfully Input When display Deskripsi  Produk$/, async () => {
  await ProdukPage.ValidateInput('Beras 10KG dengan netto berat bersih 220');
});
//

When(/^I delete kode When kode is empty$/, async () => {
  await ProdukPage.DeletekodeProduk()
});

When(/^user fill harga beli$/, async () => {
  await ProdukPage.Inputhargabeli('100000')
});

When(/^user fill harga jual$/, async () => {
  await ProdukPage.Inputhargajual('120000')
});

When(/^user fill stok$/, async () => {
  await ProdukPage.Inputstok('100')
});

When(/^user select kategori$/, async () => {
  await ProdukPage.PilihKategori('Umum')
});

When(/^user Click button submit$/, async () => {
  await ProdukPage.ClikButtonsimpan()
});

Then(/^user can't  save Produk When Display notif code is not allowed to be empty$/, async () => {
  await ProdukPage.ValidatePopUpRequired('kode')
});


//

When(/^I fill code Produk$/, async () => {
  await ProdukPage.InputkodeProduk('TesAT123')
});

When(/^I input harga beli$/, async () => {
  await ProdukPage.Deletehargabeli()
  await ProdukPage.Inputhargabeli('12000')
});

When(/^I input harga jual$/, async () => {
  await ProdukPage.Deletehargajual()
  await ProdukPage.Inputhargajual('10000')
});

When(/^I click button simpan$/, async () => {
 await ProdukPage.ClikButtonsimpan();
});

Then (/^user can't  save Produk When Display notif price must be greater than ref:cost$/, async () => {
  await ProdukPage.ValidatePopUpRequired('Price')
});

//

When(/^I input harga beli same with harga jual$/, async () => {
  await ProdukPage.Deletehargabeli()
  await ProdukPage.Inputhargabeli('10000')
});

When(/^I input harga jual same with harga beli$/, async () => {
  await ProdukPage.Deletehargajual()
  await ProdukPage.Inputhargajual('10000')
});

When(/^I click simpan$/, async () => {
 await ProdukPage.ClikButtonsimpan();
});

Then (/^user can't  save Produk When Display notif$/, async () => {
  await ProdukPage.ValidatePopUpRequired('Price')
});

//

Given(/^I open the page menu Produk Create$/, async () => {
  await(await ProdukPage.sidebarProduk).click();
  await ProdukPage.ClikButtonTambah()
  await ProdukPage.validatepageCreateProduk();
});

When(/^user fill input data kode$/, async () => {
  await ProdukPage.InputkodeProduk('TesAT123')
});

When(/^user fill input data nama$/, async () => {
  await ProdukPage.InputnamaProduk('Beras 10KG')
});

When(/^user fill input data Deskripsi$/, async () => {
  await ProdukPage.InputdeskripsiProduk('Beras 10KG dengan netto berat bersih 220')
});

When(/^user fill nilai harga beli$/, async () => {
  await ProdukPage.Inputhargabeli('100000')
});

When(/^user fill nilai harga jual$/, async () => {
  await ProdukPage.Inputhargajual('120000')
});

When(/^user fill stok barang$/, async () => {
  await ProdukPage.Inputstok('100')
});

When(/^I click tombol simpan$/, async () => {
  await ProdukPage.ClikButtonsimpan();
 });

 Then (/^user can't  save Produk can Display notif "category_id" is required$/, async () => {
  await ProdukPage.ValidatePopUpRequired('kategori')
});

//

Given(/^I open the page menu create Produk$/, async () => {
  await(await ProdukPage.sidebarProduk).click();
  await ProdukPage.ClikButtonTambah()
  await ProdukPage.validatepageCreateProduk();
});

When(/^user input data kode$/, async () => {
  await ProdukPage.InputkodeProduk('TesAT123')
});

When(/^user input data nama$/, async () => {
  await ProdukPage.InputnamaProduk('Beras 10KG')
});

When(/^user input data Deskripsi$/, async () => {
  await ProdukPage.InputdeskripsiProduk('Beras 10KG dengan netto berat bersih 220')
});

When(/^user nilai harga beli$/, async () => {
  await ProdukPage.Inputhargabeli('100000')
});

When(/^user nilai harga jual$/, async () => {
  await ProdukPage.Inputhargajual('120000')
});

When(/^user fill field stok barang$/, async () => {
  await ProdukPage.Inputstok('100')
});

When(/^user Select kategori$/, async () => {
  await ProdukPage.PilihKategori('Umum')
});


When(/^ I click button simpan$/, async () => {
  await ProdukPage.ClikButtonsimpan();
 });

 Then (/^user successfully Create Produk and can data display on Dasboard$/, async () => {
  await ProdukPage.ValidatedataCreateProduk('Beras 10KG')
  await ProdukPage.validateTable()
});




 







































