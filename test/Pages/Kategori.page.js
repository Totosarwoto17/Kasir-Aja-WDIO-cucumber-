class KategoriPage {

    get lblDasboardkategori() { return $("//h2[contains(.,'dashboard  / kategori')]"); }
    get sidebarKategori() { return $("//div[@class='css-1xmlai3'][contains(.,'kategori')]"); }

    get btnTambah() { return $("//a[contains(.,'tambah')]"); }

    get lblnamakategori() { return $("//th[contains(.,'nama')]"); }

    get lbldeskripsi() { return $("//th[contains(.,'deskripsi')]"); }
    get inputsearchCari() { return $("//input[contains(@placeholder,'cari')]"); }
    //page Create Kategori
    get inputnama() { return $("//input[contains(@id,'nama')]"); }
    get inputdeskripsi() { return $("//input[contains(@id,'deskripsi')]"); }
    get btnSimpan() { return $("//button[contains(.,'simpan')]"); }


    async open() {
      await browser.url('https://kasiraja.ajikamaludin.id/');
    }

    async login(username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
  

    async ClikTambahbutton() {
        await (await this.btnTambah).waitForDisplayed();
        await (await this.btnTambah).waitForClickable();
        await (await this.btnTambah).click();
      }

    async ClickTitik3(params){
        await (await this.buttonTitik3).waitForDisplayed()
        await (await this.buttonTitik3).waitForClickable()
        await (await this.buttonTitik3).click()
        await (await $(`//a[@role='menuitem'][contains(.,'${params}')]`)).waitForDisplayed();
        await (await $(`//a[@role='menuitem'][contains(.,'${params}')]`)).click();
    } 

    async validateHomePageKategori() {
        await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/categories');
        await(await  this.lblDasboardkategori).waitForDisplayed();
        await(await this.lblnamakategori).waitForDisplayed();
        await(await this.lblDasboardkategori).waitForDisplayed();
        await(await this.inputsearchCari).waitForDisplayed();
        await(await this.inputsearchCari).waitForDisplayed();
    }

    async validatePageKategoriCreate() {
        await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/categories/create');
        await(await  this.inputnama).waitForDisplayed();
        await(await this.inputnama).waitForClickable();
        await(await this.inputdeskripsi).waitForDisplayed();
        await(await this.inputdeskripsi).waitForClickable();
        await(await this.btnSimpan).waitForDisplayed();
        await(await this.btnSimpan).waitForClickable();
    }

    async InputnamaKategori(params) {
        await (await this.inputnama).waitForDisplayed();
        await (await this.inputnama).waitForClickable();
        await (await this.inputnama).click();
        await (await this.inputnama).setValue(params);
    }

    async InputDeskripsiKategori(params) {
        await (await this.inputdeskripsi).waitForDisplayed();
        await (await this.inputdeskripsi).waitForClickable();
        await (await this.inputdeskripsi).click();
        await (await this.inputdeskripsi).setValue(params);
    }

    async ValidatedataCreated(params) {
        let Validate = await $(`//td[contains(.,'${params}')]`)
        await Validate.waitForDisplayed()
        await expect(Validate).toHaveText(params)
    }

    

    async ClikSimpanbutton() {
        await (await this.btnSimpan).waitForDisplayed();
        await (await this.btnSimpan).waitForClickable();
        await (await this.btnSimpan).click();
      }

      async SearchFilter(params) {
        await (await this.inputsearchCari).waitForDisplayed();
        await (await this.inputsearchCari).waitForClickable();
        await (await this.inputsearchCari).click();
        await (await this.inputsearchCari).setValue(params);
    }

    async ValidateNodata() {
        let Validatedata = await $(`(//td[@role='gridcell'])[1]`)
        await expect(Validatedata).not.toBeDisplayed();
    }








  }
  
  module.exports = new KategoriPage();
  